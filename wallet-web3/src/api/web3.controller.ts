import { Request, Response } from "express";
import { Payload } from "../model/payload.interface";
import { upload } from "../service/ipfs.service";
import { deploy } from "../service/web3.service";

export default class Web3Controller {

    public create = async (request: Request, response: Response) => {
        let payload: Payload = request.body.payload;
        if (payload == undefined) {
            response.status(400).json({
                status: "failed",
                error: "Missing payload"
            });
            return;
        }

        // Store payload data on IPFS
        console.log(`Storing payload: ${JSON.stringify(payload)}`);
        let cid = await upload([payload.emr]);

        // Deploy payload to ethereum
        console.log(`Deploying new payload: ${JSON.stringify(payload)}`);
        let result = await deploy(payload);

        response.status(200).json({
            status: "success",
            transaction: {
                storage: {
                    cid: cid
                },
                deploy: {
                    address: result.options.address
                }
            }
        });
    };
}
