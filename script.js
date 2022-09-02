// AOS
AOS.init();




// Hamburger
let hamIcon = document.querySelector('.hamburger .center');
hamIcon.addEventListener('click', ()=>{
    hamIcon.classList.toggle('active');
});