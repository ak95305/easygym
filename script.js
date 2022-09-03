// AOS
AOS.init();




// Hamburger
let hamIcon = document.querySelector('.hamburger .center');
let navMenu = document.querySelector('.navbar-mob');
hamIcon.addEventListener('click', ()=>{
    hamIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});






// Add Header Class After Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".nav-bar").addClass("aft-scroll");
    }
    else{
        $(".nav-bar").removeClass("aft-scroll");
    }
});
