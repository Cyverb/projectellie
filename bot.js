const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const http = require('http');
require('dotenv').config();

// Create a new client instance with minimal intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// When the client is ready, run this code (only once)
client.once('clientReady', () => {
    console.log(`✅ Bot is online! Logged in as ${client.user.tag}`);
    
    // Set bot activity to show it's online
    client.user.setActivity('personnel & ensuring safety', { type: ActivityType.Watching });
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

// Create a simple HTTP server for Render
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Discord Bot is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🌐 HTTP server running on port ${PORT}`);
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

