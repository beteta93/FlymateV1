///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



//flexslider
 $(window).load(function() {
    $('.flexslider').flexslider({
        controlNav: false
    });
  });




$(document).ready(function() {
    $(".owl-carousel").owlCarousel();

    // static navigationbar
    var changeStyle = $('.navigation');

    function scroll() {
        if ($(window).scrollTop() > 645) {
            changeStyle.addClass('navbar-fixed-top');

        } else {
            changeStyle.removeClass('navbar-fixed-top');
        }
    }

    document.onscroll = scroll;

    $('.visit-carousel').owlCarousel({
        nav: true,
        navText: false,
        dots: false,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.owl-carousel').trigger('refresh.owl.carousel');

});
