const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";



client.on('ready', () => {
  console.log(`Merhaba Ben ${client.user.tag} Hizmete Hazırım !`);
  client.user.setGame("+davet Yazarak Botu Davet Edebilirsiniz");
  client.user.setStatus('dnd', '+davet Yazarak Botu Davet Edebilirsiniz')
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam, Hoş Geldin ! :upside_down:');
  }
  if (msg.content.toLowerCase() === '+afkaç') {
    msg.reply('**Adlı Üyenin Afk Durumu Aktifleştirildi** kapatmak için +afkkapat :) !');
  }
  if (msg.content.toLowerCase() === '+afkkapat') {
    msg.reply('**Adlı Üyenin Afk Durumu Kapatıldı** açmak için için +afkaç :) !');
  }
  if (msg.content.toLowerCase() === '+tag') {
    msg.reply('**Tagımız †** Tag Alarak @Eternals Rolünü Elde Edebilirsiniz. ');
  }
  if (msg.content.toString() === '+davet') {
    msg.reply('**Merhaba Botun DAVET Linki:** https://bit.ly/2Mq4y3s ');
  }
});

client.login('NjEyOTI4MjkxNjc4MDYwNTY2.XVrBcQ.Jk3aWHGYPhcU04CB57LATDxQ0Kw');
