const openMenu = document.getElementById('open-menu')
const body = document.querySelector('body')
const mobileMenu = document.querySelector('.mobile-list')
const linkEls = document.querySelectorAll('.link')


mobileMenu.style.display = 'none'

openMenu.onclick = () => {
    if(openMenu.classList.contains('open')){ //close header menu
        openMenu.classList.remove('open')
        body.classList.remove('no-scroll')
        mobileMenu.style.display = 'none'
     
    } else { //open header menu
        openMenu.classList.add('open')
        body.classList.add('no-scroll')
        mobileMenu.style.display = 'block'
    }
}

linkEls.forEach(linkEl => {
    linkEl.onclick = () => {
        const elementId = linkEl.id;
        const elements = document.querySelectorAll('.display');

        // Remove 'display' class from all elements
        elements.forEach(element => {
            element.classList.remove('display');
        });

        // Add 'display' class to the clicked element
        const element = document.querySelector(`.${elementId}`);
        element.classList.add('display');

    };
});



let count = 1;

setInterval(function(){
    let currentSlide = document.querySelector('.slide' + count);
    let previousSlide = document.querySelector('.slide-image.active-slide');

    if (previousSlide){
        previousSlide.classList.remove('active-slide')
    }

    currentSlide.classList.add('active-slide')
    count++;
    if (count > 3) {
        count = 1
    }
}, 5000)