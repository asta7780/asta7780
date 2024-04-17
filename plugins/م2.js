import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
 await conn.sendMessage(m.chat, { react: { text: '2️⃣', key: m.key } })
try {
let vn = './media/1.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/d7ae77d1178f9de50825c.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `◎ ─━──━─𝑺𝒉𝒂𝒅𝒐𝒘─━──━─ ◎

*جـعلك تحـتاج هـذه القـائمة جـزء مـن خطـتي ..*

 ◎ ─━──━─⊰ ✎ ⊱─━──━─ ◎

*القسـم الثاني قسـم المالك ...*

 ◎ ─━──━─⊰ ♛ ⊱─━──━─ ◎

*☁️.ادخل/انضم ↫البوت يدخل الجروب*

*☁️.اخرج ↫البوت يخرج من الجروب*

*☁️حطها-بروفايل ↫يحط البوت الصوره لك بروفايل*

*☁️.بان ↫المطور يبند اي احد و يحرمه من البوت*

*☁️.رفع-البان ↫البوت يرفع البان*

*☁️.بان-شات ↫يحظر المطور الشات للبوت*

*☁️.بان-شات-فك ↫يرجع المطور الشات للبوت*

*☁️.حظر/بلوك ↫يحظر المطور و يبلكوه من استخدام البوت*

*☁️.رفع-الحظر/.رفع-البلوك/ ↫يفك المطور الحظر أو البلوك*

*☁️.الغاء-الحظر ↫الغاء حظر الشات للبوت*

*☁️.اضف-اكسبي ↫يرفع المطور لفل اي احد ضاع منه*

*☁️.اضف-الماس ↫يضيف المطور الماس ل اي شخص*

*☁️.بريم ↫يعطي المطور للبوت رقم اي شخص يقدر يستخدمه مثله*

*☁️.المميزين ↫الاشخاص البريميوم*

*☁️.البلوكات ↫الاشخاص الي واخدين بلوك من البوت*

*☁️.ازاله-التحذير او رفع -الانذار ↫يرفع الانذار عن اى شخص*

 ◎ ─━──━─⊰ ✎ ⊱─━──━─ ◎
*~⌬ تـ✍︎ـوقيعي/*
*~آس؁تــا~*`.trim()
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `${wm}`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『┇𝐒𝐇𝐀𝐃𝐎𝐖_Bot┇』',
body: null,
thumbnail: img,
sourceUrl: `https://telegra.ph/file/d7ae77d1178f9de50825c.jpg`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃', m)
}}
handler.command = /^(م2)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}