const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');


function setVoices() {
  voices = this.getVoices();
  const voiceOptions = voices.map(voice => {
    return `
      <option value="${voice.name}">${voice.name} (${voice.lang})</option>
    `;
  }).join('')

  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

function toggle() {
  speechSynthesis.cancel();
  speak();
}

function speak() {
  msg.text = document.querySelector('[name="text"]').value;
  speechSynthesis.speak(msg);
}

function stop() {
  speechSynthesis.cancel();
}

speechSynthesis.addEventListener('voiceschanged', setVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);
options.forEach(option => option.addEventListener('change', setOption));