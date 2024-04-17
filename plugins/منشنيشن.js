let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
 await conn.sendMessage(m.chat, { react: { text: '🎴', key: m.key } })
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*✦━━━━━━[ 𝑺𝒉𝒂𝒅𝒐𝒘 ]━━━━━━✦*
*⊰✎⊱*
*✦━━─━━━⌠♠️⌡━━━─━━✦*
*⤹ المنشن ⊰🗿⊱ الجماعي ⤸*
\n` + users.map(v => '│◦❈↲  كيفك ي ورع @' + v.replace(/@.+/, '')).join`\n` + '\n*✦━━━━━━[ 𝑺𝒉𝒂𝒅𝒐𝒘 ]━━━━━━✦*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
