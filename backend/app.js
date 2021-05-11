require("dotenv").config()
const routes = require("./routes")
const express = require("express")
const Discord = require("discord.js")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
const client = new Discord.Client()
const quotes = [
  {
    by: "John Johnson",
    desc: "First, solve the problem. Then, write the code."
  },
  { by: "Rob Castanheira", desc: "Vai trabalhar, monte de merda." },
  { by: "Everyone", desc: "Console.log is the best debugger" },
  { by: "ImInYourFino", desc: "Breaking doors is the best medicine." },
  { by: "Mãe tuga", desc: "Come ou levas com o chinelo." },
  { by: "Rob Castanheira", desc: "Getting beaten up makes me feel alive" },
  { by: "Luna", desc: "Garrosh did nothing wrong. You did." },
  {
    by: "Gigante",
    desc: "There's nothing wrong with the code. You just typed consoel.log"
  },
  { by: "Lurb3", desc: "It's a me! Lurb3!" }
]

const commandList = ["?quotes"]

app.use(express.json())

app.use("/users", routes.users)
app.use("/auth", routes.auth)

app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening at ${process.env.PORT} || 4000`)
})

const prefix = "?"
client.on("message", function (message) {
  if (message.author.bot) return
  if (!message.content.startsWith(prefix)) return

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(" ")
  const command = args.shift().toLowerCase()

  if (command === "commands") {
    message.reply(commandList)
  }
  if (command === "quote") {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const toSend = `"${randomQuote.desc}" - ${randomQuote.by}`
    message.reply(toSend)
  }
})

client.login(process.env.BOT_TOKEN)
