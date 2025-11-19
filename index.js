// index.js
const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

// Creează client Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

// Când botul este gata
client.once("ready", async () => {
  console.log(`Bot online: ${client.user.tag}`);

  try {
    // Folosim ID-urile direct în cod
    const guild = await client.guilds.fetch("1435618879220088842");
    const channel = await guild.channels.fetch("1440487955914555585");

    // Conectează botul la voice
    joinVoiceChannel({
      channelId: channel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    });

    console.log("Connected to voice!");
  } catch (error) {
    console.error("Eroare la conectarea în voice:", error);
  }
});

// Logare bot cu token direct
client.login(process.env.DISCORD_TOKEN);
