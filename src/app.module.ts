import { Module } from '@nestjs/common';
import { Bot } from 'grammy';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    const bot = new Bot('6874882202:AAGt5c-r3MkRinlGeOeE99d36QNcA8wuZCI');

    bot.command('start', async (ctx) => {
      const username = ctx.message.from.username;
      ctx.reply(`Welcome ${username}!`);
    });

    bot.on('message:text', (ctx) => {
      ctx.reply(`Echo ${ctx.message.text}`);
    });

    bot.start();
  }
}
