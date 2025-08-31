import type { CommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("help")
    .setDescription("Replies with a list of commands!");

export async function execute(interaction: CommandInteraction) {
    const embed = {
        title: "Commands",
        description: "mustbot's commands!",
        color: 0x7BAFD4,
        fields: [
            {
                name: "/ping",
                value: "Pong!",
            },
            {
                name: "/together",
                value: "Sends a picture of us!",
            },
            {
                name: "/confirmleetcode",
                value: "Confirms your Leetcode solve for today!",
            },
            {
                name: "/help",
                value: "This command...",
            },
        ],
    };

    await interaction.reply({ embeds: [embed] });
}