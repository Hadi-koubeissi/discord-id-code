const Discord = require('discord.js');
const moment = require('moment');
const fetch = require('node-fetch');
const { get } = require('snekfetch');
const fs = require('fs');
const jimp = require("jimp");
const imageUrlRegex = /\?size=2048$/g;
const convert = require("hh-mm-ss");
const dateFormat = require('dateformat');
const client = new Discord.Client();
const hero = client;
const prefix = "#";
const cooldowns = new Discord.Collection();
disableEveryone: true
client.on('ready', () => {
client.user.setStatus("idle")
client.user.setActivity(`Hello world Im Toxic Bot`,{ type : 'WATCHING' } )
console.log(`Name    - [ " ${client.user.username} " ]`);
console.log(`servers - [ " ${client.guilds.size} " ]`);
console.log(`Users   - [ " ${client.users.size} " ]`);
console.log('#---------------------------------------------------------#')

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/*كود الأي دي بالكانفاس*/
client.on('message', message => {
message.guild.fetchInvites().then(invs => {let user = message.mentions.users.first() || message.author;let personalInvites = invs.filter(i => i.inviter.id === user.id);let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
if(message.content.split(' ')[0] == prefix + 'id') {if(!message.channel.guild) return;let args = message.content.split(' ').slice(1).join(' ');let defineduser = '';if (!args[1]) { defineduser = message.author;} else {let firstMentioned = message.mentions.users.first();defineduser = firstMentioned; }
const w = ['./img/id.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
let auth = message.mentions.users.first() || message.author;
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const { body: ava } =  get(auth.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
const days = millis / 1000 / 60 / 60 / 24;
const milliss = new Date().getTime() - auth.createdAt.getTime();
const createdAt = millis / 1000 / 60 / 60 / 24;
dateFormat(now, 'dddd, mmmm dS, yyyy');
var demon = message.mentions.users.first();var mentionavatar;if(demon){var mentionavatar = demon;} else {var mentionavatar = message.author;}var Demoon;if(demon) { Demoon = demon} else {Demoon = message.author}var demon = message.mentions.members.first();var h;if(demon) {h = demon} else {h = message.member}moment.locale('En');  
let time = `${dateFormat(defineduser.createdAt)}`
var heg;if(men) {heg = men} else {heg = message.author}var mentionned = message.mentions.members.first();var h;if(mentionned) {h = mentionned} else {h = message.member}let Image = Canvas.Image,canvas = Canvas.createCanvas(610, 594),
ctx = canvas.getContext('2d');
ctx.patternQuality = 'bilinear';
ctx.filter = 'bilinear';
ctx.antialias = 'subpixel';
fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
if (err) return console.log(err);
let BG = Canvas.Image;
let ground = new Image;
ground.src = Background;
ctx.drawImage(ground, 0, 0, 610, 594);
})
var mentionned = message.mentions.users.first();var client;if(mentionned){var client = mentionned;} else {var client = message.author;}var men = message.mentions.users.first();var heg;if(men) {heg = men} else {heg = message.author }let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;jimp.read(url, (err, ava) => {if (err) return console.log(err);ava.getBuffer(jimp.MIME_PNG, (err, buf) => {if (err) return console.log(err);
//حاله الاونلاين           
var status;
if (defineduser.presence.status === 'online') {
status = 'online';
ctx.fillStyle = `#afee8f`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

} else if (defineduser.presence.status === 'dnd') {
status = 'dnd';
ctx.fillStyle = `#f2736d`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
} else if (defineduser.presence.status === 'idle') {
status = 'idle';
ctx.fillStyle = `#e0af53`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
} else if (defineduser.presence.status === 'offline') {
status = 'offline';
ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
}               
var time2;if(mentionned){var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;} else {var time2 = `${dateFormat(message.member.joinedAt)}`;}  
//الحاله                   
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(status, 506 , 383 );
//البلاينق
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`${h.presence.game === null ? "No Status" : h.presence.game.name}`, 295   , 499  );
//الأسم               
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`${defineduser.username}`, 213 , 285);
//التاق
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`#${defineduser.discriminator}`, 441  , 285);
//تاريخ الدخول للدسكورد  
var time2;if(mentionned){var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;} else {var time2 = `${dateFormat(message.member.joinedAt)}`;}
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`${moment(Demoon.createdTimestamp).format('D' + "يوم")}`, 305 , 383 );
//الانفايت
ctx.font = 'small-caps 27px Arial';
ctx.fontSize = '18px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText(`${inviteCount}`, 105 , 383);   
//صوره الأفتار

let Avatar = Canvas.Image;//let Avatar = Canvas.Image;
let ava = new Avatar;//مet ava = new Avatar;
ava.src = buf;//ava.src = buf;
ctx.beginPath();//ctx.beginPath();
ctx.arc(310, 143, 100, 0, 2 * Math.PI, false);//ctx.arc(318, 143, 100, 0, 2 * Math.PI, false);
ctx.clip();//ctx.clip();
ctx.drawImage(ava, 205, 45, 205, 205);//ctx.drawImage(ava, 215, 45, 205, 205);
//حاله الاونلاين
var status;
if (defineduser.presence.status === 'online') {
status = 'online';
ctx.fillStyle = `#afee8f`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
} else if (defineduser.presence.status === 'dnd') {
status = 'dnd';
ctx.fillStyle = `#f2736d`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
} else if (defineduser.presence.status === 'idle') {
status = 'idle';
ctx.fillStyle = `#e0af53`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
} else if (defineduser.presence.status === 'offline') {
status = 'offline';
ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(377, 218, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
}
message.channel.sendFile(canvas.toBuffer())
})})}})});

client.login('NTk0ODU1NDcyNTg3MDc5Njgw.Xbb80g.O6qAbLgIFWbZRCQolZcdcP05SKs');