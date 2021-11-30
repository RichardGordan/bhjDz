const menuLink = document.querySelectorAll('.menu__link');
let arrLink = Array.from(menuLink);
for(let key of arrLink){
    key.onclick = function() {
        const parent = key.parentElement;
        if(parent.querySelector('.menu_sub').className === 'menu menu_sub'){
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        }else{
            parent.querySelector('.menu_sub').className = 'menu menu_sub';
        }
        if(key.closest('.menu_main')){
            return false 
        }
        
    }
}