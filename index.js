const Discord = require("discord.js")
const client = new Discord.Client()

const fs = require("fs")

client.commands = new Discord.Collection()

//loads all files from the "Commands" folder
const commandFiles = fs.readdirSync("./Commands").filter(file => file.endsWith(".py"))

//loads the command from each individual file
for(const file of commandFiles){
    const command = require(`./Commands/${file}`)
    client.commands.set(command.name, command)
    console.log(`Loaded: ${command.name}`)
}

client.on("ready", () => {
    console.log(client.user.username + " is ready")
})

client.login("NzY2MjY3NDExMzU1NTMzMzEy.X4g4Iw.k2Iltx-PL2UeYSrktDJkMUG7Y1A")