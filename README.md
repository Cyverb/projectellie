# Discord Bot - 24/7 Uptime

A simple Discord bot designed to stay online 24/7 for uptime monitoring purposes using Render and UptimeRobot.

## Features

- Basic ping/pong command
- Uptime status tracking
- Help command
- 24/7 online status

## Setup

### 1. Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to "Bot" section and click "Add Bot"
4. Copy the bot token
5. Go to "OAuth2" > "URL Generator"
6. Select "bot" scope and "Send Messages" permission
7. Use the generated URL to invite bot to your server

### 2. Local Development

1. Clone this repository
2. Copy `env.example` to `.env`
3. Add your Discord bot token to `.env`
4. Install dependencies: `npm install`
5. Run the bot: `npm start`

### 3. Deploy to Render

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Create a new "Web Service"
4. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Plan**: `Free`
5. Add environment variable:
   - **Key**: `DISCORD_TOKEN`
   - **Value**: Your bot token
6. Deploy!

### 4. Monitor with UptimeRobot

1. Go to [UptimeRobot](https://uptimerobot.com)
2. Create a new monitor
3. Select "HTTP(s)" monitor type
4. Enter your Render app URL
5. Set monitoring interval (5 minutes for free plan)
6. The bot will stay online 24/7!

## Commands

- `!ping` - Check bot latency
- `!status` - Show bot uptime and status  
- `!help` - Show available commands

## Notes

- This bot is designed for uptime monitoring only
- Uses minimal resources
- Free tier compatible
- No database required
