const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  const walk = 50;

  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = (x / width * walk) - (walk / 2); 
  const yWalk = (y / height * walk) - (walk / 2); 

  console.log(xWalk, yWalk);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 blue`;
}

hero.addEventListener('mousemove', shadow);
