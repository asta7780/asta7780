let handler = async (m, { command, text }) => m.reply(`*✮نــوٌرتــ وٌ شــرفــتــ جــروٌبــنــآ✮*
          · · • • • ✎ • • • · ·
      *الرجاء ملى الاستماره📜 ࣪༄*

*『$』آلَلَقــبـــ『』*

*『$』مــنــ آنــمــيــ『』*

*『$』لَقــبــ بــديــلَ『』*

*『$』ذكر ┃انثى『』*

*『$』مــنــ طــرفــ『』*

*『$』اذكر 3 انميات 𓏲ּ*

*❏『』*
*❏『』*
*❏『』*
    
     · · • • • ✎ • • • · ·

*✮_قيم تفاعلك من 10 :*
*[-]*

✮_*اذا رقمك وهمي اذكر السبب 𖣘*
*[-]*
*‏◎ ─━──━─✎─━──━─ ◎*

            *مــلَآحــظــهّ* 

*✤「املى الاستماره ليتم قبولك 」*

*✤「 الرجاء ارسال صوره للشخصيه」*

*✤「يمنع ارسال روابط او اشياء」*

*✤ لازم تدخل الاعلانات ..「 https://chat.whatsapp.com/JR3XamVJcOeIqMIuuNAoNZ 」*
◎ ─━──━─✎─━──━─ ◎

𝕯𝖊𝖆𝖙𝖍⊰ ✎ ⊱𝐍𝖔𝖙𝖊`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره|استمارة)$/i

export default handler