// import cron from "node-cron";
// import { Client } from "discord.js";
// import prisma from "../lib/prisma";

// export function setupLeetcodeCron(client: Client) {
//     cron.schedule("0 17 * * *",
//         async () => {
//             try {
//                 const users = await prisma.botusers.findMany();

//                 for (const user of users) {
//                     const leetcodeUser = await prisma.leetcoderecords.findFirst({
//                         where: {
//                             userid: String(user.id)
//                         }
//                     });

//                     if (!leetcodeUser) {
//                         const discordId = user.userid;

//                         try {
//                             const userDM = await client.users.fetch(discordId);
//                             await userDM.send(`<@${discordId}>. Please do your Leetcode today!`);
//                         } catch (err) {
//                             console.error(`Failed to DM user ${discordId}`, err);
//                         }
//                     }
//                 }
//             } catch (err) {
//                 console.error("Cron error:", err);
//             }
//         }, { timezone: "America/New_York" }
//     );
// }