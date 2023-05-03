const { Telegraf } = require('telegraf')
const bot = new Telegraf('BOT_TOKEN');

bot.start((ctx)=>{
    console.log(ctx);
    console.log(ctx.from);
    let karşılama_mesaj = `
    Merhaba, Core Node Chatbot'a hoş geldin! Seni burada görmek çok güzel!😌 Core Node ile ilgili merak ettiğin tüm soruların cevabını burada bulabilirsin!

    Core Node ailesinin bir üyesi misin?
`;
bot.telegram.sendMessage(ctx.chat.id,karşılama_mesaj, 
    {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: 'Evet, Core Node üyesiyim.🔥',callback_data:'coreNodeMember'}
                ],
                [
                    {text: 'Hayır, Core Node üyesi henüz değilim.🌊',url:'https://t.me/corenodechat'}
                ]
            ]
            
        }
    })
})

//Üye ise devam seçeneği

bot.action('coreNodeMember',(ctx)=>{

    let coreNodeMembers = `Merhaba, aramıza hoş geldin!   Core Node'u daha yakından tanımak istemen bizi heyecanlandırdı! Hakkımızda merak ettiğin tüm soruların cevabını bulabileceğin deneyiminde iyi eğlenceler!  Bizi sosyal medya platformlarından takip ederek daha fazla bilgi alabilir, telegram grubumuzda sohbet ederek yeni gelişmelerden haberdar olabilirsin!🔥`;
    

bot.telegram.sendMessage(ctx.chat.id,coreNodeMembers, 
    {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: 'Core Node Kimdir',callback_data:'coreNodeKimdir'}
                ],
                [
                    {text: 'Sosyal Medya',callback_data:'coreNodeSosyalMedya'}
                ],
                [
                    {text: 'Platform Adres Paylaşımı',callback_data:'coreNodePlatform'}
                ],
                [
                    {text: 'Çekiliş Zamanı',callback_data:'coreNodeCekilis'}
                ]
            ]
            
        }
    })
})

//Core Node Kimdir



bot.action('coreNodeKimdir',(ctx)=>{
    //
    try {
                        ctx.deleteMessage();
                    } catch (error) {
                        console.log(error);
                    }
    let coreNodeKimdir = `Yıllardır kripto alanında, node kurulumunda, mining alanında, programlama alanında, yazılım ve geliştirme alanında, kullanıcı deneyimi, testnet ve airdrop konularında kendini geliştirmiş ve edindiği bilgi birikimini sizlere aktarma konusunda çok heyecanlı olan bir ekiple karşınızdayız!
    
    Yürüttüğümüz bazı nodelar: 
    
    - Ziesha Network
    - 5ire
    - Arbitrum
    - Elixir
    - Gitopia
    - Gitshock
    - Massa
    - Minima
    - Naruno
    - Nibiru
    - Quasar
    - Sao-Network
    - Sarcophagus
    - TaikoV2
    - Wormholes
    - Goracle Network
    `;

bot.telegram.sendMessage(ctx.chat.id,coreNodeKimdir, 
        {
            reply_markup: {
                inline_keyboard:[
                    [
                        {text: 'Bir önceki menüye dön',callback_data:'coreNodeMember'}
                    ]
                ]
                
            }
        })
})


//Sosyal Medya Hesapları

bot.action('coreNodeSosyalMedya',(ctx)=>{
    //
    try {
                        ctx.deleteMessage();
                    } catch (error) {
                        console.log(error);
                    }
    let coreNodeSosyalMedya = `Sosyal Medya Hesaplarımızı aşağıdaki butonlara tıklayarak takip edebilirsiniz.. `;

bot.telegram.sendMessage(ctx.chat.id,coreNodeSosyalMedya, 
        {
            reply_markup: {
                inline_keyboard:[
                    [
                        {text: 'Core Node Telegram',url:'https://t.me/corenodechat'}
                    ],
                    [
                        {text: 'Github',url:'https://github.com/Core-Node-Team'}
                    ],
                    [
                        {text: 'Discord Grubumuz',url:'https://discord.gg/CurYcxes7k'}
                    ],
                    [
                        {text: 'Twitter',url:'https://twitter.com/corenodeHQ'}
                    ],
                    [
                        {text: 'Bir önceki menüye dön',callback_data:'coreNodeMember'}
                    ]
                ]
                
            }
        })
})

// Platform Adres Paylaşımı

bot.action('coreNodePlatform',(ctx)=>{
    //
    try {
                        ctx.deleteMessage();
                    } catch (error) {
                        console.log(error);
                    }
    let coreNodeSosyalMedya = `Çeşitli platformlardan birbirimiz ile tx kasabilmek için ve gerekli büyümeyi hep birlikte sağlayabilmek için platform adreslerinizi paylaşabileceğiniz formu ve sonuçlarını aşağıdaki butonlara tıklayarak takip edebilirsiniz.. `;

bot.telegram.sendMessage(ctx.chat.id,coreNodeSosyalMedya, 
        {
            reply_markup: {
                inline_keyboard:[
                    [
                        {text: 'Twitter Takipleşme Form',url:'https://forms.gle/dJTLRFsCPQYvqYdt6'}
                    ],
                    [
                        {text: 'Twitter Takipleşme Sonuç',url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vSAGdGKdCjojGiA6ObMMSog5ufOGJaC0imRWUyDpcSxN_xhpVI4vb6tMgV7IU_egJlgM0BWpEvK0Ev1/pubhtml'}
                    ],
                    [
                        {text: 'Github Takipleşme Form',url:'https://forms.gle/vxyXk8iKretSUxSZ9'}
                    ],
                    [
                        {text: 'Github Takipleşme Sonuç',url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8hvex3heXNZKmjKqh0UclzRvQb_hiBnvUBqJYPBX6YfX3azXLJ6MW2y9HDrH9D3-NgRLyG2shBONc/pubhtml'}
                    ],
                    [
                        {text: 'Scroll - Ethermail Adresleri Form',url:'https://forms.gle/fzSPvn5bivFygMPM6'}
                    ],
                    [
                        {text: 'Scroll - Ethermail Adresleri Sonuç',url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vQBa0nQmgZ3o7E3Npnx5OkDGDIi9-XKh4xPGcyJvDfM9kGy-5tTR1q2lqMsfeKIQaHraNLebrzCe8pJ/pubhtml?gid=923044698&single=true'}
                    ],
                    [
                        {text: 'Lens - Phaver Takipleşme Form',url:'https://forms.gle/1Ze76xZK77MbveYr6'}
                    ],
                    [
                        {text: 'Lens - Phaver Takipleşme Sonuç',url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPgxpsLd9gIk85G1hDH3vP24QPqBjN7MKUuc44h0qVrI80rOQNCiL7zbBENmicCP1XfYZohp_X8_gR/pubhtml?gid=595009668&single=true'}
                    ],
                    [
                        {text: 'Fuel Adres Form',url:'https://forms.gle/Wyqv58LfiVvUBK2e8'}
                    ],
                    [
                        {text: 'Fuel Adres Sonuç',url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vRlB4IKRSKI8F4FGtY_itNK5zCbkrQe8UKXW-5RhdpNviMLUhFEQTt3luFlOrRyt-IVgy_GntWRc5l7/pubhtml?gid=1813459709&single=true'}
                    ],
                    [
                        {text: 'Bir önceki menüye dön',callback_data:'coreNodeMember'}
                    ]
                ]
                
            }
        })
})

// Çekiliş

const ADMIN_ID = 'ADMIN_ID';
const participants = new Set();
let winner = null;

bot.action('coreNodeCekilis',(ctx)=>{
    //
    try {
                        ctx.deleteMessage();
                    } catch (error) {
                        console.log(error);
                    }
    let coreNodeCekilis = `Çekilişlere katılabilir, kazanan kişi belli olduktan sonra kazanan'ı görüntüleyebilirsiniz.
    `;

bot.telegram.sendMessage(ctx.chat.id,coreNodeCekilis, 
        {
            reply_markup: {
                inline_keyboard:[
                    [
                        {text: '🎟️ Çekilişe Katıl',callback_data:'coreNodeJoinTheRaffle'}
                    ],
                    [
                        {text: '🏆 Kazananı Göster',callback_data:'coreNodeShowTheWinner'}
                    ],
                    [
                        {text: 'Bir önceki menüye dön',callback_data:'coreNodeMember'}
                    ]
                ]
                
            }
        })
})

bot.action('coreNodeJoinTheRaffle', async (ctx) => {
    if (winner) {
        await ctx.answerCbQuery('Yeni çekiliş henüz başlamadı.');
        return;
      }

    const username = ctx.from.username || ctx.from.id;

    if (participants.has(username)) {
        await ctx.answerCbQuery('Bu çekilişe zaten bir kez katıldın.');
        return;
      }

    participants.add(username);
    await ctx.answerCbQuery('Başarılı bir şekilde çekilişe katıldın!');
  });

  bot.action('coreNodeShowTheWinner', async (ctx) => {
    if (!winner) {
      await ctx.answerCbQuery('Çekiliş sonucu henüz açıklanmadı');
      return;
    }
  
    await ctx.answerCbQuery();
    await ctx.reply(`🎉 *Kazanan kişi:* ${winner} 🎉`);
  });

  bot.command('cekilis', async (ctx) => {
    if (ctx.from.id.toString() !== ADMIN_ID) {
      await ctx.reply('You are not authorized to pick a winner.');
      return;
    }
  
    if (participants.size === 0) {
      await ctx.reply('There are no participants in the raffle.');
      return;
    }
  
    const participantsArray = Array.from(participants);
    const winnerIndex = Math.floor(Math.random() * participantsArray.length);
    winner = participantsArray[winnerIndex];
  
    await ctx.reply(`🎉 *The winner is:* ${winner} 🎉`);
  });

  bot.command('reset_raffle', async (ctx) => {
    if (ctx.from.id.toString() !== ADMIN_ID) {
      await ctx.reply('You are not authorized to reset the raffle.');
      return;
    }
  
    winner = null;
    participants.clear();
  
    await ctx.reply('The raffle has been reset. You can now start a new raffle.');
  });





bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
