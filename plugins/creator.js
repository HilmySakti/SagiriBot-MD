const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; HilmySakti;;;'
                    + 'FN:Owner Sagiri Bot-MD\n' // full name
                    + 'ORG:Y Team;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281217779427:+62 812-1777-9427\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'HilmySakti', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
