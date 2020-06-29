//SEND MESSAGE TO A ESPECIFIC ROLE


const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "!"

client.on("message", message =>{
  if(message.content.startsWith('j+enviar'))
  client.guilds.cache.get(/* "SERVER ID" */).roles.cache.get(/* ROLE ID */).members.forEach((membro) => {
  
    membro.send(/* "MESSAGE YOU WANT TO SEND" */).then({setTimeout: 522000})
    .then(message => message.delete({ timeout: 240000 }));

    const comprovar = message.guild.channels.cache.get('720010768539713576')
    comprovar.send(`${membro} RECEBEU`)
  })
})
