const BOT_TOKEN = '8826756472:AAFMdmMcAYZ44k2bygZ4WQ2VFCwQMUd_vmc';
const CHAT_ID = '6287751307';
const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const button = document.querySelector(".button_otpavit");
const input_name = document.querySelector("#name");
const input_email = document.querySelector("#email");
const input_number = document.querySelector("#number");

let message = `📝 Новая заявка:\n\n👤 Имя: ${input_name.value}\n📧 Email: ${input_email.value}`;

button.addEventListener("click", sendFeedback)

function sendFeedback(event) {
    event.preventDefault();  // ← КЛЮЧЕВОЙ МОМЕНТ!
    console.log("feedback sent");
    
    const data = {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
    };

    fetch(url, {
        method: 'POST', //GET. POST. PUT. DELETE.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
            // Очищаем поля после успешной отправки
            input_name.value = '';
            input_email.value = '';
    })
    .catch(error => {
        
        console.error('Fetch error:', error);
    });
}
