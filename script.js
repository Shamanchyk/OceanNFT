let date = new Date('Sep 22 2022 12:58:00');

function count(){
    let now = new Date();
    gap = date - now;

    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    if(gap < 0){
        hours += 24;
        minutes += 60;
        seconds += 60;
    } 

    document.getElementById('h').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('m').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('s').innerText = seconds < 10 ? '0' + seconds : seconds;
    
}
count();

setInterval(count, 1000);