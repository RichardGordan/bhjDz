const dropDown = document.querySelector('.dropdown__value');
const dropAll = document.querySelectorAll('dropdown__value');

dropDown.addEventListener('click',function (){
document.querySelector('.dropdown__list').className = "dropdown__list dropdown__list_active"; 
Array.from(dropAll).forEach(function (button){
    const list = button.closest('.dropdown').querySelector('dropdown__list');
    const items = button.closest('dropdown').querySelector('dropdown__item');

})
});
Array.from(items).forEach(function (item){
    item.addEventListener('click',function(evn){
        button.textContent = item.textContent.trim();
        list.classList.remove('dropdown__list_active')
    })
})