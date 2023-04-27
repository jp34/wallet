import {
	ethers,
	Contract,
	Wallet,
	JsonRpcProvider,
	formatEther,
	BigNumberish,
	ContractRunner
} from "ethers";
import LazyMinter from "./LazyMinter";
import LazyNFT from "./LazyNFT.json";
import logger from "../../util/logger";

const PROVIDER_LINK = process.env.PROVIDER_LINK ?? "undefined";
const SIGNER_PK = process.env.SIGNER_PK ?? "undefined";
if (PROVIDER_LINK === "undefined") throw new Error("Missing environment variable: PROVIDER_LINK");
if (SIGNER_PK === "undefined") throw new Error("Missing environment variable: SIGNER_PK");

export default class ContractHandler {

	contractAddress: string;
	contractABI: any;
	providerLink: any;
	provider: any;
	signer: any;
	buyerContract: any;
	contract: any;

	constructor() {
		this.contractAddress = LazyNFT.address;
		this.contractABI = LazyNFT.abi;
		this.providerLink = PROVIDER_LINK;
		this.provider = null;
		this.signer = null;
		this.buyerContract = null;
		this.contract = null;
		this.init();
	}

	async init() {
		this.provider = new JsonRpcProvider(PROVIDER_LINK);
		this.signer = new Wallet(SIGNER_PK, this.provider);
		this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.signer);
	}

	async makeVoucher(id: string, uri: string, price: bigint) {
		await this.init();
		const lazyMinter = new LazyMinter(this.contract, this.signer);
		const voucher = await lazyMinter.createVoucher(id, uri, price);
		logger.info(`Minted new voucher for token: ${voucher.tokenId}`);
		return voucher;
	}

	async redeemVoucher(buyer: any, voucher: any) {
		await this.init();
		const price = voucher.minPrice;
		const buyerContract = new Contract(this.contractAddress, this.contractABI, buyer);
		const tx = await buyerContract.redeem(buyer.address, voucher, { value: price })
		const txReceipt = await tx.wait();
		logger.info(`NFT redeemed by buyer: ${buyer.address}`);
		/* CODE TO STORE NFT PURCHASE INFO IN DATABASE OR CONTRACT GOES HERE */
		const bal = await this.withdraw();
		logger.info(bal + ' Ether has been received by Admin Account.')
		return txReceipt;
	}

	async checkWithdrawalBalance() {
		await this.init();
		const contractBalance = await this.contract.availableToWithdraw();
		const balance: BigNumberish = contractBalance.toBigInt()
		const valueInEther = formatEther(balance);
		console.log(`${valueInEther} Ether available for withdrawal.`);
		return valueInEther;
	}

	async withdraw() {
		await this.init();
		console.log(`Attempting to withdraw Ether from contract to admin account.`);
		const availableBalance = await this.checkWithdrawalBalance();
		const tx = await this.contract.withdraw();
		const txReceipt = await tx.wait();
		console.log(`${availableBalance} Ether has been sent to account ${this.signer.address}.`);
		/* CODE TO STORE WITHDRAWAL INFO IN DATABASE OR CONTRACT GOES HERE */
		return availableBalance;
	}

	// Transfer Ether to patient
	async patientEtherTransfer(patientAddress: string, amount: number) {
		await this.init();
		const bal = await this.checkWithdrawalBalance();
		if (parseFloat(bal) > 0) {
			this.withdraw();
		}
		const tx = await this.contract.transferEther(patientAddress, amount, {value: amount});
		const txReceipt = await tx.wait();
		// RESET AMOUNT OWED TO PATIENT TO 0 HERE
		return txReceipt;
	}

	async getNFTFromTokenId(signer: ContractRunner, tokenId: string) {
		await this.init();
		const signerContract = new Contract(this.contractAddress, this.contractABI, signer);
		const NFTData = await signerContract.getListedTokenForId(tokenId);
		return NFTData;
	}

	async getAccountNFTs() {
		await this.init();
		const NFTData = await this.contract.getMyNFTs();
		return NFTData;
	}

	// Retrieve IPFS Link from token metadata (currently broken)
	// async getTokenMetadata(tokenId: string) {
	//   await this.init();
	//   const metadataURI = await this.getMetadataURI(tokenId);
	//   console.log("URI: " + metadataURI);
	//   const response = await axios.get(metadataURI);
	//   const metadata = response.data;
	//   return metadata;
	// }

	async getMetadataURI(tokenId: string) {
		await this.init();
		const tokenURI = await this.contract.tokenURI(tokenId);
		return tokenURI;
	}
}
