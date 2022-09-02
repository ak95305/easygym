// AOS
AOS.init();




// Hamburger
let hamIcon = document.querySelector('.hamburger .center');
hamIcon.addEventListener('click', ()=>{
    hamIcon.classList.toggle('active');
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
