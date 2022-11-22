"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ipfs_controller_1 = __importDefault(require("./ipfs/ipfs.controller"));
class ApiController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.use("/ipfs", new ipfs_controller_1.default().router);
    }
}
exports.default = ApiController;
