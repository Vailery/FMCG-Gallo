$(document).ready(function() {

    // document
    // search input
    $('#search-button').on("click", function() {
        if ($('.search-input').css('display') == 'none') {
            $('.search-input')
                .animate({ width: 'show' }, 500)
                .focus()
        } else {
            $('.search-input')
                .animate({ width: 'hide' }, 500);
        }
    });

    // scroll
    $(window).on("scroll", function() {
        var scrolled = $(this).scrollTop();
        if (scrolled > 1) {
            $('.navbar').addClass('navbar-small white-menu')
        }
        if (scrolled <= 1) {
            $('.navbar').removeClass('navbar-small white-menu');
        }
    });

    // dropdown
    $('.dropdown-menu a.first-item').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    // top slider
    $('.top-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        easing: 'ease',
        pauseOnDotsHover: true,
        touchThreshold: 3
    });

    // product slider
    $('.product-slider').slick({
        autoplay: true,
        infinite: false,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        easing: 'ease',
        speed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchThreshold: 5,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        variableWidth: true,
        initialSlide: 18,
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false
            }
        }]
    })

    // for product slider
    $('.product-slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide == 19) {
            $('.product-slider').slick('slickGoTo', 0)
                .slick('slickSetOption', {
                    initialSlide: 0,
                    autoplay: true
                }, true);
        }
    })

    // bottom slider
    $('.bottom-slider').slick({
        autoplay: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        easing: 'ease',
        speed: 300,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchThreshold: 5,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    })
})

// scroll reveal animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800
})

// sr.reveal(`.home__data, .home__social-link, .home__info, 
//            .discover__container, 
//            .experience__data, .experience__overlay,
//            .place__card,
//            .sponsor__content,
//            .footer__data, .footer__rights`, {
//     origin: 'top',
//     interval: 100,
// })

// sr.reveal(`.title`, {
//     origin: 'right',
//     interval: 100,
// })

// sr.reveal(`.about__img-overlay, 
//            .video__content,
//            .subscribe__form`, {
//     origin: 'right',
//     interval: 100,
// })
