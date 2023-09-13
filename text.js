const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('output');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let isListening = false;

startButton.addEventListener('click', () => {
    if (!isListening) {
        recognition.start();
        startButton.textContent = 'Stop Recording';
    } else {
        recognition.stop();
        startButton.textContent = 'Start Recording';
    }
    isListening = !isListening;
});

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');

    outputDiv.textContent = transcript;
};

recognition.onend = () => {
    startButton.textContent = 'Start Recording';
    isListening = false;
};
