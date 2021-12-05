const modalMain = document.getElementById('modal_main');
const modalActive = modalMain.classList.add('modal_active');
const modalSucceses = document.getElementById('modal_success');
const arrClose = Array.from(document.querySelectorAll('.modal__close'));
for(let item of arrClose){
    item.addEventListener('click', function (){
        this.closest('.modal').className = 'modal';
        if(this.classList.contains('show-success')){
            modalSucceses.className = 'modal modal_active';
        }
    })
}