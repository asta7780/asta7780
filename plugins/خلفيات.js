let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.wp
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "*𝙱𝚈 : 𝐒𝐇𝐀𝐃𝐎𝐖_𝐀𝐒𝐓𝐀*"
	}, {
		quoted: m
	});
}
handler.command = /^(خلفيات)$/i
handler.tags = ['anime']
handler.help = ['wp']
export default handler

global.wp = [
	"https://telegra.ph/file/1d83553f756bd58fb6afb.jpg",
	"https://telegra.ph/file/4ca033baf38b545bdc697.jpg",
	"https://telegra.ph/file/0c328a3ef9db247fbe393.jpg",
	"https://telegra.ph/file/6115c58832f8f07bd5f14.jpg",
	"https://telegra.ph/file/54a7c074eeed534a4f184.jpg",
	"https://telegra.ph/file/8da0e5384d0a8d3b3d107.jpg",
"https://telegra.ph/file/5159c5f643731c6b7ad6b.jpg",
	"https://telegra.ph/file/c0525ce1315e6a4e09759.jpg",
	"https://telegra.ph/file/45b67789d8ef264cf03b8.jpg",
	"https://telegra.ph/file/9aa0181120adb45c33b6a.jpg",
	"https://telegra.ph/file/1134f1a460c794ce2115e.jpg",
	"https://telegra.ph/file/3c24b5beb969f46bb992b.jpg",
	"https://telegra.ph/file/4586cae26f3082019e1ae.jpg",
	"https://telegra.ph/file/9555bbacfe9c0365ae3d4.jpg",
	"https://telegra.ph/file/0ba9f4c6056f7b1f4c55b.jpg",
	"https://telegra.ph/file/58a2fc9e33521794a757d.jpg",
	"https://telegra.ph/file/f30d0064997159c6f2fc4.jpg",
	"https://telegra.ph/file/0049914f7fb039ee93cfe.jpg",
	"https://telegra.ph/file/692d5afe46fb79ede60b1.jpg",
	"https://telegra.ph/file/6b8de3bff9cfff1744f30.jpg",
	"https://telegra.ph/file/977210f3431b61a26b1a5.jpg",
	"https://telegra.ph/file/0f8c3274f8f18bfa63983.jpg",
	"https://telegra.ph/file/5aeefce4b1dc889957618.jpg",
	"https://telegra.ph/file/e6e099d7e7723fcfeb082.jpg",
	"https://telegra.ph/file/ad1a66ee6fa0732119918.jpg",
	"https://telegra.ph/file/d3f5aae3be133b9e564a1.jpg",
	"https://telegra.ph/file/eb6b8df7e32ea3ec4aa6b.jpg",
	"https://telegra.ph/file/025810cae3155a24a3557.jpg",
	"https://telegra.ph/file/2e21a16cf370e657ee7b4.jpg",
	"https://telegra.ph/file/282c910bfe8a3d28d3d67.jpg",
	"https://telegra.ph/file/16b182298d4e8de70af57.jpg",
	"https://telegra.ph/file/c1efb85037ac397cd975b.jpg",
	"https://telegra.ph/file/f7b7f4952d6861a3a7fd6.jpg",
	"https://telegra.ph/file/fb5083d7160c269684ad5.jpg",
	"https://telegra.ph/file/c7efd7852cfac49dab12b.jpg",
	"https://telegra.ph/file/8212a6fa5604e4f74d631.jpg",
	"https://telegra.ph/file/8872171072732f270c447.jpg",
	"https://telegra.ph/file/6fe67964038676c1cb6dc.jpg",
	"https://telegra.ph/file/1670c63987268bbfbc8ea.jpg",
	"https://telegra.ph/file/2f787b1b6588d04674bad.jpg",
	"https://telegra.ph/file/e21aa623eb085bb3b2070.jpg",
  "https://telegra.ph/file/d6432438258a0476eff5e.jpg",
  "https://telegra.ph/file/ee3390ec1fb83ad5645d9.jpg",
  "https://telegra.ph/file/e3a393a0f84ba556ce840.jpg",
  "https://telegra.ph/file/43d7e34103e23e37b7d1f.jpg",
  "https://telegra.ph/file/ef7a8996d9c3a5f057504.jpg",
  "https://telegra.ph/file/7e10cd74d958c61a23ad0.jpg",
  "https://telegra.ph/file/954e64a1aaeef75de0b94.jpg",
  "https://telegra.ph/file/068bcbcf1c36c3ba13daf.jpg",
  "https://telegra.ph/file/02e80fceee409b4c62074.jpg",
  "https://telegra.ph/file/ea55579905bcf89c7b181.jpg"
]