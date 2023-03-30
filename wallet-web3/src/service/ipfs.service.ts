import { Web3Storage, File } from "web3.storage";

const token = process.env.WEB3_IPFS_TOKEN ?? "undefined";
const client = new Web3Storage({ token: token });

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

export const findOne = async (cid: string) => {
    const response = await client.get(cid);
    const data = await response?.files();
    if (data) return data[0];
    else return {};
};

export const findMany = async () => {
    const uploads = [];
    for await (const item of client.list()) {
        uploads.push(item);
    }
    return uploads;
};

export const upload = async (emrArray: Object[]) => {
    const files = buildFileBuffers(emrArray);
    const cid = await client.put(files);
    console.log(
        `Successfully uploaded ${emrArray.length} files. CID: ${cid}`
    );
    return cid;
};
