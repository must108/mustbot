import { EmbedBuilder, WebhookClient } from "discord.js";
import JIMP from "jimp";
import cron from "node-cron";

import { config } from "../config";

interface TogetherProps {
    url: string;
}

export async function execute() {
    const webhook = new WebhookClient({
        url: config.DISCORD_TOGETHER_WEBHOOK_URL,
    });

    const url = config.TOGETHER_URL;
    const header = config.IMAGE_API_HEADER;
    const key = config.IMAGE_API_KEY;

    try {
        cron.schedule("0 18 * * *", async () => {
            const res = await fetch(url, {
                headers: {[header]: key}
            });
            const data = (await res.json()) as TogetherProps;

            if (data.url) {
                const imageUrl = data.url;

                const img = await JIMP.read(imageUrl);
                const width = (await img).getWidth(),
                    height = (await img).getHeight();
                const color = (await img).getPixelColor(width / 2, height / 2);

                const r = (color >> 24) & 0xff;
                const g = (color >> 16) & 0xff;
                const b = (color >> 8) & 0xff;

                const hexString = `${((1 << 24) + (r << 16) + (g << 8) + b)
                    .toString(16)
                    .slice(1)
                    .toUpperCase()}`;
                const embed = new EmbedBuilder()
                    .setTitle("Daily Pic of Us!")
                    .setImage(imageUrl)
                    .setColor(`#${hexString}`);

                return webhook.send({
                    embeds: [embed]
                });
            } else {
                console.error("Together image is undefined!");
            }
        }); 
    } catch (err: any) {
        console.error(err);
    }
}
