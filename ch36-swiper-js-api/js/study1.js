document.addEventListener("DOMContentLoaded",function(){
    const swiper1 = new Swiper('.station', {
        direction:'vertical',
        loop:true,
        slidesPerView:2,
        spaceBetween:20,
        speed:1000,
        pagination: {
            el: '.swiper-pagination',
        }
    })

    const swiper2 = new Swiper('.station2', {
        direction:'horizontal',
        loop:true,
        slidesPerView:2,
        spaceBetween:20,
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    })
})
