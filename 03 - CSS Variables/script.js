const inputs = document.querySelectorAll('input');

inputs[0].addEventListener('change', spacing);
inputs[0].addEventListener('mousemove', spacing);
inputs[1].addEventListener('change', blur);
inputs[1].addEventListener('mousemove', blur);
inputs[2].addEventListener('change', color);
inputs[2].addEventListener('mousemove', color);


function spacing(e) {
  document.documentElement.style.setProperty('--spacing', this.value + 'px');
}

function blur(e) {
  document.documentElement.style.setProperty('--blur', this.value + 'px');
}

function color(e) {
  document.documentElement.style.setProperty('--base', this.value);
}