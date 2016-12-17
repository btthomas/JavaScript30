let isFull = false;
// elems
const div = document.querySelector('.player')
const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const buttons = document.querySelectorAll('.player__button');
const sliders = document.querySelectorAll('.player__slider');

// chars
const playIcon = '►';
const pauseIcon ='▐▐';

// funcs
function pausePlay(e) {
  video.paused ? video.play() : video.pause();
}
function updateButton() {
  buttons[0].innerHTML = video.paused ? playIcon : pauseIcon;
}

function seekBar() {
  progressFilled.style['flex-basis'] = `${100 * this.currentTime / this.duration}%`;
}

function seekTo(e) {
  video.currentTime = (e.offsetX / video.offsetWidth) * video.duration;
}

function doSeek(e) {
  //console.log(e, this); 
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function full() {
  if(document.webkitFullscreenElement) {
    document.webkitCancelFullScreen()
    div.style.width = '650px';
    div.style.height = '368px';
  } else {
    div.webkitRequestFullscreen();
    div.style.width = '100%';
    div.style.height = '100%';
  }
}

function volume() {
  video.volume = this.value;
}

function speed() {
  video.playbackRate = this.value;
}

// attachhandlers
video.addEventListener('click', pausePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', seekBar);

progress.addEventListener('click', seekTo);

buttons[0].addEventListener('click', pausePlay);
buttons[1].addEventListener('click', skip);
buttons[2].addEventListener('click', skip);
buttons[3].addEventListener('click', full);

sliders[0].addEventListener('input', volume);
sliders[1].addEventListener('input', speed);