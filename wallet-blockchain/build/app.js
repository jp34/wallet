"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const api_controller_1 = __importDefault(require("./api.controller"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initMiddleware();
        this.initControllers();
    }
    initMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)("combined"));
    }
    initControllers() {
        this.app.use("/api", new api_controller_1.default().router);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}...`);
        });
    }
}
exports.default = App;
