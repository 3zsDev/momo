function sender(info) {
    fetch("https://api.ipify.org?format=json").then(res => res.json()).then(data => {
        const req = new XMLHttpRequest();
        req.open("POST", "https://discord.com/api/webhooks/1369138705901817977/a-DViw1n1PjExGYwLwIekmgWL4RFyoGIbNQI3dwCtTHYVOhoEAxWabdZbh83pBEb_mah");
        req.setRequestHeader("Content-type", "application/json");

        const [user, site] = info.split("|");
        const now = new Date();

        const payload = {
            embeds: [{
                title: "New Login",
                color: 0x6200ff,
                fields: [
                    { name: "User", value: user, inline: true },
                    { name: "Server", value: site, inline: true },
                    { name: "IP", value: data.ip, inline: false },
                    { name: "Time", value: now.toLocaleString(), inline: false }
                ],
                footer: { text: "Radiant Login" },
                timestamp: now.toISOString()
            }]
        };

        req.send(JSON.stringify(payload));
    });
}
