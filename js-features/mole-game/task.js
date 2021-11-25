let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
for(let index = 1; index < 9; index++){
    function getHole(index){
        let holeClick = document.getElementById(` hole ${(index)}`);
return holeClick

    }

  let holeBaber = getHole(index);
holeBaber.onclick = function() {
    if(holeBaber.className.includes( 'hole_has-mole' ) === true){
        dead.textContent ++;
    }else{
        lost.textContent ++;
    }
    console.log(dead.textContent);
    if(dead.textContent === 10){
        alert('You win');
        dead.textContent = 0;
        lost.textContent = 0;
    }else if(lost.textContent === 5){
        getDead();
    }
function getDead(alertText) {
        alert(alertText);
        dead.textContent = 0;
        lost.textContent = 0;
    }
}
};
