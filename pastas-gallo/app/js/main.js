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
        pauseOnHover: true,
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

            // currentSlide = 0;
            // $('.product-slider').slick('setOption', 'slidesToScroll', 1, true);
            // $('.product-slider').slick('slickPlay')
            // $('.product-slider').slick('slickNext');
        }
        // if (currentSlide == 0) {
        //     $('.product-slider').slick('setOption', 'autoplay', false, false);
        //     $('.product-slider').slick('setOption', 'initialSlide', 0, true);
        //     $('.product-slider').slick('setOption', 'autoplay', true, true);

        // }

        // $('.product-slider').slick('slickNext');
        // if ($('.product-slider').slick('slickPause')) {
        //     $('.product-slider').slick('slickPlay')
        //         // $('.product-slider').slick('setOption', 'autoplay', true, true);

        // }
    })

})
