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

$(document).ready(function() {
    let slider = $('.slider__wrap').lightSlider({
        controls: false,
        autoplay: false,
        loop: true,
        item: 3,
        slideMargin: 30,
        responsive: [{
                breakpoint: 1170,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 1024,
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
    $('.slider__btn-prev').on('click', function() {
        slider.goToPrevSlide();
    });
    $('.slider__btn-next').on('click', function() {
        slider.goToNextSlide();
    });

    /*
    $('.first-screen__slider-wrap-menu').lightSlider({
        controls: false,
        auto: true,
        vertical: true,
        dots: false,
        loop: true,
        item: 1,
        pause: 3000,
        speed: 400,
        slideMargin: 0
    });
    */
});


$(document).ready(function() {
    $("#lightgallery").lightGallery();
});


let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here

});

$(document).ready(function() {
    $('.menu__link').click(function() {
        if (!$(this).hasClass("active")) {
            $('.menu__link.active').removeClass("active");
            $(this).addClass("active");
        }
    });

    $("#first").click(function() {
        $('html, body').animate({
            scrollTop: $("#firstscreen").offset().top
        }, 2000);
    });
    $("#second").click(function() {
        $('html, body').animate({
            scrollTop: $("#whatwedo").offset().top
        }, 2000);
    });
    $("#third").click(function() {
        $('html, body').animate({
            scrollTop: $("#uncos").offset().top
        }, 2000);
    });
    $("#forth").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
});

$(document).ready(function() {
    $('.mobile__link').click(function() {
        if (!$(this).hasClass("active")) {
            $('.mobile__link.active').removeClass("active");
            $(this).addClass("active");
        }
    });

    $("#one").click(function() {
        $('html, body').animate({
            scrollTop: $("#firstscreen").offset().top
        }, 2000);
    });
    $("#two").click(function() {
        $('html, body').animate({
            scrollTop: $("#whatwedo").offset().top
        }, 2000);
    });
    $("#three").click(function() {
        $('html, body').animate({
            scrollTop: $("#uncos").offset().top
        }, 2000);
    });
    $("#four").click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 2000);
    });
    $("#five").click(function() {
        $('html, body').animate({
            scrollTop: $("#aboutus").offset().top
        }, 2000);
    });
    $("#six").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });
});

$(document).ready(function() {
    $('.first-screen__scroll').click(function() {
        $('html, body').animate({
            scrollTop: $("#whatwedo").offset().top
        }, 2000);
    });
});

class verticalSlider {
    constructor() {
        this.wraper = document.querySelector('.first-screen__slider-wrap');
        this.tabs = document.querySelector('.first-screen__slider-wrap-tabs');
        this.sliderList = document.querySelector('.first-screen__slider-wrap-menu');
        this.selectedTab = 0;
    }
    init() {
        [...this.wraper.querySelectorAll('li')].forEach((fon, idx) => {
            const $span = document.createElement('span');
            $span.classList.add('tab');
            if (idx === this.selectedTab) $span.classList.add('active');
            this.tabs.append($span);
        });
        [...this.tabs.querySelectorAll('span')].forEach((tab, idx) => {
            tab.addEventListener('click', (event) => {
                this.selectedTab = idx;
                this.movedOn();
            });
        });

    }
    movedOn() {
        const movedOn = [...this.wraper.querySelectorAll('li')][this.selectedTab].offsetTop;
        [...this.sliderList.querySelectorAll('li')].forEach(($li) => {
            $li.style.transform = `translateY(-${movedOn}px)`;
        });
        [...this.tabs.querySelectorAll('span')].forEach((span, idx) => {
            if (this.selectedTab === idx) {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        })
    }
}

const verticalSliderMenu = new verticalSlider();
verticalSliderMenu.init();


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