const toggler = document.querySelector('.header__toggler')
const nav = document.querySelector('nav')

toggler.addEventListener('click' , function (){
    toggler.classList.toggle('active')
    nav.classList.toggle('active')
})

const popupClose = document.querySelector('.product-spotlight__popup-close')
const popup = document.querySelector('.product-spotlight__popup')
const popupOpen = document.querySelector('.product-spotlight__video-button')
const popupVideo = document.querySelector('.product-spotlight__popup-video')
const body = document.querySelector('body')

popupOpen.addEventListener('click' , function (){
    popup.classList.add('show')
    body.style.overflow = 'hidden'
})

popupClose.addEventListener('click' , function (){
    popup.classList.remove('show')
    body.style.overflow = 'auto'
    popupVideo.pause()
})

$(document).ready(function (){
    $(".slider").slick({
        dots:true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots:false,
                }
            }
        ]
    });
});