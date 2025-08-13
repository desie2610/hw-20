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

// function randomRGB() {
//     const red = Math.round(Math.random() * (255 - 1) + 1);
//     const green = Math.round(Math.random() * (255 - 1) + 1);
//     const blue = Math.round(Math.random() * (255 - 1) + 1);
// }