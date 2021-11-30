const sladerItems = document.querySelectorAll('.slider__item');
const arrItems = Array.from(sladerItems);
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let slidId = 0;
next.onclick = function (){
    slidId++;
    for(key of arrItems){
        key.className = 'slider__item';
    }
    if(slidId >= arrItems.length){
        slidId = 0;
    }
    sladerItems[slidId].className = "slider__item slider__item_active";
}

prev.onclick = function (){
    slidId--;
    for(key of arrItems){
        key.className = 'slider__item';
    }
    if(slidId < 0){
        slidId = sladerItems.length - 1;
    }
    sladerItems[slidId].className = "slider__item slider__item_active";
}

