import Web3 from "web3";
import { compileSol } from "solc-typed-ast";
import { HttpProvider } from "web3-core";
import { Payload } from "../model/payload.interface";
import path from "path";

export default class Web3Service {
    private providerHost: string;
    private providerPort: string;
    private provider: HttpProvider;
    private web3: Web3;

    constructor() {
        this.providerHost = process.env.WEB3_PROVIDER_HOST ?? "undefined";
        this.providerPort = process.env.WEB3_PROVIDER_PORT ?? "undefined";
        this.checkEnvironment();
        this.provider = new Web3.providers.HttpProvider(`http://${this.providerHost}:${this.providerPort}`);
        this.web3 = new Web3(this.provider);
    }

    private checkEnvironment() {
        if (this.providerHost === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_HOST");
        if (this.providerPort === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_PORT");
    }

    async deploy(payload: Payload) {
        const contractPath = path.join(__dirname, 'contracts', 'payload.sol');
        const compiled = await compileSol(contractPath, "auto");
        const abi = compiled.data.contracts[contractPath].payload.abi;
        const bytecode = compiled.data.contracts[contractPath].payload.evm.bytecode.object;
        return await new this.web3.eth.Contract(abi)
            .deploy({ data : bytecode })
            .send({ from: payload.from, gas: 870000 });
    }
}
