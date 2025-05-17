console.dir(document)

// swiper 2
let mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 1000,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: -30,
        stretch: 50,
        depth: 800,
        modifier: 0.5,
        slideShadows: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            effect: 'slide', 
            slidesPerView: 1, 
            centeredSlides: true, 
            loop: true, 
            autoplay: { 
                delay: 1000,
            },
            coverflowEffect: { 
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false,
            },
            navigation: { 
                enabled: false,
            },
        },
       
        500: {
            effect: 'coverflow', 
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 1000,
            },
            coverflowEffect: {
                rotate: -30,
                stretch: 50,
                depth: 800,
                modifier: 0.5,
                slideShadows: true,
            },
            navigation: { 
                enabled: true,
            },
        },
        
    },
});

