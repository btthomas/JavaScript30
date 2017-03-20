const lis = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.add('trigger-enter-active'), 1);

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top, 
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', coords.width + 'px');
  background.style.setProperty('height', coords.height + 'px');
  background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`);
}

function handleLeave() {

  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

lis.forEach(li => li.addEventListener('mouseenter', handleEnter));
lis.forEach(li => li.addEventListener('mouseleave', handleLeave));
