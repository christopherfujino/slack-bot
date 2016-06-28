let Botkit = require('botkit'),
    fs = require('fs'),
    token = JSON.parse(fs.readFileSync('token.json', 'utf8')).token,
    personas = JSON.parse(fs.readFileSync('personas.json', 'utf8')),
    controller = Botkit.slackbot(),
    bot = controller.spawn({'token' : token});

  const persona = personas['ringo'];  // change to access different persona

  bot.startRTM(function(err){
    if(err) throw err;
  });

  controller.hears([persona.name], ['direct_message','direct_mention','mention','ambient'], function(bot, message){
    let x = Math.floor(Math.random()*persona.quotes.length);
    bot.reply(message, persona.quotes[x]);
  });
