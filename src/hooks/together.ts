import { EmbedBuilder, WebhookClient } from "discord.js";
import JIMP from "jimp";
import cron from "node-cron";

import { config } from "../config";

interface TogetherProps {
    url: string;
}

export function execute() {
    const webhook = new WebhookClient({
        url: config.DISCORD_TOGETHER_WEBHOOK_URL,
    });
}