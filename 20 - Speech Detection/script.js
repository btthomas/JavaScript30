window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.words');
let p = document.createElement('p');

words.appendChild(p);

recognition.addEventListener('result', e => {

  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript);

  p.textContent = transcript.join('');
  
  if (e.results[0].isFinal) {
    p = document.createElement('p')
    words.appendChild(p);
  }
});

recognition.addEventListener('end', function() {
  recognition.start();
});
recognition.start();
