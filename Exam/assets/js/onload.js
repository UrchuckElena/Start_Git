$(document).ready(function() {
    $(".header__hamburger").click(function() {
        $(".header__hamburger").toggleClass("is-active");
        $(".mobile-menu, .menu-shadow").toggleClass("opened");
    });

    $(".menu-shadow").click(function() {
        $(".header__hamburger").removeClass("is-active");
        $(".mobile-menu, .menu-shadow").removeClass("opened");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });
});