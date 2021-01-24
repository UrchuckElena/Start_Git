$(document).ready(function() {
    // mobile menu & hamburger
    $(".header__hamburger").click(function() {
        $(".header__hamburger").toggleClass("is-active");
        $(".mobile-menu, .menu-shadow").toggleClass("opened");
    });

    $(".menu-shadow").click(function() {
        $(".header__hamburger").removeClass("is-active");
        $(".mobile-menu, .menu-shadow").removeClass("opened");
    });

    // header scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });

    // nav & mobile menu (smooth behavior)
    $("#mobile_menu a, #main_menu a").click(function(e) {
        e.preventDefault();
        if ($(this).parents("#mobile_menu").length != 0) {
            $("#hamburger")[0].click();
        }
        if ($(this).attr("href") == "#") {
            $("html, body").animate({ scrollTop: top }, 1500);
        } else {
            let top = $($(this).attr("href")).offset().top;
            $("html, body").animate({ scrollTop: top }, 1500);
        }
    });

    // smooth behavior
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    // slider
    let slider = $('.slider__wrap').lightSlider({
        controls: false,
        autoplay: false,
        loop: true,
        item: 1,
    });
    $('.slider__btn-prev').on('click', function() {
        slider.goToPrevSlide();
    });
    $('.slider__btn-next').on('click', function() {
        slider.goToNextSlide();
    });

    let slide = $('.slider__wrapper').lightSlider({
        controls: false,
        autoplay: false,
        loop: true,
        item: 3,
        slideMargin: 30,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0
                }
            }
        ],
        onSliderLoad: function(el) {
            let showActiveSlides = function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.src = entry.target.dataset.src;
                        observer.unobserve(entry.target);
                    }
                });
            };

            let imageWidth = el.find("li").outerWidth() + "px";

            let observer = new window.IntersectionObserver(showActiveSlides, {
                root: el.parent()[0],
                rootMargin: "0px " + imageWidth + " 0px " + imageWidth
            });

            el.find("li img").each(function() {
                observer.observe(this);
            });
        }
    });
    $('.slide__btn-prev').on('click', function() {
        slide.goToPrevSlide();
    });
    $('.slide__btn-next').on('click', function() {
        slide.goToNextSlide();
    });

    $("#lightgallery").lightGallery();

});

// lazy 
let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here

});

// map
function initMap() {
    document.getElementById('map_img').remove();
    document.getElementById('map_link').remove();
    const map = L.map('map').setView([51.50827264339826, -0.075970759226247], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.50827264339826, -0.075970759226247]).addTo(map)
        .bindPopup('Tower of London')
        .openPopup();
}

// scroll to top
let mybutton = document.getElementById("top");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// telegramm channel
const BOT_KEY = "1424289249:AAHFH1j9O0ax8j_rr7vMCANLZNfPhDHo-1Y";
const CHAT_ID = '-1001348934257';

$(document).ready(() => {
    $("#send").click(function(e) {
        let msg = $("#message").val(),
            name = $("#name").val(),
            email = $("#email").val();
        let msg_text = encodeURI("<b>Name: </b>" + name + "\n<b>Email: </b>" + email + "\n<b>Message:</b> <i>" + msg + "</i>");
        if (msg != "") {
            $.ajax({
                url: 'https://api.telegram.org/bot' + BOT_KEY + '/sendMessage',
                data: 'chat_id=' + CHAT_ID + '&parse_mode=html&text=' + msg_text,
                type: 'get',
                dataType: 'json',
                success: function(json) {
                    if (json.ok) {
                        $("#message").val('');
                    } else {
                        vanillaToast.show("Some error. Try again.")
                    }
                    console.log(json);
                },
                error: function(err) {
                    vanillaToast.show(err.description);
                }
            });
        } else {
            vanillaToast.show("Enter message text");
        }
    });
});