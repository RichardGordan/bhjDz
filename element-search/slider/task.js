const sladerItems = document.querySelectorAll('.slider__item');
const arrItems = Array.from(sladerItems);
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let slidId ;
const sliderArrow = document.querySelectorAll('.slider__arrow');
function getSlide (){
    slidId = arrItems.findIndex(function (item){
        return item.className === 'slider__item slider__item_active' ? true : false
    });
    arrItems[slidId].className = 'slider__item';

}
next.addEventListner('click', function (){
    getSlide();
    slidId === 0 ? (arrItems[arrItems.length -1].className === 'slider__item slider__item_active'): (arrItems[slidId -1].className === 'slider__item slider__item_active');

});
prev.addEventListner('click', function(){
    getSlide();
    slidId === (arrItems.length - 1) ? (arrItems[0].className === 'slider__item slider__item_active') : (arrItems[slidId + 1].className === 'slider__item slider__item_active');
});