const { Client, GatewayIntentBits } = require('discord.js');


const token = 'INSERT TOKEN HERE'; 


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,              // Para eventos de servidor
    GatewayIntentBits.GuildMessages,       // Para mensagens no servidor
    GatewayIntentBits.MessageContent,      // Para acessar o conteúdo das mensagens
    GatewayIntentBits.GuildMembers,        // Para informações dos membros (se necessário)
    GatewayIntentBits.GuildPresences       // Para status de presença dos membros (se necessário)
  ]
});

client.once('ready', () => {
  console.log('Bot está online!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignorar mensagens de bots

  if (message.content.toLowerCase().startsWith('!avatar')) {
    const mentionedUser = message.mentions.users.first();
    const user = mentionedUser || message.author;
    const avatarURL = user.displayAvatarURL({ dynamic: true, size: 1024 });
    message.channel.send(`${user.username}'s avatar: ${avatarURL}`);
  }
});

client.login(token).catch(err => console.error('Erro ao logar:', err));
