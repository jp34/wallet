import Web3 from "web3";
import fs from "fs";
import { compileSol } from "solc-typed-ast";
import { PromiEvent, TransactionReceipt } from "web3-core";
import { Contract, ContractSendMethod } from "web3-eth-contract"

export default class MintService {
    private web3: Web3

    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    }

    async deploy(filename: string) {
        let path = `${process.env.CONTRACT_DIR}\\${filename}`;
        let compiled = await compileSol(path, "auto");

        let abi = compiled.data.contracts[path].initial.abi;
        let bytecode = compiled.data.contracts[path].initial.evm.bytecode.object;

        // TODO - Get patient account
        let accounts = await this.web3.eth.getAccounts();
        let account = accounts[1];

        let contract = await new this.web3.eth.Contract(abi)
            .deploy({ data : bytecode })
            .send({ from: account, gas: 870000 });

        let contractAddress = contract.options.address;

        return {
            from: account,
            contractAddress: contract.options.address,

        };
    }

    async call() {
        // myContract = new web3.eth.Contract(ABI, '0x94B64632Fac4A0D79F17FC1a0f968E37F2D571b3');
        // myContract.methods.set("Hello").send({from: account});
        // data = myContract.methods.get().call();
        // console.log(data);
    }
}
