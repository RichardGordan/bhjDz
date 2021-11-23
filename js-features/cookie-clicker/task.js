let clickerCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let counter = 0;

cookie.addEventListener('click',function(){
    counter ++;
    clickerCounter.textContent = counter;
    
})
cookie.onclick = function(){
    if(this.width === 200){
        
    this.width = 500;
    }else{
       this.width = 200;
    }
}
