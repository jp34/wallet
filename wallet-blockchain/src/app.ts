import express from "express";
import morgan from "morgan";
import ApiController from "./api.controller";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.initMiddleware();
        this.initControllers();
    }

    private initMiddleware() {
        this.app.use(express.json());
        this.app.use(morgan("combined"));
    }

    private initControllers() {
        this.app.use("/api", new ApiController().router);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}...`);
        });
    }
}
