const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();
const quotes = [
    {by: 'John Johnson', desc:'First, solve the problem. Then, write the code.'},
    {by: 'Rob Castanheira', desc:'Vai trabalhar, monte de merda.'},
    {by: 'Everyone', desc:'Console.log is the best debugger'},
    {by: 'ImInYourFino', desc:'Breaking doors is the best medicine.'},
    {by: 'Mãe tuga', desc:'Come ou levas com o chinelo.'},
    {by: 'Rob Castanheira', desc:'Getting beaten up makes me feel alive'},
    {by: 'Luna', desc:'Garrosh did nothing wrong. You did.'}
]

const commandList = '?quotes'

const prefix = "?";
client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    
    if(command === "commands") {
        message.reply(commandList)
    }
    if (command === "quote") {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        const toSend = `"${randomQuote.desc}" - ${randomQuote.by}`;
        message.reply(toSend);
    }  
});  

client.login(process.env.BOT_TOKEN);