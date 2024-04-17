import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*اكتب الي بدك تدور عليه و ياريت انجليزي عشان يتطبق الامر صح*✅?\n*❄️مثال: ${usedPrefix + command} luffy*`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*•┃❖.قادمه من بنتريست🍁✨:${text}*
*•┃❖.〘المطور آس؁تــا〙*
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['افتار'] 
export default handler
