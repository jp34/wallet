import { Web3Storage, File } from "web3.storage";
import { Payload } from "../model/payload.interface";

export default class IpfsService {
    
    private token: string;
    private client: Web3Storage;

    constructor() {
        this.token = process.env.WEB3_IPFS_TOKEN ?? "undefined";
        if (this.token === "undefined")
            throw new Error("IPFS_JWT_TOKEN is not defined in .env!");
        this.client = new Web3Storage({ token: this.token });
    }

    private buildFileBuffers = (documents: Payload[]) => {
        let files: File[] = [];
        for (let doc of documents) {
            let buffer = Buffer.from(JSON.stringify(doc));
            files.push(new File([buffer], doc.from));
        }
        return files;
    };

    public upload = async (documents: Payload[]) => {
        let files = this.buildFileBuffers(documents);
        let cid = await this.client.put(files);
        console.log(
            `Successfully uploaded ${documents.length} files. CID: ${cid}`
        );
        return cid;
    };

    public getOne = async (cid: string) => {
        let response = await this.client.get(cid);
        return await response?.files();
    };

    public getAll = async () => {
        const uploads = [];
        for await (const item of this.client.list()) {
            uploads.push(item);
        }
        return uploads;
    };
}
