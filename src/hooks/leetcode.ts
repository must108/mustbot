import { WebhookClient } from "discord.js";
import cron from "node-cron";

import { config } from "../config";

export async function execute() {
    const webhook = new WebhookClient({
        url: config.DISCORD_LEETCODE_WEBHOOK_URL,
    });

    try {
        cron.schedule("0 10 * * *", async () => {
            await webhook.send({
                content: "@everyone, do your daily Leetcode."
            });
        });
    } catch (err) {
        console.error(err);
    }
}