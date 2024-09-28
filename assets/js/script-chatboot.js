const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value;

    if (userMessage.trim() === '') return;

    // Exibe a mensagem do usuário
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'chat-message user-message';
    userMessageElement.innerText = userMessage;
    chatBox.appendChild(userMessageElement);

    // Respostas predefinidas do chatbot
    const botResponse = getBotResponse(userMessage);

    // Exibe a mensagem do bot
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'chat-message bot-message';
    botMessageElement.innerText = botResponse;
    chatBox.appendChild(botMessageElement);

    // Limpa o campo de entrada e rola para a última mensagem
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Respostas predefinidas do bot
    if (lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    } else if (lowerCaseMessage.includes('como você está')) {
        return 'Estou bem, obrigado por perguntar!';
    } else if (lowerCaseMessage.includes('tchau')) {
        return 'Até mais! Tenha um ótimo dia!';
    } else {
        return 'Desculpe, não entendi. Pode tentar perguntar de outra forma?';
    }
}