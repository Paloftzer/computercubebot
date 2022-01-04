// Takes info from discord.js package and puts it in the Discord variable
const Discord = require("discord.js")

// Load .env variables into a global variable which can be used anywhere with process.env
require("dotenv").config()

const generateImage = require("./generateImage")

// Which events the bot is listening to
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
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

// Sets the welcome channel to the channel with the given id
const welcomeChannelId = "928007012116226148"

// Sends a welcome message with an image to newly joined members
client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member)
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server`,
    files: [img]
  })
})

// Log in as bot with the token
client.login(process.env.TOKEN)