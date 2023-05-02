import logger from "../../config/logger";
import prisma from "../../config/db";
import { upload } from "../../service/product/ipfs.service";
import  { ethers }  from "ethers";
import ContractHandler from "../../app/contract/ContractHandler";

export default class ProductFactory {

    public generate = async (subjectId: number) => {
        try {
            // Package patient object into a product
            const product = await this.package(subjectId);
            
            // Upload to IPFS
            const cid = await upload([product]);
            
            // Delete old products
            await prisma.product.deleteMany({
                where: {
                    cid: cid
                }
            });
            
            // Create new product
            const listing = await prisma.product.create({
                data: {
                    cid: cid,
                    subjectId: subjectId,
                }
            });
            if (!listing) throw new Error(`Unable to generate listing for product: ${cid}`);
            
            // Create & Upload voucher
            // await this.createVoucher(listing.id, cid);
            
        } catch (err: any) {
            logger.warn(`Unable to generate product for subject: ${subjectId}`);
            if (err instanceof Error) logger.warn(err.message);
            logger.error(err);
        }
    }

    private package = async (subjectId: number) => {
        // Fetch patient object
        const patient = await prisma.patient.findUnique({
            where: {
                id: subjectId
            }
        });
        if (!patient) throw new Error(`Patient does not exist with id: ${subjectId}`);
        // Create IPFS package
        const ipfsPackage = {
            meta: {
                subject: patient.id
            },
            data: patient
        };
        return ipfsPackage;
    }

    private createVoucher = async (listingId: number, cid: string) => {
        const contractHandler: ContractHandler = new ContractHandler();
        const uri = 'ipfs://' + cid;
        const price: ethers.BigNumberish = ethers.parseEther('1');
        const voucher = await contractHandler.makeVoucher(cid, uri, price);
        if (!voucher) throw new Error(`Unable to generate voucher for product: ${cid}`);
        // Update product object with voucher
        await prisma.product.update({
            where: {
                id: listingId
            },
            data: {
                voucher: JSON.stringify(voucher)
            }
        });
    }
}
