let handler = async (m, { isPrems, conn }) => {
    let time = global.db.data.users[m.sender].lastcofre + 86400000; // 86400000 24 Horas
    if (new Date() - global.db.data.users[m.sender].lastcofre < 0) {
        throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\n𝚅𝙾𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`;
    }

    let img = 'https://qu.ax/cqUYc.jpg'; 
    let texto = `🤍 𝗘𝗮𝘇𝘇𝘆 𝗫 𝗥𝗲𝘃𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 🤍

𝗖𝗿𝗲𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 
- 𝗘𝗮𝘇𝘇𝘆 𝗫 : +51 936 994 155 / @Kcha.Mobiles

𝗥𝗲𝘃𝗲𝗻𝗱𝗲𝗱𝗼𝗿𝗲𝘀 𝗢𝗳𝗶𝗰𝗶𝗮𝗹𝗲𝘀 𝗗𝗲𝗹 𝗘𝗮𝘇𝘇𝘆
- 𝗝𝘂𝗮𝗺𝗽𝗶 𝗫 : 
- 𝗩𝗶𝗰𝗸𝘆 𝗫 : 
- 𝗠𝗲𝗿𝗺𝗲𝗹𝗮𝗱𝗮 𝗫 : 

𝗚𝗿𝘂𝗽𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗗𝗲𝗹 𝗕𝗼𝘁 : 
- 𝗟𝗶𝗻𝗸 : https://chat.whatsapp.com/IFkJ3LVePPC0FDGFuDul98
`;

    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    await conn.sendFile(m.chat, img, 'hades.jpg', texto, fkontak);
    global.db.data.users[m.sender].lastcofre = new Date().getTime(); // Cambié a getTime para mayor claridad
};

handler.command = ['comprarbot']; 
handler.tags = ['ventas']
handler.help = ['comprarbot'] 
handler.botAdmin = false;
handler.admin = true;
handler.group = true;
export default handler;
