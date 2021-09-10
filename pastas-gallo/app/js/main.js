$(document).ready(function() {

    // document
    // search input
    $('#search-button').on("click", function() {
        if ($('.search-input').css('display') == 'none') {
            $('.search-input')
                .animate({ width: 'show' }, 500)
                .trigger('focus')
        } else {
            $('.search-input')
                .animate({ width: 'hide' }, 500);
        }
    });

    // burger menu
    $('.navbar-toggler').on("click", function() {
        if ($('.navbar-toggler').attr('aria-expanded') === 'true') {
            $('.line-one').addClass('line-one-toggle')
            $('.line-two').addClass('line-two-toggle')
            $('.navbar').addClass('burger-menu')
                .removeClass('navbar-small white-menu');
        } else {
            $('.line-one').removeClass('line-one-toggle')
            $('.line-two').removeClass('line-two-toggle')
            $('.navbar').removeClass('burger-menu')
                .addClass('navbar-small white-menu')
        }
    });

    $(window).resize(function() {
        if ($(window).width() >= 1024) {
            $('.navbar').removeClass('burger-menu')
            $('.navbar-toggler')
                .addClass('collapsed')
                .attr('aria-expanded', 'false')
                .first().click();
        };
    });

    //dropdown toggle
    $('.dropdown-toggle').on("click", function() {
        if ($('.dropdown-second').hasClass('show')) {
            $('.dropdown-toggle[aria-expanded=true]').addClass('drop-toggle')
        } else {
            $('.dropdown-toggle[aria-expanded=false]').removeClass('drop-toggle')
        }
    });

    $('.nav-drop.dropdown-toggle').on("click", function() {
        $('.first-drop>.dropdown-menu').css('transform', 'translateX(0%)')
    });

    $('.go-back').on("click", function() {
        $('.first-drop>.dropdown-menu').css('transform', 'translateX(-100%)')
    });

    // scroll
    $(window).on("scroll", function() {
        var scrolled = $(this).scrollTop();
        if (scrolled > 10) {
            $('.navbar').addClass('navbar-small white-menu')
        }
        if (scrolled <= 10 || $('.navbar-toggler').attr('aria-expanded') === 'true') {
            $('.navbar').removeClass('navbar-small white-menu');
        }
    });

    // dropdown
    $('.dropdown-menu a.first-item').on("click", function(e) {
        $(this).next('ul')
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
        pauseOnFocus: false,
        pauseOnHover: false,
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
        initialSlide: 8,
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
            $('.product-slider')
                .slick('slickGoTo', 0)
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

sr.reveal(`.top-reveal`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.product-slider,
            .bottom-reveal`, {
    origin: 'bottom',
})

sr.reveal(`.right-reveal`, {
    origin: 'right',
    interval: 100,
})

sr.reveal(`.left-reveal,
            .bottom-slider`, {
    origin: 'left',
    interval: 100,
})
