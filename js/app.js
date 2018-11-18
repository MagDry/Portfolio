document.addEventListener('DOMContentLoaded', function() {

//buttons

let leftBtn = document.querySelector('.sliderButtonPrev');
//console.log(leftBtn);
let rightBtn = document.querySelector('.sliderButtonNext');
//console.log(rightBtn);

//images list - first image
let imgClass = document.querySelectorAll('.image');
//console.log(imgClass);

//define a variable
let index = 0;


//add "visible" class to image
imgClass[index].classList.add('visible');
imgClass[index+1].classList.add('visible');
imgClass[index+2].classList.add('visible');



//press right button - "visible" class is removed
rightBtn.addEventListener('click', function(){

        imgClass[index].classList.remove('visible');        
        imgClass[index+1].classList.remove('visible');        
        imgClass[index+2].classList.remove('visible');        
            index++;
        if (index==7) {
            index=0;
        }
        imgClass[index].classList.add('visible');
        imgClass[index+1].classList.add('visible');        
        imgClass[index+2].classList.add('visible');
    
});


leftBtn.addEventListener('click', function(){

    imgClass[index].classList.remove('visible');
    imgClass[index+1].classList.remove('visible');
    imgClass[index+2].classList.remove('visible');
        index--;
    if(index==-1){
        index=imgClass.length-3;
    }
    imgClass[index].classList.add('visible');
    imgClass[index+1].classList.add('visible');
    imgClass[index+2].classList.add('visible');
});


});

