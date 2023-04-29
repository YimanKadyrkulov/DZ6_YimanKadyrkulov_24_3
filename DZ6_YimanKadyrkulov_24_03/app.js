






// const block = document.querySelector('.block');
//
// const texts = ['Text 1', 'Text 2', 'Text 3'];
// let currentTextIndex = 0;
//
// function showText(index) {
//     block.innerText = texts[index];
// }
//
// function showNextText() {
//     currentTextIndex++;
//     if (currentTextIndex >= texts.length) {
//         currentTextIndex = 0;
//     }
//     showText(currentTextIndex);
// }
//
// function showPrevText() {
//     currentTextIndex--;
//     if (currentTextIndex < 0) {
//         currentTextIndex = texts.length - 1;
//     }
//     showText(currentTextIndex);
// }
//
// const prevButton = document.querySelector('.btnPrev');
// prevButton.addEventListener('click', showPrevText);
//
// const nextButton = document.querySelector('.btnNext');
// nextButton.addEventListener('click', showNextText);
//
// showText(currentTextIndex);






const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btnPrev')
const btnNext = document.querySelector('.btnNext')

let count = 1;

const func = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML =`
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>`
        })
}
func()

btnNext.onclick = () => {
    count++
    func()
}

btnPrev.onclick = () => {
    count !== 1 && count--
    func()
}


fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) =>  response.json())
    .then((data) => console.log(data));
