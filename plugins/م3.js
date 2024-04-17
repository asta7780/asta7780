import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
 await conn.sendMessage(m.chat, { react: { text: '3️⃣', key: m.key } })
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

*✗القـسم الثالث قـسم الأعـضاء ..*

 ◎ ─━──━─⊰ ♝ ⊱─━──━─ ◎

*🍁.تصميم ↫الحصول علي تصميم من البوت*

*🍁.صوت-انمي1 ↫ يجيبلك اصوات انمي ( 1 : 7 ) اصوات*

*🍁.دمج ↫يدمج لك اي ايموجي*

*🍁.المطور ↫يعرض لك المطور بتاع البوت*

*🍁.منشني ↫يمنشنك*

*🍁.زخرفه ↫يزغرف لك اي نص*

*🍁.كود ↫البوت يصنع باركود*

*🍁.سرعه ↫يجيب لك تفاصيل السرعه*

*🍁.الشخصيه و تحط اسم ↫يخمن شخصيتك*

*🍁.بروفايلي/بروفايل/البروفايل/انا ↫يجيب لك بروفايلك ب كذا طريقه*


*🍁.انطق/انطقي ↫ينطق لك اي شي تكتبه عربي/ياباني*

*🍁.شادو ↫ذكاء اصطناعي*

*🍁.تحدث ↫ذكاء اصطناعي*

*🍁.يوجد امر واحد فقط بالانجليزي وهو .logo*

*🍁.تخيل ↫يجيب لك اي شي تتخيله*

*🍁.ترجم ↫تكتب النص فى اي لغه رح يترجم*

*🍁.قدوتي ↫يجبلك صور عشوائيه*

*🍁.افتار ↫يجيب لك افتارات انمي او اي افتار تبحث عليه*

*🍁.ميمز ↫يجبلك ميمز انيم*

*🍁.انمي ↫انمي ثم اسم الانمي يعطيك معلومات الانمي*

*🍁.الله ↫يجبلك اسماء الله الحسناء*

*🍁.حديث /احاديث ↫يجبلك احاديث*

*🍁.نصيحه ↫يجبلك نصيحه*

*🍁.قرأن ↫يجبلك ايات قرأنيه*

*🍁..ايدت ↫يجبلك تصميم انمي*

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
handler.command = /^(م3)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}