async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userText = input.value;
    if (!userText) return;

    chatBox.innerHTML += `<div class="user">${userText}</div>`;

    const response = await fetch(https://ai-chatbot-39x6.onrender.com/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userText })
    });

    const data = await response.json();

    chatBox.innerHTML += `<div class="bot">${data.reply}</div>`;

    input.value = "";
}
