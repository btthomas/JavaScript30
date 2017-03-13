const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => {
  const aa = fix(a);
  const bb = fix(b);
  if (aa < bb) {
    return -1;
  }
  if (aa > bb) {
    return 1;
  }
  return 0;
})

console.log(sortedBands);

const markup = sortedBands
  .map(band => `<li>${band}</li>`)
  .join('');

console.log(markup);

document.querySelector('#bands').innerHTML = markup;

function fix(string) {
  if (string.substring(0, 2) === 'A ') {
    return string.slice(2);
  }
  if (string.substring(0, 3) === 'An ') {
    return string.slice(3);
  }
  if (string.substring(0, 4) === 'The ') {
    return string.slice(4);
  }
  return string;
}