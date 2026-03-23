require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Commande /start
bot.start(async (ctx) => {
  // Premier message
  await ctx.reply(
    "Salut 👋\nTu veux découvrir le bot ?\n\nSuis ces étapes 👇",
    Markup.inlineKeyboard([
      [Markup.button.url("🚀 Commencer", "https://ton-lien.com")]
    ])
  );

  // Attendre 3 secondes
  setTimeout(async () => {
    await ctx.reply("👇 ");
  }, 3000);
});

// Lancer le bot
bot.launch();

console.log("Bot lancé ✅");
