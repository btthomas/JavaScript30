const pressed = [];
const code = 'blakethomas';

window.addEventListener('keyup', listener);

function listener(e) {
  console.log(e.key);
  pressed.push(e.key);

  pressed.splice(-code.length - 1, pressed.length - code.length);

  if (pressed.join('').includes(code)) {
    console.log('match');
    cornify_add();
  }
}