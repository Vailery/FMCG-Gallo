$(document).ready(function() {
    $('.top-slider').slick({
        arrows: false,
        dots: true,
        easing: 'ease',
        autoplay: false,
        pauseOnDotsHover: true,
        touchThreshold: 3
    });

    //включить autoplay
    $('.product-slider').slick({
        infinite: false,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        easing: 'ease',
        speed: 2000,
        autoplay: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        touchThreshold: 5,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        variableWidth: true,
        initialSlide: 8
            //убрать стрелочки на 1023
    })

    $('.product-slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide == 19) {
            $('.product-slider').slick('slickGoTo', 0);
        }
    })

    $('.bottom-slider').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        easing: 'ease',
        speed: 300,
        // autoplay: true,
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
