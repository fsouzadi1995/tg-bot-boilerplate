import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN);

bot.on('text', (ctx) => {
  ctx.telegram.sendMessage(process.env.CHAT_ID, 'hello');
});

bot.launch();
