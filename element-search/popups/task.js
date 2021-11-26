const modalMain = document.getElementById('modal_main');
const modalActive = modalMain.classList.add('modal_active');
const modalClose = modalMain.querySelector('.modal__close_times');
modalClose.addEventListener('click',() => {
    modalMain.classList.remove('modal_active');
})
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');

showSuccess.addEventListener('click',(e) => {
    modalSuccess.classList.toggle('modal_active');
    modalMain.classList.remove('modal_active');
})