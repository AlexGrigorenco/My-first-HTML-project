const owl = $('.owl-carousel');
owl.owlCarousel({
    
    loop: true,
    
    startPosition: 0,
    items: 1,
    center: true,

    
responsive : {

    320 : {
        startPosition: 1,
        items: 3,
        margin: 20,
        
    },
   
    1200 : {
        startPosition: 1,
        items: 3,
       margin: 30,
       
        
    }, 
}

});

// Go to the previous item
$('.slider_btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// Go to the next item
$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


//menu icon
const navBtn = document.querySelector('.nav_toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    body.classList.toggle('lock');
}
