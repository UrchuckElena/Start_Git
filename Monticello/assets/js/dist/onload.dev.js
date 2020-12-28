"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  $(".header__hamburger").click(function () {
    $(".header__hamburger").toggleClass("is-active");
    $(".mobile-menu, .menu-shadow").toggleClass("opened");
  });
  $(".menu-shadow").click(function () {
    $(".header__hamburger").removeClass("is-active");
    $(".mobile-menu, .menu-shadow").removeClass("opened");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });
});
$(document).ready(function () {
  var slider = $('.slider__wrap').lightSlider({
    controls: false,
    autoplay: false,
    loop: true,
    item: 3,
    slideMargin: 30,
    responsive: [{
      breakpoint: 1170,
      settings: {
        item: 2,
        slideMove: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        item: 1,
        slideMove: 1,
        slideMargin: 0
      }
    }],
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  $('.slider__btn-prev').on('click', function () {
    slider.goToPrevSlide();
  });
  $('.slider__btn-next').on('click', function () {
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
$(document).ready(function () {
  $("#lightgallery").lightGallery();
});
var lazyLoadInstance = new LazyLoad({// Your custom settings go here
});
$(document).ready(function () {
  $('.menu__link').click(function () {
    if (!$(this).hasClass("active")) {
      $('.menu__link.active').removeClass("active");
      $(this).addClass("active");
    }
  });
  $("#first").click(function () {
    $('html, body').animate({
      scrollTop: $("#firstscreen").offset().top
    }, 2000);
  });
  $("#second").click(function () {
    $('html, body').animate({
      scrollTop: $("#whatwedo").offset().top
    }, 2000);
  });
  $("#third").click(function () {
    $('html, body').animate({
      scrollTop: $("#uncos").offset().top
    }, 2000);
  });
  $("#forth").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 2000);
  });
});
$(document).ready(function () {
  $('.mobile__link').click(function () {
    if (!$(this).hasClass("active")) {
      $('.mobile__link.active').removeClass("active");
      $(this).addClass("active");
    }
  });
  $("#one").click(function () {
    $('html, body').animate({
      scrollTop: $("#firstscreen").offset().top
    }, 2000);
  });
  $("#two").click(function () {
    $('html, body').animate({
      scrollTop: $("#whatwedo").offset().top
    }, 2000);
  });
  $("#three").click(function () {
    $('html, body').animate({
      scrollTop: $("#uncos").offset().top
    }, 2000);
  });
  $("#four").click(function () {
    $('html, body').animate({
      scrollTop: $("#gallery").offset().top
    }, 2000);
  });
  $("#five").click(function () {
    $('html, body').animate({
      scrollTop: $("#aboutus").offset().top
    }, 2000);
  });
  $("#six").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 2000);
  });
});
$(document).ready(function () {
  $('.first-screen__scroll').click(function () {
    $('html, body').animate({
      scrollTop: $("#whatwedo").offset().top
    }, 2000);
  });
});

var verticalSlider =
/*#__PURE__*/
function () {
  function verticalSlider() {
    _classCallCheck(this, verticalSlider);

    this.wraper = document.querySelector('.first-screen__slider-wrap');
    this.tabs = document.querySelector('.first-screen__slider-wrap-tabs');
    this.sliderList = document.querySelector('.first-screen__slider-wrap-menu');
    this.selectedTab = 0;
  }

  _createClass(verticalSlider, [{
    key: "init",
    value: function init() {
      var _this = this;

      _toConsumableArray(this.wraper.querySelectorAll('li')).forEach(function (fon, idx) {
        var $span = document.createElement('span');
        $span.classList.add('tab');
        if (idx === _this.selectedTab) $span.classList.add('active');

        _this.tabs.append($span);
      });

      _toConsumableArray(this.tabs.querySelectorAll('span')).forEach(function (tab, idx) {
        tab.addEventListener('click', function (event) {
          _this.selectedTab = idx;

          _this.movedOn();
        });
      });
    }
  }, {
    key: "movedOn",
    value: function movedOn() {
      var _this2 = this;

      var movedOn = _toConsumableArray(this.wraper.querySelectorAll('li'))[this.selectedTab].offsetTop;

      _toConsumableArray(this.sliderList.querySelectorAll('li')).forEach(function ($li) {
        $li.style.transform = "translateY(-".concat(movedOn, "px)");
      });

      _toConsumableArray(this.tabs.querySelectorAll('span')).forEach(function (span, idx) {
        if (_this2.selectedTab === idx) {
          span.classList.add('active');
        } else {
          span.classList.remove('active');
        }
      });
    }
  }]);

  return verticalSlider;
}();

var verticalSliderMenu = new verticalSlider();
verticalSliderMenu.init();

function initMap() {
  document.getElementById('map_img').remove();
  document.getElementById('map_link').remove();
  var map = L.map('map').setView([51.50827264339826, -0.075970759226247], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([51.50827264339826, -0.075970759226247]).addTo(map).bindPopup('Tower of London').openPopup();
}