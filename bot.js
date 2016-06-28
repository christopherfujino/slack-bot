let Botkit = require('botkit'),
    fs = require('fs'),
    personas = JSON.parse(fs.readFileSync('personas.json', 'utf8')),
    controller = Botkit.slackbot();

  const persona = personas['brendanbot'];  // change to access different persona
  const token = JSON.parse(fs.readFileSync('tokens.json', 'utf8'))['js']['token'];
  let bot = controller.spawn({'token' : token});

  bot.startRTM(function(err){
    if(err) throw err;
  });

  controller.hears([persona['name']], ['direct_message','direct_mention','mention'], function(bot, message){
    let x = Math.floor(Math.random()*persona.quotes.length);
    bot.reply(message, persona.quotes[x]);
  });
