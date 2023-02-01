import Web3 from "web3";
import { compileSol } from "solc-typed-ast";
import { HttpProvider } from "web3-core";
import { Payload } from "../model/payload.interface";

export default class Web3Service {
    private providerHost: string;
    private providerPort: string;
    private provider: HttpProvider;
    private web3: Web3;
    private contractDir: string;
    private payloadContract: string;
    private transactContract: string;

    constructor() {
        this.providerHost = process.env.WEB3_PROVIDER_HOST ?? "undefined";
        this.providerPort = process.env.WEB3_PROVIDER_PORT ?? "undefined";
        this.contractDir = process.env.WEB3_CONTRACT_DIR ?? "undefined";
        this.payloadContract = process.env.WEB3_PAYLOAD_CONTRACT ?? "undefined";
        this.transactContract = process.env.WEB3_TRANSACT_CONTRACT ?? "undefined";
        this.checkEnvironment();
        this.provider = new Web3.providers.HttpProvider(`http://${this.providerHost}:${this.providerPort}`);
        this.web3 = new Web3(this.provider);
    }

    private checkEnvironment() {
        if (this.providerHost === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_HOST");
        if (this.providerPort === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_PORT");
        if (this.contractDir === "undefined") throw Error("Environment variable not found: WEB3_CONTRACT_DIR");
        if (this.payloadContract === "undefined") throw Error("Environment variable not found: WEB3_PAYLOAD_CONTRACT");
        if (this.transactContract === "undefined") throw Error("Environment variable not found: WEB3_TRANSACT_CONTRACT");
    }

    async deploy(payload: Payload) {
        let path = `${this.contractDir}\\${this.payloadContract}`;
        let compiled = await compileSol(path, "auto");
        let abi = compiled.data.contracts[path].payload.abi;
        let bytecode = compiled.data.contracts[path].payload.evm.bytecode.object;
        return await new this.web3.eth.Contract(abi)
            .deploy({ data : bytecode })
            .send({ from: payload.from, gas: 870000 });
    }
}
