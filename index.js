// Takes info from discord.js package and puts it in the Discord variable
const Discord = require('discord.js')

// Load .env variables into a global variable which can be used anywhere with process.env
require("dotenv").config

// Which events the bot is listening to
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
})

// Logs to console that the bot successfully logged in and with which user
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

// Responds to "hi" with "Hello World!"
client.on("messageCreate", (message) => {
  if (message.content == "hi"){
    message.reply("Hello World!")
  }
})

// Log in as bot with the token
client.login(process.env.TOKEN)