import dotenv from 'dotenv';
import { Bot } from 'grammy';

dotenv.config();

const bot = new Bot(process.env.BOT_API_KEY);

bot.command('start', async (ctx) => {
  await ctx.reply('Bot started!');
});

bot.start();