// import type { CommandInteraction } from "discord.js";
// import { SlashCommandBuilder } from "discord.js";

// import prisma from "../lib/prisma";

// export const data = new SlashCommandBuilder()
//     .setName("confirmleetcode")
//     .setDescription("Confirm that you've done the Leetcode today!");

// export async function execute(interaction: CommandInteraction) {
//     const today = new Date();
//     console.log("hello!");

//     const existing = await prisma.leetcoderecords.findUnique({
//         where: {
//             userid_currentdate: {
//                 userid: interaction.user.id,
//                 currentdate: today,
//             }
//         },
//     });

//     if (existing) {
//         return interaction.reply({
//             content: "You have already confirmed today!",
//             ephemeral: true,
//         });
//     }

//     await prisma.leetcoderecords.upsert({
//         where: {
//             userid_currentdate: {
//                 userid: interaction.user.id,
//                 currentdate: today,
//             },
//         },
//         create: {
//             userid: interaction.user.id,
//             currentdate: today,
//         },
//         update: {}
//     });

//     return interaction.reply({
//         content: "Thank you for confirming your Leetcode completion!",
//         ephemeral: true,
//     });
// }