var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno(){
    for(i = 0; i<slide.length; i++){
        slide[i].style.display = 'none';
    }
}

function no_active(){
    for(i = 1; i < dot.length; i++){
        dot[i].classList.remove('active');
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if(n > slide.length - 1){
        n = 0;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
    // dot[n].classList.add('active');
})

prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n < 0){
        n = slide.length - 1;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
    // dot[n].classList.add('active');
})

setInterval(function(){
    n++;
    if(n > slide.length - 1){
        n = 0;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
},5000)