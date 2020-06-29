const Discord = require('discord.js');
var config = require('./config.json');
const client = new Discord.Client();
let collection = new Set();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {

    if(config.channel != null && message.channel.id !== config.channel) {
      return;
    }

    if (collection.has(message.channel.id)) {
      return console.log("Cooldown " + message.channel.name)
    } 

    collection.add(message.channel.id)
    setTimeout(() => {
        collection.delete(message.channel.id)
        console.log("Cooldown finished " + message.channel.name)
    }, config.delay)

  
    message.react(config.emoji).then(m => {
        console.log("Reacted " + message.channel.name)
        if(config.autoremove) {
          m.remove();
        }
       
    })
});

client.login(config.token);