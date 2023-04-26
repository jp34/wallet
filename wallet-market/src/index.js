const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");

// Initialize app
const app = express();
const port = process.env.PORT;
if (!port) throw new Error("Missing environment variable: PORT");

// Configure app
app.use(express.static('public'))

// Configure routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

// Start app
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
