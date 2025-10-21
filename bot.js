const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

// Create a new client instance with minimal intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
    
    // Set bot activity to show it's online
    client.user.setActivity('Personnel, ensuring safety', { type: ActivityType.Watching });
});

// Simple uptime logging
setInterval(() => {
    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    
    console.log(`🤖 Bot uptime: ${days}d ${hours}h ${minutes}m`);
}, 300000); // Log every 5 minutes

// Handle errors
client.on('error', error => {
    console.error('Discord client error:', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

