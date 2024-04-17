const _0x12c300=_0x8f22;(function(_0x8900ee,_0x5614a9){const _0x164fe3=_0x8f22,_0x4beb2b=_0x8900ee();while(!![]){try{const _0xb5a68b=parseInt(_0x164fe3(0x1e8))/0x1+-parseInt(_0x164fe3(0x1eb))/0x2*(-parseInt(_0x164fe3(0x1e0))/0x3)+-parseInt(_0x164fe3(0x1f0))/0x4*(-parseInt(_0x164fe3(0x1d9))/0x5)+parseInt(_0x164fe3(0x1e7))/0x6*(parseInt(_0x164fe3(0x1ec))/0x7)+parseInt(_0x164fe3(0x1e6))/0x8*(parseInt(_0x164fe3(0x1dc))/0x9)+-parseInt(_0x164fe3(0x1e4))/0xa*(-parseInt(_0x164fe3(0x1dd))/0xb)+-parseInt(_0x164fe3(0x1de))/0xc;if(_0xb5a68b===_0x5614a9)break;else _0x4beb2b['push'](_0x4beb2b['shift']());}catch(_0x380364){_0x4beb2b['push'](_0x4beb2b['shift']());}}}(_0x1fa7,0x4f566));function _0x1fa7(){const _0x5d8ba6=['7rJyhGM','*✦━━━━━━[\u00a0Shadow\u00a0]━━━━━━✦*\x0a*⤹⊰✎⊱⤸*\x0a*◎ ─━──━─✎─━──━─ ◎*\x0a*⤹\x20المنشن«♤»\x20الجماعي\x20⤸*\x0a\x0a','filter','map','120cIfLaV','replace','\x0a*✦━━━━━━[\u00a0Shadow\u00a0]━━━━━━✦*','67165MxVTtl','admin','reply','694836vvImgf','7821yQBjJo','18387204XohjDX','help','18519OsBgFA','منشن','join','jid','1880MwLSAj','│◦❈↲\x20تفاعل\x20يا\x20حب\x20🗿\x20☕️\x20@','32nwoMUe','2905098uvxJBi','231272LdnnzA','group','command','96GGigVT'];_0x1fa7=function(){return _0x5d8ba6;};return _0x1fa7();}function _0x8f22(_0x1e14cb,_0x3fd0c3){const _0x1fa7a6=_0x1fa7();return _0x8f22=function(_0x8f22df,_0x47834a){_0x8f22df=_0x8f22df-0x1d8;let _0x50f34c=_0x1fa7a6[_0x8f22df];return _0x50f34c;},_0x8f22(_0x1e14cb,_0x3fd0c3);}let handler=async(_0x1a4457,{conn:_0x1abe00,text:_0x24f073,participants:_0xd00b54,isAdmin:_0x3c1ef3,isOwner:_0x3b3686})=>{const _0x4a9f73=_0x8f22;let _0x7fb002=_0xd00b54[_0x4a9f73(0x1ef)](_0x12f964=>_0x12f964['id'])[_0x4a9f73(0x1ee)](_0x54a60a=>_0x54a60a!==_0x1abe00['user'][_0x4a9f73(0x1e3)]);_0x1a4457[_0x4a9f73(0x1db)]((_0x24f073?_0x24f073+'\x0a':'')+_0x4a9f73(0x1ed)+_0x7fb002[_0x4a9f73(0x1ef)](_0x5bd122=>_0x4a9f73(0x1e5)+_0x5bd122[_0x4a9f73(0x1f1)](/@.+/,''))[_0x4a9f73(0x1e2)]`\n`+_0x4a9f73(0x1d8),null,{'mentions':_0x7fb002});};handler[_0x12c300(0x1df)]=[_0x12c300(0x1e1)],handler['tags']=['group'],handler[_0x12c300(0x1ea)]=['منشن'],handler[_0x12c300(0x1da)]=!![],handler[_0x12c300(0x1e9)]=!![];export default handler;import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'

let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
let set
if (/عميق2/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
if (/منفوخ/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/عميق/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/تحسين/.test(command)) set = '-af volume=12'
if (/سريع/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/بدين/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/تسريع-بسيط/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/عكس/.test(command)) set = '-filter_complex "areverse"'
if (/الي/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/بطئ/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/سلس/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/سنجاب/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let ran = getRandom('.mp3')
let filename = join(__dirname, '../tmp/' + ran)
let media = await q.download(true)
exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err, stderr, stdout) => {
await unlinkSync(media)
if (err) throw `*خطأ!*`
let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})})
} else throw `*رد ع الصوت ال انت عاوز تعمله ايفيكت يحب ${usedPrefix + command}*`
} catch (e) {
throw e
}}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(عميق2|منفوخ|عميق|تحسين|سريع|تسريع-بسيط|عكس|الي|بطئ|سلس|سنجاب)$/i
export default handler

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}