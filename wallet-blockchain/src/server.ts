import dotenv from "dotenv";
import App from "./app";

// Configure environment
dotenv.config();

// Configure express
const port = 8080;
const app = new App(port);

// Start server
app.listen();
