let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let corouselDom = document.querySelector('.corousel');
let listItemDom = document.querySelector('.corousel .list');
let thumbnailDom = document.querySelector('.corousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev')
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();

    }, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.corousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        corouselDom.classList.add('next');

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        corouselDom.classList.remove('next');
       
    }, timeRunning)

    cleariTimeout(runAutoRun);
    runTimeOut = setTimeout(() =>{
        nextDom.click();

    }, timeAutoNext);

}
