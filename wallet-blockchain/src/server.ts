// Configure environment before imports
import dotenv from "dotenv";
import { configureEnvironment } from "./config";
export var environment = configureEnvironment();
dotenv.config({ path: environment.file });

// Import modules
import express, { Request, Response, NextFunction} from "express";
import morgan from "morgan";
import apiRouter from "./api/router";

const app = express();
const port = process.env.WEB3_SERVER_PORT;

app.use(express.json());
app.use(morgan("combined"));

app.use("/api", apiRouter);

// Handle errors
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error);
    return response.status(500).json({ error: error });
});

// Start app
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
