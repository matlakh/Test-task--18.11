const swiper = new Swiper('.header__swiper', {
    loop: true,
    pagination: {
        el: '.header__pagination',
        type: 'bullets',
        clickable: true
    },
    hashNavigation: {
        watchState: true,
    },
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
});