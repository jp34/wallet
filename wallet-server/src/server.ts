import dotenv from "dotenv";
dotenv.config();
import logger from "./util/logger";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import api from "./api/router";
import prisma from "./config/db";

const app = express();
const port = process.env.API_SERVER_PORT;

app.use(bodyParser.json());
app.use(morgan("combined"));

app.use("/api", api);

prisma.$connect();

app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
});

prisma.$disconnect();
