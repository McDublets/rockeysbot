const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

var version = '1.0.1';

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    } 
    (msg.content);{
         const logChannel = bot.channels.get("609184984569348097")
    logChannel.send(`${msg.author.username}: ${msg.content}`)
   
    }
});
bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    } 
    (msg.content);{
         const logChannel = bot.channels.get("608706319980953610")
    logChannel.send(`${msg.author.username}: ${msg.content}`)
   
    }
});
bot.on('message', msg=>{
    if (msg.content.includes("and HES BIG GAY NIGGA")){
        msg.channel.sendMessage('GRAY DOES TOO!!!!!!!');
    }
})
bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("606657150248419368");
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
    var logchannel = bot.channels.get("607768828335620136"); 
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



bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':
            message.delete();
            {
                 message.channel.sendMessage('Version ' + version);
             }
             break;
        case 'clear':
            message.delete();
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            message.channel.bulkDelete(args[1]);
            
            return message.reply('Messages cleared!')
            break;
                
    }
})
bot.login(token);
