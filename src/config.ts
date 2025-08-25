import dotenv from "dotenv";

dotenv.config();

const { 
    DISCORD_TOKEN, 
    DISCORD_CLIENT_ID,
    DISCORD_TOGETHER_WEBHOOK_URL,
    DISCORD_LEETCODE_WEBHOOK_URL,
    TOGETHER_URL,
    IMAGE_API_HEADER,
    IMAGE_API_KEY,
} = process.env;

if (!DISCORD_TOKEN || 
        !DISCORD_CLIENT_ID || 
        !DISCORD_TOGETHER_WEBHOOK_URL ||
        !DISCORD_LEETCODE_WEBHOOK_URL ||
        !TOGETHER_URL ||
        !IMAGE_API_HEADER ||
        !IMAGE_API_KEY
    ) {
    throw new Error("Missing environment variables!");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    DISCORD_TOGETHER_WEBHOOK_URL,
    DISCORD_LEETCODE_WEBHOOK_URL,
    TOGETHER_URL,
    IMAGE_API_HEADER,
    IMAGE_API_KEY
}