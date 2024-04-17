let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = await(await fetch('https://...')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────『Shadow_bot』
│
│ *➤ مرحبا ${taguser}*
│
│ *=> 🤖 وقت عمل البوت:* ${uptime}
│ *=> 🗿البوت خاص وعام*
│ *=> 👑 تم تطويري بواسطة آس؁تــا*
│ *=> 🔗 رقم المطور:* *https://wa.me/+967778088098*
╰────────────────`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: 'قائمة الاوامر 📜' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'اضغط هنا لدخول قروب الدعم', body: 'بواسطة آس؁تــا, thumbnail: img, sourceUrl: `*𝕯𝖊𝖆𝖙𝖍⊰ ✎ ⊱𝐍𝖔𝖙𝖊*`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 وقت العمل: ${uptime} ┃ قروب الدعم:**𝕯𝖊𝖆𝖙𝖍⊰ ✎ ⊱𝐍𝖔𝖙𝖊**`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(الدعم|الضعوم)/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *=> 💥 ` + d, ' يوم* ', `\n│ *=> 💫 ` + h, ' ساعه* ', `\n│ *=> 💠 ` + m, ' دقيقه* ', `\n│ *=> ☁️ ` + s, ' ثانيه* '].map(v => v.toString().padStart(2, 0)).join('')}
