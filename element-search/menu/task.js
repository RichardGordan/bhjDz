document.querySelectorAll('.menu__link').forEach((el)  =>{
    el.onclick = () => {
        const menuSub = el.closest('.menu__item').querySelector('.menu_sub');
        if(menuSub){
            if(!menuSub.classList.contains('menu_active')){
                const menuActive = el.closest('.menu_main').querySelectorAll('.menu_active');
                if(menuActive.length > 0 ){
                    document.querySelectorAll('.menu_active').forEach((item) => item.classList.remove('menu_active'))
                }
                menuSub.classList.add('menu_active');
            }else{
                menuSub.classList.remove('menu_active');
            }
            return false
        }

    }
    

})



