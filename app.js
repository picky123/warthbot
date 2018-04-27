const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDM5NDE1NDcyMTgyNTI1OTUz.DcS2TA.nXeGJI1MfyVLIzUaFEBXPl7SpmQ';

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   client.user.setStatus("dnd");
  client.user.setGame(`in ${client.guilds.size} servere | -help`);
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea **WHART**, ${member}!
:small_blue_diamond: În primul, aș dori să vizitezi: 
#index 
#updates
În primul rând vreau să îți multumesc că ai ales serverul **WHART.**
Hai să îti prezentăm ce ai putea găsi pe server :
:small_orange_diamond: Bot-ul serverului. 
:small_orange_diamond: Un staff decent.
:small_orange_diamond: Un mediu prietenos.`);
});

client.login('NDM5NDE1NDcyMTgyNTI1OTUz.DcS2TA.nXeGJI1MfyVLIzUaFEBXPl7SpmQ');

client.on('ready', () => {
  client.user.setGame('♛ WarthBot.', 'https://www.twitch.tv/streamerhouse')
})
