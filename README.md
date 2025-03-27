# DISCORD-BOT
Visão Geral

Este código cria um bot para o Discord utilizando a biblioteca discord.js. O bot é capaz de responder a um comando !avatar para retornar o avatar de um usuário mencionado ou do próprio autor da mensagem.

Tecnologias Utilizadas

- Node.js: A plataforma que executa o código JavaScript do lado do servidor.
- discord.js: Biblioteca para interagir com a API do Discord. Usada para facilitar a criação de bots para Discord.

Pré-Requisitos

Antes de executar o código, certifique-se de ter os seguintes pré-requisitos:

- Node.js instalado em sua máquina. Se não tiver, instale a partir de nodejs.org.
- Conta no Discord e um bot registrado no Portal de Desenvolvedores do Discord.

Como Instalar

1. Instalar Node.js:
   - Baixe e instale o Node.js no site oficial (https://nodejs.org/).
   
2. Criar um Bot no Discord:
   - Acesse Discord Developer Portal (https://discord.com/developers/applications).
   - Crie uma nova aplicação e registre o bot.
   - Copie o token do bot (substitua o valor no código no campo token).

3. Instalar o discord.js:
   - Abra o terminal no diretório onde você deseja armazenar o projeto e execute o seguinte comando:
   
     npm init -y
   
   - Isso criará um arquivo package.json básico.
   
   - Em seguida, instale a biblioteca discord.js com o comando:
   
     npm install discord.js

Como Usar

1. Criar o arquivo do Bot:
   - Crie um arquivo, por exemplo bot.js, e cole o código fornecido.
   
2. Substituir o Token:
   - No código, substitua o valor da variável token com o token do seu bot (obtido na etapa de criação do bot no portal do Discord).
   
   const token = 'SEU_TOKEN_AQUI';

3. Rodar o Bot:
   - No terminal, navegue até o diretório onde o arquivo bot.js está localizado.
   - Execute o comando:

     node bot.js

4. Comando !avatar:
   - Quando o bot estiver online, ele estará pronto para responder ao comando !avatar em qualquer canal do servidor onde o bot tenha permissão para ler mensagens.
   - Para obter o avatar de um usuário, use o comando no formato:
   
     !avatar @usuário
     
     Caso nenhum usuário seja mencionado, o bot retornará o avatar do autor da mensagem.

Explicação do Código

- Imports:
  - O código importa Client e GatewayIntentBits da biblioteca discord.js. O Client é a classe principal para o bot, e GatewayIntentBits define as permissões (intents) necessárias para o bot ler mensagens, identificar membros e obter informações sobre presenças no servidor.
  
- Token do Bot:
  - O token do bot é armazenado na variável token. Este token deve ser mantido em segredo e é necessário para autenticar o bot na API do Discord.

- Configuração do Client:
  - O bot é configurado com intents, que são permissões que determinam o que o bot pode ou não fazer dentro dos servidores. No caso, o bot pode acessar informações de servidores, membros, mensagens e presenças.

- Evento 'ready':
  - Quando o bot estiver pronto e conectado, o evento ready é disparado, e o bot imprime "Bot está online!" no console.

- Evento 'messageCreate':
  - Sempre que uma mensagem for criada em um servidor, o evento messageCreate é acionado. O bot verifica se a mensagem começa com o comando !avatar.
  - Se um usuário for mencionado no comando, o bot irá retornar o avatar desse usuário. Caso contrário, retorna o avatar do autor da mensagem.
  
- Login do Bot:
  - O bot se conecta à API do Discord usando o método client.login(token), passando o token para autenticação.

Erros Comuns

1. Erro de Token Inválido:
   - Certifique-se de que o token esteja correto. Se o bot não conseguir autenticar com a API do Discord, será exibido um erro.

2. Permissões do Bot:
   - Verifique se o bot tem permissões adequadas para ler mensagens e enviar mensagens no servidor.

3. Erro de Dependência:
   - Se a biblioteca discord.js não estiver instalada corretamente, execute npm install discord.js para garantir que todas as dependências sejam resolvidas.

Considerações Finais

- Este código é um exemplo simples de como criar um bot para o Discord que responde a comandos específicos.
- Ele pode ser expandido com mais funcionalidades, como comandos adicionais, interações com o servidor e processamento de eventos mais avançados.

Dúvidas? Consulte a documentação oficial da discord.js (https://discord.js.org/) para mais detalhes sobre como utilizar e expandir o bot.
