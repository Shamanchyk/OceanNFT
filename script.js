let date = new Date('Sep 22 2022 12:58:00');
let date2 = new Date('Sep 22 2022 12:58:00');
let date3= new Date('Sep 22 2022 08:35:23');
let date4 = new Date('Sep 22 2022 07:12:34');

function count(){
    let now = new Date();
    gap = date - now;
    let now2 = new Date();
    gap2 = date2 - now2;
    let now3 = new Date();
    gap3 = date3 - now3;
    let now4 = new Date();
    gap4 = date4 - now4;

    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    let hours2 = Math.floor(gap2 / 1000 / 60 / 60) % 24;
    let minutes2 = Math.floor(gap2 / 1000 / 60) % 60;
    let seconds2 = Math.floor(gap2 / 1000) % 60;

    let hours3 = Math.floor(gap3 / 1000 / 60 / 60) % 24;
    let minutes3 = Math.floor(gap3 / 1000 / 60) % 60;
    let seconds3 = Math.floor(gap3 / 1000) % 60;

    let hours4 = Math.floor(gap4 / 1000 / 60 / 60) % 24;
    let minutes4 = Math.floor(gap4 / 1000 / 60) % 60;
    let seconds4 = Math.floor(gap4 / 1000) % 60;

    if(gap < 0){
        hours += 24;
        minutes += 60;
        seconds += 60;
    } 
    if(gap2 < 0){
        hours2 += 24;
        minutes2 += 60;
        seconds2 += 60;
    } 
    if(gap3< 0){
        hours3 += 24;
        minutes3 += 60;
        seconds3 += 60;
    } 
    if(gap4 < 0){
        hours4 += 24;
        minutes4 += 60;
        seconds4 += 60;
    } 

    document.getElementById('h').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('m').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('s').innerText = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('h2').innerText = hours2 < 10 ? '0' + hours2 : hours2;
    document.getElementById('m2').innerText = minutes2 < 10 ? '0' + minutes2 : minutes2;
    document.getElementById('s2').innerText = seconds2 < 10 ? '0' + seconds2 : seconds2;
    
    document.getElementById('h3').innerText = hours3 < 10 ? '0' + hours3 : hours3;
    document.getElementById('m3').innerText = minutes3 < 10 ? '0' + minutes3 : minutes3;
    document.getElementById('s3').innerText = seconds3 < 10 ? '0' + seconds3 : seconds3;

    document.getElementById('h4').innerText = hours4 < 10 ? '0' + hours4 : hours4;
    document.getElementById('m4').innerText = minutes4 < 10 ? '0' + minutes4 : minutes4;
    document.getElementById('s4').innerText = seconds4 < 10 ? '0' + seconds4: seconds4;
}
count();

setInterval(count, 1000);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
        spaceBetween: 35,
        freeMode: true,
  });


  const aActive = document.querySelector('.a-active');
  const imgActive = document.querySelector('.img-vector');
  const pActive = document.querySelector('.p-none');

  if(aActive){
    aActive.addEventListener("click", function() {
        imgActive.classList.toggle('img-active');
        pActive.classList.toggle('p-active');
    })
  }

  
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__row');

if(hamburger){
    hamburger.addEventListener("click", function() {
        document.body.classList.toggle('lock');
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

const aLink = document.querySelector('.link__block');
const aLink2 = document.querySelector('.link__block2');
const aLink3 = document.querySelector('.link__block3');
const aLink4 = document.querySelector('.link__block4');
const aLink5 = document.querySelector('.link__block5');

if(aLink){
    aLink.addEventListener("click", function() {
        aLink.classList.toggle('active');
    })
}
if(aLink2){
    aLink2.addEventListener("click", function() {
        aLink2.classList.toggle('active');
    })
}
if(aLink3){
    aLink3.addEventListener("click", function() {
        aLink3.classList.toggle('active');
    })
}
if(aLink4){
    aLink4.addEventListener("click", function() {
        aLink4.classList.toggle('active');
    })
}
if(aLink5){
    aLink5.addEventListener("click", function() {
        aLink5.classList.toggle('active');
    })
}

  
