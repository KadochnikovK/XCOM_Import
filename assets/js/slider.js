const topicsSwiper = new Swiper(".topics__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    speed: 600,

    breakpoints: {
        320: {
            slidesPerView: 1.05,

        },
        640: {
            slidesPerView: 2,

        },
        1000: {
            slidesPerView: 3,

        },
        1300: {
            slidesPerView: 4,

        },
        1500: {
            slidesPerView: 5,

        },
    },
});

const footerSwiper = new Swiper(".footer__slider", {

    spaceBetween: 20,


    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    touchRatio: 0.6,
    touchAngle: 45,
    speed: 600,


    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,

        },
        1000: {
            slidesPerView: 3,
        },
    },
});

const partners = new Swiper(".partners-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        640: {
            slidesPerView: 2,
        },

        920: {
            slidesPerView: 3,
        },

        1300: {
            slidesPerView: 4,
        },

        1600: {
            slidesPerView: 5,
        },
    },

    loop: false,

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".partners-swiper .swiper-pagination",
        clickable: true,
    },

    grabCursor: true,
});

const infopartners = new Swiper(".infopartners-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        640: {
            slidesPerView: 2,
        },

        920: {
            slidesPerView: 3,
        },

        1300: {
            slidesPerView: 4,
        },

        1600: {
            slidesPerView: 5,
        },
    },

    loop: false,

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".infopartners-swiper .swiper-pagination",
        clickable: true,
    },

    grabCursor: true,
});

const speakers = new Swiper(".speakers-swiper", {
    spaceBetween: 20,

    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },

        920: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },

    loop: true,

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".speakers-swiper .swiper-pagination",
        clickable: true,
    },
});


const photos = new Swiper(".photos-swiper", {
    spaceBetween: 20,
    breakpoints: {

        320: {
            slidesPerView: 1,

            slidesPerGroup: 1,

        },


        920: {
            slidesPerView: 2,

            slidesPerGroup: 2,

        },
    },

    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".photos-swiper .swiper-pagination",
        clickable: true,
    },

});

