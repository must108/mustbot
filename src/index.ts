import { Client } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { config } from "./config";
import { commands } from "./commands";

const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", async () => {
    console.log("MustBot is ready!");

    if (client.guilds.cache.size > 0) {
        for (const guild of client.guilds.cache.values()) {
            await deployCommands({ guildId: guild.id });
        }
    }
});

client.on("guildCreate", async (guild) => {
    await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }

    const command = commands[interaction.commandName as keyof typeof commands];
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply("Error on interaction create!");
    }
});

client.login(config.DISCORD_TOKEN);

export default client;
