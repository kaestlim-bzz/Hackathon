async function getAudio(text) {
    return new Promise((resolve) => {
        let textToSpeak = new SpeechSynthesisUtterance(text);
        textToSpeak.onend = resolve;
        window.speechSynthesis.speak(textToSpeak);
    });
}