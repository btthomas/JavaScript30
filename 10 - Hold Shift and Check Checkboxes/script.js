let lastClicked = -1;
let shift = false;

const items = document.querySelectorAll('input');
console.log(items);

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleClick(e, item, index);
  });
});

function handleClick(e, input, index) {
  // e.preventDefault();
  console.log(e, input.checked, index);
  
  if (shift && lastClicked !== -1) {
    // what needs to be clicked?
    const spread = lastClicked - index;
    let count = 0;
    console.log(spread);
    if (spread < 0) {
      while (count > spread + 1) {
        count--;
        console.log(count);
        items[index + count].checked = true;
      }
    }
    if (spread > 0) {
      while (count < spread - 1) {
        count++;
        console.log(count);
        items[index + count].checked = true;
      }
    }
  }

  lastClicked = index;
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Shift') {
    shift = true;
  }
});
window.addEventListener('keyup', (e) => {
  if (e.key === 'Shift') {
    shift = false;
  }
});