const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDM4MDYwOTkwNzY5MjY2Njg5.Db_JGQ.W_Vwr53KJK7fo5gjJTrsglQghAw';

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   client.user.setStatus("dnd");
  client.user.setGame(`in ${client.guilds.size} servere | -help`);
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea **WHART**, ${member}!
:white_small_square: Ținând cont că ești o persoană nou venită pe serverul nostru, și dorim să te simti cat mai bine. 
Ne para rau ca nu avem cel mai bun bot sau cel mai bun staff dar o sa ne dezvoltam pe parcurs.
Te rog uitate pe **index** o sa te ajute destul de mult`);
});

client.login('NDM4MDYwOTkwNzY5MjY2Njg5.Db_JGQ.W_Vwr53KJK7fo5gjJTrsglQghAw');

client.on('ready', () => {
  client.user.setGame('♛ WarthBot.', 'https://www.twitch.tv/streamerhouse')
})
