const timerElement = document.getElementById('timer'); 
let secEnd = 1 * 3600;
let secDay = 24 * 3600;
setInterval(function(){
let newDate = new Date();
let curSec = newDate.getUTCHours() * 3600 + newDate.getMinutes() * 60 + newDate.getSeconds() * 01;
diff = secEnd - curSec;
if(diff < 0){
    diff = secDay + diff;
}
let hours = Math.floor(diff / 3600);
let minutes = Math.floor(diff / 60) % 60;
let seconds = Math.floor(diff) % 60;

if (hours < 10){ 
    hours = '0' + hours;
}
if (minutes < 10){ 
minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds;
}
timerElement.innerHTML = `${hours} : ${minutes} : ${seconds}`;
if(timerElement.innerHTML <= 0){
    document.location.assign('https://steamcdn-a.akamaihd.net/steamcommunity/public/images/clans/33235489/95a5b43c0de03c563c339c565e010d52e28f0291.png');
}
}, 1000);
