import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { listDocument, mintDocument } from "./services";

// Configure environment
dotenv.config();

// Configure express
const app: Express = express();
const port = 8080;

// Define endpoints

app.get("/list", (req: Request, res: Response) => {
    res.send("This is an endpoint for listing json docs!");
    listDocument();
});

app.get("/mint", (req: Request, res: Response) => {
    res.send("This is an endpoint for minting json docs!");
    mintDocument();
});

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
