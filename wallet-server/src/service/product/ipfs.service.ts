import { Web3Storage, File } from "web3.storage";

const token = process.env.API_IPFS_TOKEN ?? "undefined";
const client = new Web3Storage({ token: token });

// Local helper functions

const buildFileBuffer = (emr: Object) => {
    const buffer = Buffer.from(JSON.stringify(emr));
    const fileName = 'emr';
    return new File([buffer], fileName);
}

const buildFileBuffers = (emrArray: Object[]) => {
    var files: File[] = [];
    for (var emr of emrArray) files.push(buildFileBuffer(emr));
    return files;
};

// Exported service functions

export const getDocument = async (cid: string) => {
    const response = await client.get(cid);
    const data = await response?.files();
    if (data) return data[0];
    else return {};
};

export const getAllDocuments = async () => {
    const uploads = [];
    for await (const item of client.list()) {
        uploads.push(item);
    }
    return uploads;
};

export const uploadDocument = async (emrArray: Object[]) => {
    const files = buildFileBuffers(emrArray);
    const cid = await client.put(files);
    console.log(
        `Successfully uploaded ${emrArray.length} files. CID: ${cid}`
    );
    return cid;
};
