$(document).ready(function() {
    $('.top-slider').slick({
        // autoplay: true,
        arrows: false,
        dots: true,
        easing: 'ease',
        pauseOnDotsHover: true,
        touchThreshold: 3
    });

    $('.product-slider').slick({
        // autoplay: true,
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
        initialSlide: 8,
        responsive: [{
            breakpoint: 1023,
            settings: {
                arrows: false
            }
        }]
    })

    $('.product-slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide == 19) {
            $('.product-slider').slick('slickGoTo', 0);
        }
    })

    $('.bottom-slider').slick({
        // autoplay: true,
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
