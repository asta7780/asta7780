let handler = async (m, { conn, args, command }) => {
await m.reply('*انا اسف ان كنت ازعجتكم , وداعا للجميع احبكم! (≧ω≦)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(انقلع)$/i
handler.group = true
handler.rowner = true
export default handler
