const galEL = document.querySelector('.gallery')

console.dir(galEL)
// console.log(galEL);
//ArrowRight
//ArrowLeft

const scrolValue = 320;

window.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code === 'ArrowRight') {
    galEL.scrollBy({left: scrolValue})
    }

     else if (event.code === 'ArrowLeft') {
    galEL.scrollBy({left: -scrolValue})
    }
}
)



const inputEl = document.querySelector('input');

const renderBtnEl = document.querySelector(
  '[data-action="render"]'
);

const destroyBtnEl = document.querySelector(
  '[data-action="destroy"]'
);

const boxesEl = document.querySelector('#boxes');

console.log(inputEl);
console.log(renderBtnEl);
console.log(destroyBtnEl);
console.log(boxesEl);


function randomRGB() {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
return `rgb(${r}, ${g}, ${b})`
}


function createBoxes(amount) {
  let sizeBox = 30;
  const box = [];
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = randomRGB();
    boxEl.style.width = sizeBox + 'px';
    boxEl.style.height = sizeBox + 'px';
    box.push(boxEl);
    sizeBox += 10;
  }
  boxesEl.append(...box)
}


renderBtnEl.addEventListener('click', () => {
  const value = Number(inputEl.value);
  if (value > 0) {
    createBoxes(value);
  }
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}