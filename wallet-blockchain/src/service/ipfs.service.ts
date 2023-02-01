import { Web3Storage, File } from "web3.storage";
import { Payload } from "../model/payload.interface";

export default class IpfsService {
    private api_token: string;
    private client: Web3Storage;

    constructor() {
        this.api_token = process.env.API_TOKEN_IPFS ?? "undefined";
        if (this.api_token === "undefined")
            throw "API_TOKEN_IPFS is not defined in .env!";
        this.client = new Web3Storage({ token: this.api_token });
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
