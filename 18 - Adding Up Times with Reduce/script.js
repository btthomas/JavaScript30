const ul = document.querySelector('.videos');

const listItems = [...ul.querySelectorAll('li')];

const total = listItems.reduce((acc, d) => {
  return acc + fix(d.dataset.time);
}, 0);

console.log(total);

const hours = Math.floor(total / 3600);
const mins = Math.floor((total % 3600) / 60);
const seconds = total % 60;

console.log(hours, mins, seconds);


function fix(string) {
  const separated = string.split(':');
  console.log(separated);
  return +(separated[1]) + +(separated[0] * 60);
}