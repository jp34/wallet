import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.SERVER_ACCESS_SECRET ?? undefined;
const REFRESH_SECRET = process.env.SERVER_REFRESH_SECRET ?? undefined;
const ACCESS_EXP = process.env.SERVER_ACCESS_EXP ?? undefined;
const REFRESH_EXP = process.env.SERVER_REFRESH_EXP ?? undefined;

export const generateAccessToken = (id: number) => {
    if (ACCESS_SECRET == undefined) throw new Error("Missing environment variable: ACCESS_SECRET");
    if (ACCESS_EXP == undefined) throw new Error("Missing environment variable: ACCESS_EXP");
    return jwt.sign({ id: id, tokenType: 'access' }, ACCESS_SECRET, { expiresIn: ACCESS_EXP });
}

export const generateRefreshToken = (id: number) => {
    if (REFRESH_SECRET == undefined) throw new Error("Missing environment variable: REFRESH_SECRET");
    if (REFRESH_EXP == undefined) throw new Error("Missing environment variable: REFRESH_EXP");
    return jwt.sign({ id: id, tokenType: 'access' }, REFRESH_SECRET, { expiresIn: REFRESH_EXP });
}

export const refreshAccessToken = (refresh: string) => {
    if (REFRESH_SECRET == undefined) throw new Error("Missing environment variable: REFRESH_SECRET");
    const decoded = jwt.verify(refresh, REFRESH_SECRET);
    if (!decoded || typeof decoded == "string") throw new Error("Invalid or malformed token provided");
    return generateAccessToken(decoded.id);
}
