"use strict";
const sladerItems = document.querySelectorAll('.slider__item');
const arrItems = Array.from(sladerItems);
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');

let slidId = arrItems.findIndex(el => {
    console.log(el);
    return el.classList.contains('slider__item_active');
});

next.addEventListener('click', ()=>{
    arrItems[slidId].classList.remove('slider__item_active');
    slidId = slidId === arrItems.length - 1 ? 0 : slidId + 1; 
    arrItems[slidId].classList.add('slider__item_active'); 
});

prev.addEventListener('click', ()=>{
    arrItems[slidId].classList.remove('slider__item_active');
    slidId = slidId === 0 ? arrItems.length - 1 : slidId - 1; 
    arrItems[slidId].classList.add('slider__item_active'); 
});