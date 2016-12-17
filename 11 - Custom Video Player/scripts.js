const width = 640;

// elems
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
  buttons[0].innerHTML = video.paused ? playIcon : pauseIcon;
}

function seekBar(e) {
  progressFilled.style['flex-basis'] = `${100 * this.currentTime / this.duration}%`;
}

function seekTo(e) {
  video.currentTime = (e.offsetX / width) * video.duration;
}

function doSeek(e) {
  //console.log(e, this);
}

function skip(e) {
  video.currentTime += Number(this.dataset.skip);
}

function volume(e) {
  video.volume = this.value;
}

function speed(e) {
  video.playbackRate = this.value;
}

// attachhandlers
video.addEventListener('click', pausePlay);
video.addEventListener('timeupdate', seekBar);

progress.addEventListener('click', seekTo);

buttons[0].addEventListener('click', pausePlay);
buttons[1].addEventListener('click', skip);
buttons[2].addEventListener('click', skip);

sliders[0].addEventListener('input', volume);
sliders[1].addEventListener('input', speed);