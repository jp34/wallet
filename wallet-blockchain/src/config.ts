import path from "path";

export const configureEnvironment = () => {
    let e = { type: "", file: "" };
    // Load options from command line arguments
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i] == "--env") e.type = process.argv[i + 1];
    }
    // Load environment file
    e.file = configureEnvironmentFile(e);
    return e;
}

const configureEnvironmentFile = (e: any) => {
    const envFileDir = path.join(__dirname, "/../../config");
    if (e.type == "dev")
        return path.join(envFileDir, "dev.env");
    else
        console.log(`Unknown environment type: ${e.type}`);
        return "";
}
