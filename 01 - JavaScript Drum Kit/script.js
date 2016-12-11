function keyPressed(event) {

  const elements = document.querySelectorAll(`[data-key="${event.keyCode}"]`);
  console.log(elements);

  if (elements.length !== 0) {

    const list = elements[0].classList;

    list.add('playing');
    elements[0].addEventListener('transitionend', () => {
      list.remove('playing');
    });

    elements[1].currentTime = 0;
    elements[1].play();
  }
}

window.addEventListener('keydown', keyPressed);