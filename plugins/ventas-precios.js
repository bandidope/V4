let handler = async (m, { isPrems, conn }) => {
    let time = global.db.data.users[m.sender].lastcofre + 86400000; // 86400000 24 Horas
    if (new Date() - global.db.data.users[m.sender].lastcofre < 0) {
        throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\n𝚅𝙾𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`;
    }

    let img = 'https://qu.ax/cqUYc.jpg'; 
    let texto = `🇵🇪 𝗣𝗲𝗿𝘂 
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 4,50 soles
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 3,50 soles
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 8 soles
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :  7 soles
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 :  12 soles
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :  11 soles
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 35 soles

🇦🇷 𝗔𝗿𝗴𝗲𝗻𝘁𝗶𝗻𝗮
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 1,238 Ars
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 962 Ars
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 :  2,200 Ars
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :  1,925 Ars
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 :   3,300 Ars
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :   3,025 Ars
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 9,625 Ars

🇲🇽 𝗠𝗲𝘅𝗶𝗰𝗼 
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 22 Mx
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 17 Mx
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 :  38 Mx
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :  34 Mx
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 :  57 Mx
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 :  53 Mx
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 167 Mx

🇧🇴 𝗕𝗼𝗹𝗶𝘃𝗶𝗮
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 16 bs
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 13 bs
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 28 Bs
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 25 Bs
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 : 42 Bs
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 39 Bs
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 123 Bs

🇺🇾 𝗨𝗿𝘂𝗴𝘂𝗮𝘆
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 45 Uru
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 35 Uru
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 80 Uru
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 70 Uru
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 : 120 Uru
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 110 Uru
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 350 Uru

🇨🇱 𝗖𝗵𝗶𝗹𝗲
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 1,035 Clp
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 805 Clp
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 1,840 Clp
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 1,610 Clp
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 : 2,760 Clp
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 2,530 Clp
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 8,050 Clp

🇨🇴 𝗖𝗼𝗹𝗼𝗺𝗯𝗶𝗮
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 4,275 Cop
 - 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 3,325 Cop
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 7,600 Cop
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 6,650 Cop
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 : 11,400 Cop
* 𝗠𝗲𝗻𝘀𝘂𝗮𝗹 : 10,450 Cop
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 33,250 Cop

💎 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟭 : 100 Diamantes
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟮 : 300 Diamantes
𝗕𝗼𝘁 𝗚𝗿𝘂𝗽𝗼 𝟯 : 500 Diamantes
𝗕𝗼𝘁 𝗣𝗲𝗿𝘇𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 : 1000 Diamantes

𝗘𝗮𝘇𝘇𝘆 𝗫 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 : https://chat.whatsapp.com/IFkJ3LVePPC0FDGFuDul98

𝗖𝗮𝗻𝗮𝗹 𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗮𝘀 : https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m`;

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

handler.command = ['precio']; 
handler.tags = ['ventas']
handler.help = ['precio'] 
handler.botAdmin = false;
handler.admin = true;
handler.group = true;
export default handler;
