import Web3 from "web3";
import { compileSol } from "solc-typed-ast";
import path from "path";

const PROVIDER_HOST = process.env.WEB3_PROVIDER_HOST ?? "undefined";
if (PROVIDER_HOST === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_HOST");

const PROVIDER_PORT = process.env.WEB3_PROVIDER_PORT ?? "undefined";
if (PROVIDER_PORT === "undefined") throw Error("Environment variable not found: WEB3_PROVIDER_PORT");

const provider = new Web3.providers.HttpProvider(`http://${PROVIDER_HOST}:${PROVIDER_PORT}`);
const web3 = new Web3(provider);

export const deploy = async (address: string, payload: Object) => {
    const contractPath = path.join(__dirname, "../..", "contracts", "payload.sol");
    const compiled = await compileSol(contractPath, "auto");
    const abi = compiled.data.contracts[contractPath].payload.abi;
    const bytecode = compiled.data.contracts[contractPath].payload.evm.bytecode.object;
    return await new web3.eth.Contract(abi)
        .deploy({ data : bytecode })
        .send({ from: address, gas: 870000 });
}
