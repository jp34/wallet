import express, { Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import apiRouter from "./api/router";

dotenv.config();

const app = express();
const port = 8080;

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
