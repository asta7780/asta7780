let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `*منشن ع الشخص الي بتطرده  سوف اسحبه الى الجحيم .. 🗿*`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`*تم وديته الجحيم يا سيد آس؁تــا ♥️✨*`) 

}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['اذهب-الى-الجحيم'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler