// Hamburger
let hamIcon = document.querySelector('.hamburger .center');
let navMenu = document.querySelector('.navbar-mob');
hamIcon.addEventListener('click', () => {
    hamIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});






// Add Header Class After Scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".nav-bar").addClass("aft-scroll");
    }
    else {
        $(".nav-bar").removeClass("aft-scroll");
    }
});




// Animation With Scroll
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('resize scroll', function () {
    // if ($('.qr-sec').isInViewport()) {
        // console.log($(window).scrollTop()-1300);
        // if($(window).scrollTop() > $('.qr-sec').offset().top){
        // console.log($('.qr-sec').offset().top);
        // }

        mV = $(window).scrollTop()*1.2 -  $('.qr-sec').offset().top;
        
        if (mV <= 0) {
            $('.qr-img').css('margin-left', mV);
        } else if(mV > 0){
            $('.qr-img').css('margin-left', 0);
        }
        console.log($('.qr-img').css('margin-left'));


    // }



    // if ($('.retain-sec').isInViewport()) {


    //     // console.log($('#retain-svg')[0]);
    //     if(!$('#retain-svg > svg')[0] && $(window).scrollTop() > $('.retain-sec').offset().top-150){
    //         // Retain Client SVG
    //         var animation = bodymovin.loadAnimation({
    //             container: document.getElementById('retain-svg'), // Required
    //             path: 'assets/svg-json/data.json', // Required
    //             renderer: 'svg', // Required
    //             loop: false, // Optional
    //             autoplay: true, // Optional
    //         })
    //         // console.log(document.querySelectorAll('#retain-svg svg'));
    //     }
    // }

});







// AOS
AOS.init();




(function () {

    var youtube = document.querySelectorAll(".tuts-img");

    for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };

})();



// Dropdowns Nav
let dropDown = document.querySelectorAll('.drop-down, .drop-down a');
let subMenu = document.querySelector('.sub-menu-holder');

dropDown.forEach(item =>{
    item.addEventListener('mouseover', ()=>{
        subMenu.classList.add('active');
    });
    item.addEventListener('mouseout', ()=>{
        subMenu.classList.remove('active');
    });
});