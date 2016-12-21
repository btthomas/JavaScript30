const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

addItems.addEventListener('submit', handleSubmit);

itemsList.addEventListener('click', handleClick)

function handleSubmit(e) {
  e.preventDefault();

  const text = this.querySelector('[name=item]').value;

  items.push({
    text,
    done: false
  });
  this.reset();
  updateView(items, itemsList);
  updateLocalStorage();
}

function handleClick(e) {
  if (!e.target.matches('input')) return;

  items[e.target.dataset.index].done = !items[e.target.dataset.index].done
  updateLocalStorage();
}

function updateView(plates = [], plateList) {
  const html = plates.map((item, index) => {
    return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" ${item.done ? 'checked' : ''}/>
        <label for="item${index}">${item.text}</label>
      </li>
    `
  }).join('');

  plateList.innerHTML = html;
}

function loadFromStorage(items) {
  const arrayString = window.localStorage.getItem('menu') || '[]';
  items.push(...JSON.parse(arrayString));
}
function updateLocalStorage() {
  window.localStorage.setItem('menu', JSON.stringify(items));

}

loadFromStorage(items);
updateView(items, itemsList);
