console.log('insert.js loaded');
let x = 0;
let y = 0;

const DOM = document.createElement('div');
DOM.classList.add('popup');
const collectitonDOM = document.createElement('a');
collectitonDOM.classList.add('collection');
collectitonDOM.innerText='收藏';
DOM.appendChild(collectitonDOM);

document.body.appendChild(DOM);
document.body.onclick = function ($event) {
    x = $event.pageX;
    y = $event.pageY;
    console.log(x,y);
    clearTimeout(timer);
    DOM.setAttribute('style', `top: ${y}px; left: ${x}px;`)
    DOM.setAttribute('title',$event?.target?.innerText || '')
    DOM.classList.add('show');
};
DOM.addEventListener('mouseleave', () => {
    console.log('dom mouseleave');
    hidden();
})
DOM.addEventListener('mouseover', () => {
    console.log('dom mouseover');
    clearTimeout(timer);
});

let timer;
function hidden() {
    timer = setTimeout(() => {
        DOM.classList.remove('show');
    }, 1000);
}
