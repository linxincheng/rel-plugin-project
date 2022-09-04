console.log('insert.js loaded');
let x = 0;
let y = 0;

function init() {
    createPopupDOM();
    initEvent();
}

let DOM;
function createPopupDOM() {
    // 创建弹出节点并插入body
    DOM = document.createElement('div');
    DOM.classList.add('popup');
    const collectitonDOM = document.createElement('a');
    collectitonDOM.classList.add('collection');
    collectitonDOM.innerText='收藏';
    collectitonDOM.id = 'collection';
    DOM.onclick = function () {
        console.log(content);
        // TODO 发送内容到balabala
    }
    DOM.appendChild(collectitonDOM);
    document.body.appendChild(DOM);
}

// 隐藏事件
let timer;
function hidden() {
    timer = setTimeout(() => {
        DOM.classList.remove('show');
    }, 1000);
}

function initEvent() {
    // 弹出节点展示隐藏
    DOM.addEventListener('mouseleave', () => {
        console.log('dom mouseleave');
        hidden();
    })
    DOM.addEventListener('mouseover', () => {
        console.log('dom mouseover');
        clearTimeout(timer);
    });
}

// 展示逻辑
document.body.onmousemove = show;
let showTimer;
let content;
function show ($event) {
    clearTimeout(showTimer);
    showTimer = setTimeout(() => {
        x = $event.pageX;
        y = $event.pageY;
        console.log(x,y);
        console.log($event);
        // text节点并非弹出的dom节点
        if ($event?.srcElement?.innerText && $event.srcElement.innerText === $event.srcElement.innerHTML && $event.target.id !== 'collection') {
            clearTimeout(timer);
            DOM.setAttribute('style', `top: ${y}px; left: ${x}px;`)
            DOM.setAttribute('title',$event?.target?.innerText || '')
            content = $event?.target?.innerText || '';
            DOM.classList.add('show');
            hidden();
        }
    }, 500);
}

init()