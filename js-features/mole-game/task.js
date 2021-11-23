let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
for(let index = 1; index < 9; index++){
    function getHole(index){
        let holeClick = document.getElementById(` hole ${(index)}`);
return holeClick

    }

  let hole = getHole(index);
holeBaber.onclick = function(){
    if(hole.className.includes( 'hole_has-mole' ) === true){
        dead.textContent += 1;
    }else{
        lost.textContent += 1;
    }
    console.log(dead.textContent);
    if(dead.textContent === 10){
        alert('You win');
        dead.textContent = 0;
        lost.textContent = 0;
    }else if(lost.textContent === 5){
        alert('You lose');
        dead.textContent = 0;
        lost.textContent = 0;
    }

}
};