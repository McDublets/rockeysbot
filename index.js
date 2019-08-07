const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

var version = '1.0.1';

bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("551949295784296448");
    let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
bot.on("messageDelete", async message => {
    var logchannel = bot.channels.get("551949295784296448"); 
    let logembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Deleted")
    .addField("Message", message.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
,bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('your PC camera.', { type: "WATCHING"}).catch(console.error);
})

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("Mike")){
        msg.channel.sendMessage('Mike is big gay');
    }
})
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("mike")){
        msg.channel.sendMessage('Mike is big gay');
    }
})

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("MIKE")){
        msg.channel.sendMessage('Mike is big gay');
    }
})

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("m i k e")){
        msg.channel.sendMessage('Mike is big gay');
    }
})

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("M I K E")){
        msg.channel.sendMessage('Mike is big gay');
    }
})
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("horse")){
        msg.channel.sendMessage('Mike fucks em, and HES BIG GAY NIGGA');
    }
})
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("horses")){
        msg.channel.sendMessage('Mike fucks em, and HES BIG GAY NIGGA');
    }
})
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("Horse")){
        msg.channel.sendMessage('Mike fucks em, and HES BIG GAY NIGGA');
    }
})
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    }
    if (msg.content.includes("Horses")){
        msg.channel.sendMessage('Mike fucks em, and HES BIG GAY NIGGA');
    }
})

bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':{
                 message.channel.sendMessage('Version ' + version);
             }
             break;
        case 'clear':
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            message.channel.bulkDelete(args[1]);
            return message.reply('Messages cleared!')
            break;
                
    }
})
bot.login(token);
