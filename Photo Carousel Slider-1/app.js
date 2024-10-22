let nextDom = document.getElementById('next'); //Getting the next btn
let prevDom = document.getElementById('prev'); // getting the prev  btn
let carouselDom = document.querySelector('.carousel'); //getting the carousel
let listItemDom = document.querySelector('.carousel .list'); //getting the list container
let thumbnailDom = document.querySelector('.carousel .thumbnail'); //getting the thumbnail

// Adding onclick function to the next button
nextDom.onclick = function(){
    showSlider('next');
}
// Adding onclick function to the prev button

prevDom.onclick = function(){
    showSlider('prev');
}

let timeAutoNext = 10000; //time for auto run
let timeRunnning = 3000; //time to remove the prev or next class from the carousel
let runTimeOut;  // declaring  the run time
let runAutoRun;  // getting the run time of auto
function showSlider(type) {

    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

   // if user clicks on next button make the current item container to be the first
    if (type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        //then add the next class to the carousel
        carouselDom.classList.add('next');
    }else {
           // if user clicks on prev button make the previous item container to be the curent
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
         //then add the next class to the carousel
        carouselDom.classList.add('prev');
    }
   clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        //time to remove the prev and next class from carousel
        carouselDom.classList.remove('next'); 
        carouselDom.classList.remove('prev'); 
    }, timeRunnning);

    //time for auto run
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=> {
        nextDom.click();
    }, timeAutoNext);
}

