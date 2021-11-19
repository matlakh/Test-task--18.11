const matches_swiper = new Swiper('.results__matches', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 40,
    pagination: {
        el: ".matches__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".matches__nav--right",
        prevEl: ".matches__nav--left",
    },
    breakpoints: {
        1580: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
        },
        1260: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 65,
        },
        1080: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 54,
        },
        870: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 200,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 100,
        }
    }
})
const battles_swiper = new Swiper('.results__battles', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 25,
    pagination: {
        el: ".battles__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".battles__nav--right",
        prevEl: ".battles__nav--left",
    },
    breakpoints: {
        1580: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
        },
        1260: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 65,
        },
        1080: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 54,
        },
        870: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 200,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 100,
        }
    }
})