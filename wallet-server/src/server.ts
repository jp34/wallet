import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import logger from "./util/logger";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import api from "./api/router";
import prisma from "./config/db";

const HOST = process.env.API_SERVER_HOST;
const PORT = process.env.API_SERVER_PORT;

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:19000"
}));
app.use(morgan("combined"));

app.use("/api", api);

prisma.$connect();

app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});

prisma.$disconnect();
