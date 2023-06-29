
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildScheduledEvents] });
const axios = require('axios');
const mongoose = require("mongoose");
const User = require('./schemas/UserSchema')
const Clans = require('./schemas/ClanLinkSchema')
const Events = require('./schemas/EventsSchema')
var cron = require('node-cron');


const config = require('./config')
const COC_API_BASE = 'https://api.clashofclans.com/v1'
let WarIds = {}
let Players = {}
const text = ""
const exp = '<:exp:1096569684297519104>'
const trophy = '<:trophy:1096569694279966741>'
const block = "`"
const emojis= [
  " ",
  '<:TH_01:1095699898969636924>',
  '<:TH_02:1095699901876293703>',
  '<:TH_03:1095699902861950998>',
  '<:TH_04:1095699905810550866>',
  '<:TH_05:1096570025382514738>',
  '<:TH_06:1096570027420942336>',
  '<:TH_07:1096570000212508763>',
  '<:TH_08:1096570002716500098>',
  '<:TH_09:1096570004167721002>',
  '<:TH_10:1096570006948552714>',
  '<:TH_11:1096570009125392384>',
  '<:TH_12:1096570011977519204>',
  '<:TH_13:1096570014066286673>',
  '<:TH_14:1096570017811804351>',
  '<:TH_15:1096570022400364621>',
]
let heroes= {
  barb:"<:barbarian_king:1096569618505683005>",
  archer:"<:archer_queen:1096569616051998741>",
  warden:"<:grand_warden:1096569623555620965>",
  royal:"<:royal_champion:1096569612809818154>"
}

const prefix = '!';
client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);
  await mongoose.connect(config.mongoDB.key, {
    keepAlive: true,
  })
  console.log(`\nhttps://discord.com/oauth2/authorize?client_id=1102973967330983946&scope=bot&permissions=534723947592\n`)
});
client.on('ready', async() => {
  console.log("CWL")
  const clan = await Clans.find({})

  cron.schedule(`0 0 1 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan War League Starts in 8 hours`)
        .setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`0 8 1,2 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan War League has started`)
        .setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`0 8 2 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan War League has started`)
        .setDescription(`Last Day for CWL registration`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });

})

client.on('ready', async() => {
  console.log("Season")
  const clan = await Clans.find({})
  cron.schedule(`0 0 1 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`New season has started`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
})

client.on('ready', async() => {
  console.log("Clan Games")
  const clan = await Clans.find({})
  cron.schedule(`1 8 22 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games has started and end the 28th at 8am UTC`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`1 8 23 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games: only 5 days left`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`1 8 24 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games: only 4 days left`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`0 8 25 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games: only 3 days left`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`1 8 26 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games: only 2 days left`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`0 8 27 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games: only 1 days left`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
  cron.schedule(`1 8 28 * *`, async() => {
    for(let i = 0; i < clan.length+1; i++){
      const c =  clan[i].channel  
      console.log(c)
      const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`Clan Games have ended, you will have 7 days to collect rewards`)
        //.setDescription(`***8AM UTC*** and will be open for registerastion till 8AM UTC on the 3rd`)
      .setTimestamp()
      client.channels.cache.get(c).send({ embeds: [Embed] });
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
})

client.on('ready', async() => {
  try {
    const response = await axios.get(`${COC_API_BASE}/goldpass/seasons/current`, {
      headers: {
        Authorization: `Bearer ${config.coc.apiKey}`
      }
      
    });
    const end = await Events.find({})
    if(end[0] == null || undefined){
      const newEvents = await Events.create({
          goldPassStart: response.data.startTime,
          goldPassEnd: response.data.endTime,
      });
      const saved = await newEvents.save();
      console.log("added Goldpass Event")
    }else if(response.data.endTime == end[0].goldPassEnd){
      console.log("yep already have Goldpass Event")
    } else if(response.data.endTime != end[0].goldPassEnd){
      const remove = {goldPassEnd: end[0].goldPassEnd}
      const result = await Events.deleteOne(remove);
      if (result.deletedCount === 1) {
        console.log("Successfully deleted old Gold pass Event.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
      const newEvents = await Events.create({
        goldPassStart: response.data.startTime,
        goldPassEnd: response.data.endTime,
    });
    const saved = await newEvents.save();
    console.log("added new Goldpass Event")
    }
  } catch (error) {
    console.error(error);
  }
  const clan = await Clans.find({})
  const user = await User.find({})
  console.log('\nAmount of Clans: '+clan.length)
  console.log('Amount of Users: '+user.length)

  cron.schedule(`* 12 * * *`, async() => {
    console.log("hi")
    const t = await Events.find({})
    const text1 = t[0].goldPassEnd
    const year =  text1.slice(0, 4);
    const month = text1.slice(4, 6)
    const day = text1.slice(6, 8)
    const hour = text1.slice(9, 11)
    const minute = text1.slice(11, 13)
  
    cron.schedule(`${minute} ${hour} ${day} ${month} *`, async() => {
      for(let i = 0; i < clan.length+1; i++){
        const c =  clan[i].channel  
        console.log(c)
        const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle(`Gold Pass has started`)
          .setDescription(`End Date: ***${month}-${day}-${year}*** ***${hour}:${minute}UTC***`)
        .setTimestamp()
        client.channels.cache.get(c).send({ embeds: [Embed] });
      }
    }, {
      scheduled: true,
      timezone: "UTC"
    });
  }, {
    scheduled: true,
    timezone: "CST"
  });
});


client.on('messageCreate', async (message, Discord) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content === '!c'){
      console.log(message.author.username+ " ran !c")
      if(await Clans.find({ channel: message.channel.id}) != false){
        const channelIds = await Clans.find({ channel: message.channel.id})
        //console.log(channelIds[0].channel)

        try {
          const response = await axios.get(`${COC_API_BASE}/clans/%23${channelIds[0].clan}`, {
            headers: {
              Authorization: `Bearer ${config.coc.apiKey}`
            }
          });
          const clan = response.data;

          const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle(clan.name)
          .setAuthor({ name: `${clan.tag}`, iconURL: clan.badgeUrls.large })
          .setDescription(`${clan.description}`)
          .setThumbnail(clan.badgeUrls.large)
          .addFields(
              { name: clan.type, value: ' '},
              { name: `War Info :\n  Streaks: ${block}${clan.warWinStreak}${block} \n  Wins: ${block}${clan.warWins}${block}\n  Losses: ${block}${clan.warLosses}${block}\n  Ties: ${block}${clan.warTies}${block}`, value:` `, inline: true },
              { name: `Members: ${block}${clan.members}${block}/50 \nClan Lvl: ${block}${clan.clanLevel}${block}\nWar League: ${block}${clan.warLeague.name}${block}\nCapital League: ${block}${clan.capitalLeague.name}${block}`, value:` `, inline: true },
          )
          .setTimestamp()
      
          message.channel.send({ embeds: [Embed] });
        } catch (error) {
          console.error(error);
        }
      }else{
        message.channel.send(`Sorry a Clan has not been set for this channel, to set one please use **!set** and the clan tag without the #`)

      }
    }    
    if (message.content.startsWith('!cs')){
      console.log(message.author.username+ " ran !clan")
        try {
            const response = await axios.get(`${COC_API_BASE}/clans/%23${args[0].toUpperCase()}`, {
                headers: {
                  Authorization: `Bearer ${config.coc.apiKey}`
            }
            });
            const clan = response.data;
            //console.log(response.data)
            const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(clan.name)
            .setAuthor({ name: 'Clash Of Clans', iconURL: clan.badgeUrls.large })
            .setDescription(`Tag: ${clan.tag}`)
            .setThumbnail(clan.badgeUrls.large)
            .addFields(
                { name: "Status:", value: clan.type},
                { name: "description:", value: clan.description},
                { name: '\u200B', value: '\u200B' },
                { name: 'War Info', value:`War League: ${clan.warLeague.name} \n War Streaks: ${clan.warWinStreak} \nWar Wins: ${clan.warWins}\nWar Losses: ${clan.warLosses}\nWar Ties: ${clan.warTies}`, inline: true },
                { name: 'Members: ', value:`${clan.members}/50`, inline: true },
            )
            .setTimestamp()
        
            message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
    }
    if (message.content.startsWith('!set' || '!s')){
      console.log(message.author.username+ " ran !set")
      //console.log(await Clans.find({ channel: message.channel.id}))
      if(await Clans.find({ channel: message.channel.id}) == false){
        try {
          const response = await axios.get(`${COC_API_BASE}/clans/%23${args[0].toUpperCase()}`, {
              headers: {
                Authorization: `Bearer ${config.coc.apiKey}`
          }
          });
          const clan = response.data;
          const newClan = await Clans.create({
            channel: message.channel.id,
            clan: args[0].toUpperCase(),
            clanName: clan.name,
            serverId: message.guild.id,
          });
          const saved = await newClan.save();

          const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle(`Your clan is now set to `+clan.name)
          .setAuthor({ name: clan.tag, iconURL: clan.badgeUrls.large })
          .setTimestamp()
          message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
      }else{
        const channelIds = await Clans.find({ channel: message.channel.id})
        //console.log(channelIds[0].clanName)
  
        message.channel.send(`Sorry the ***${channelIds[0].clanName}*** Clan has already been set for this channel, to overwrite please use **!overwrite** or please add a clan to a new channel`)
      }
    }
    if (message.content.startsWith('!link' || '!l')){
      console.log(message.author.username+ " ran !link")
      if(await User.find({ username: message.author.username}) == false){
        try {
            const response = await axios.get(`${COC_API_BASE}/players/%23${args[0].toUpperCase()}`, {
                headers: {
                  Authorization: `Bearer ${config.coc.apiKey}`
            }
            });
            const player = response.data;
            //console.log(response.data)
            const thID = emojis[player.townHallLevel].split(":", 3)
            const thID2 = thID[2].split(">", 3)

            const newUser = await User.create({
              username: message.author.username,
              discordId: message.author.id,
              clash: args[0].toUpperCase(),
              clashUser: player.name,
            });
            const savedUser = await newUser.save();

            //console.log(player.heroes[0])
            const Embed = new EmbedBuilder()
            .setColor(0x0090FF)
            .setTitle(player.name)
            .setAuthor({ name: player.tag, iconURL: player.league.iconUrls.medium })
            .setDescription(`${exp} ${player.expLevel}     ${trophy} ${player.trophies}\n${player.role} in ${player.clan.name}`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/${thID2[0]}.png?size=128`)
            .addFields(
                { name: "League:", value: player.league.name},
                { name: `Heroes:\t\tDonations:`, value:` `, inline: true },
                )
                .addFields(
                  { name: `${heroes.barb}:${block}${player.heroes[0].level}${block}\t\t\t**Received:** ${block}${player.donationsReceived}${block}`, value: " "},
                )
                .addFields(
                  { name: `${heroes.archer}: ${block}${player.heroes[1].level}${block}\t\t\t**Given:${block}${player.donations}${block}**`, value: " "},
                )
                .addFields(
                  { name: `${heroes.warden}: ${block}${player.heroes[2].level}${block}\t\t\t**Clan Capital:** ${block}${player.clanCapitalContributions}${block}`, value: " "},
                )
                .addFields(
                  { name: `${heroes.royal}: ${block}${player.heroes[3].level}${block}`, value: " "},
                )
            .setTimestamp()
            message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
      }else{
        const channelIds = await  User.find({ username: message.author.username})
        //console.log(channelIds[0].username)
  
        message.channel.send(`Sorry it seems a Clash account has already been set to ***${channelIds[0].username}*** with the name ***${channelIds[0].clashUser}***, to overwrite please use **!newbase**`)
      }
    } 
    if (message.content.startsWith('!p'||'!player')){
      console.log(message.author.username+ " ran !player")
      const user = await User.find({ username: message.author.username});
      //console.log(`${user[0].username}` == `${message.author.username}`)
      if(`${user[0].username}` == `${message.author.username}`){
        try {
          const response = await axios.get(`${COC_API_BASE}/players/%23${user[0].clash}`, {
              headers: {
                Authorization: `Bearer ${config.coc.apiKey}`
          }
          });
          const player = response.data;
          //console.log(response.data)
            const thID = emojis[player.townHallLevel].split(":", 3)
            const thID2 = thID[2].split(">", 3)

            const Embed = new EmbedBuilder()
            .setColor(0x0090FF)
            .setTitle(player.name)
            .setAuthor({ name: player.tag, iconURL: player.league.iconUrls.medium })
            .setDescription(`${exp} ${player.expLevel}     ${trophy} ${player.trophies}\n${player.role} in ${player.clan.name}`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/${thID2[0]}.png?size=128`)
            .addFields(
                { name: "League:", value: player.league.name},
                { name: `Heroes:\t\tDonations:`, value:` `, inline: true },
                )
                .addFields(
                  { name: `${heroes.barb}:${block}${player.heroes[0].level}${block}\t\t\t**Received:** ${block}${player.donationsReceived}${block}`, value: " "},
                )
                .addFields(
                  { name: `${heroes.archer}: ${block}${player.heroes[1].level}${block}\t\t\t**Given:${block}${player.donations}${block}**`, value: " "},
                )
                .addFields(
                  { name: `${heroes.warden}: ${block}${player.heroes[2].level}${block}\t\t\t**Clan Capital:** ${block}${player.clanCapitalContributions}${block}`, value: " "},
                )
                .addFields(
                  { name: `${heroes.royal}: ${block}${player.heroes[4].level}${block}`, value: " "},
                )
            .setTimestamp()
            message.channel.send({ embeds: [Embed] });
          } catch (error) {
            console.error(error);
        }
      }else{  
        message.channel.send(`Sorry it seems a Clash account has not been set to ***${channelIds[0].username}*** with the name ***${channelIds[0].clashUser}***, to overwrite please use **!newbase**`)
      }
    } 
    if (message.content.startsWith('!h' || '!help')){
      console.log(message.author.username+ " ran !help")
            const Embed = new EmbedBuilder()
            .setColor(0x0090FF)
            .setTitle("***Commands***")
            .setDescription(`**!h** or **!help** - help commands
            \n**!link** **{tag}** - Links a clash account (Just give the tag without the #)
            \n**!p** or **!player**- gives info on the account that is tied to you
            \n**!set** **{tag}** - Sets a clan to a specefic channel to get updates on that clan
            \n**!c** - gets info on the clan that is set in the channel
            \n**!cs** **{tag}** - searches for a clan`)
            message.channel.send({ embeds: [Embed] });
    } 
    if (message.content==='!stats'){
      var links = [ "/clans/%232LLJUR0RC/currentwar",
                    "/clans/%232LLJUR0RC",
                    "/clans/%232LLJUR0RC",
                    "/clans/%232LLJUR0RC/capitalraidseasons",
                    "/clans/%232LLJUR0RC",
                    "/leagues/%232LLJUR0RC/seasons",
                    "/clans",
                    "/players/",
                    "/locations/%232LLJUR0RC/rankings/players",
                    "/locations/%232LLJUR0RC",
                    "/locations/%232LLJUR0RC/rankings/clans",
                    "/players/%232LLJUR0RC/verifytoken",
                    "/clans/%232LLJUR0RC/warlog",
                    "/locations",
                    "/players/%23",
                    "/locations/%232LLJUR0RC/rankings/capitals "
                  ];
      var data = []
      var i = 0;
      while(i < links.length){
        var starts = performance.now();
        try {
          const response = await axios.get(`${COC_API_BASE}${links[i]}`, {
            headers: {
              Authorization: `Bearer ${config.coc.apiKey}`
            }
            
          });
  
        } catch (error) {
          console.error(error);
        }
        data[i] =  Math.round((performance.now() - starts) * 100) / 100;
        i++;
      }
        const newblock = "``"
        const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle("Clash API Stats")
          .setAuthor({ name: ` `})
          .setDescription(`
          -${newblock}/clans/{}/currentwar - ${data[0]}ms${newblock}
          \n-${newblock}/clans/{}/currentwar/leaguegroup - ${data[1]}ms${newblock}
          \n-${newblock}/players/{} - ${data[2]}ms${newblock}
          \n-${newblock}/clans/{}/capitalraidseasons - ${data[3]}ms${newblock}
          \n-${newblock}/clans/{} - ${data[4]}ms${newblock}
          \n-${newblock}/leagues/{}/seasons - ${data[5]}ms${newblock}
          \n-${newblock}/clans - ${data[6]}ms${newblock}
          \n-${newblock}/players/ - ${data[7]}ms${newblock}
          \n-${newblock}/locations/{}/rankings/players - ${data[8]}${newblock}
          \n-${newblock}/locations/{} - ${data[9]}${newblock}
          \n-${newblock}/locations/{}/rankings/clans - ${data[10]}${newblock}
          \n-${newblock}/players/{}/verifytoken - ${data[11]}${newblock}
          \n-${newblock}/clans/{}/warlog - ${data[12]}${newblock}
          \n-${newblock}/locations - ${data[13]}${newblock}
          \n-${newblock}/players/%23 - ${data[14]}${newblock}
          \n-${newblock}/locations/{}/rankings/capitals - ${data[15]}${newblock}`)
          .setTimestamp()
           message.channel.send({ embeds: [Embed] });
      }
    if (message.content==='!info'){
        const clan = await Clans.find({})
        const user = await User.find({})
        var i = 0;
        var l = 0
        var s = []
        while(i < clan.length){
          while(l < clan.length){
            if(clan[i].serverId != clan[l].serverId){
              s[l] = clan[l].serverId
            }
            l++;
          }
          i++;
        }
        var t = []
        i = 0
        l = 0
        while(i < clan.length){
          while(l < clan.length){
            if(clan[i].clan != clan[l].clan){
              t[l] = clan[l].clan
            }
            l++;
          }
          i++;
        }
        if(t.length == 0){
          t[0] = clan[0].clan
        }
          const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle("Clash Bot Info")
          .setAuthor({ name: ` `})
          .setDescription(`
          -Amount of Clans Saved- ${t.length}
          \n-Amount of Users Saved - ${user.length}
          \n-Amount of Servers Saved - ${s.length}`)
          .setTimestamp()
            message.channel.send({ embeds: [Embed] });
        }
});

client.login(config.discord.userToken);
