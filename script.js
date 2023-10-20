"use strict";

// Elements
const listenBtn = document.querySelector("button");
const txtArea = document.querySelector("textarea");
const voiceSelect = document.querySelector("select");
console.log(voiceSelect);
// End of Elements

// creaye instance of SpeechSynthesisUtterance
const speech = new SpeechSynthesisUtterance();

// voices arr
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // populate voiceSelect option with available voices
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// Functions
// func to speak the text in the textarea
const speak = () => {
  speech.text = txtArea.value;
  window.speechSynthesis.speak(speech);
};
// End of Functions

// Event Handlers
listenBtn.addEventListener("click", speak);

// update language when user changes it
voiceSelect.addEventListener("click", () => {
  speech.voice = voices[voiceSelect.value];
});
// End of Event Handlers
