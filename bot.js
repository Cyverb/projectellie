const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
    
    // Set bot activity to show it's online
    client.user.setActivity('24/7 Uptime', { type: ActivityType.Watching });
});

// Basic ping command
client.on('messageCreate', message => {
    if (message.author.bot) return;
    
    if (message.content === '!ping') {
        message.reply(`🏓 Pong! Latency: ${client.ws.ping}ms`);
    }
    
    if (message.content === '!status') {
        const uptime = process.uptime();
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        
        message.reply(`🤖 **Bot Status**\n⏱️ Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s\n💓 Ping: ${client.ws.ping}ms`);
    }
    
    if (message.content === '!help') {
        message.reply(`📋 **Available Commands:**\n\`!ping\` - Check bot latency\n\`!status\` - Show bot uptime and status\n\`!help\` - Show this help message`);
    }
});

// Handle errors
client.on('error', error => {
    console.error('Discord client error:', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
