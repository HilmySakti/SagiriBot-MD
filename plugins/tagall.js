let handler = async(m, { conn, text, participants }) => {
  let teks = `āāāŖć *š„ Mention All* ćāŖāā\n\nā² *Message : ${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += `ļ½ā¦@${mem.id.split('@')[0]}\n`
				}
                teks += `\nā *Admin Group* ā`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
