"use strict";

$(document).ready(function () {
  $(".header__hamburger").click(function () {
    $(".header__hamburger").toggleClass("is-active"), $(".mobile-menu, .menu-shadow").toggleClass("opened");
  }), $(".menu-shadow").click(function () {
    $(".header__hamburger").removeClass("is-active"), $(".mobile-menu, .menu-shadow").removeClass("opened");
  }), $(window).scroll(function () {
    $(window).scrollTop() > 100 ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled");
  }), $("#mobile_menu a, #main_menu a").click(function (e) {
    if (e.preventDefault(), 0 != $(this).parents("#mobile_menu").length && $("#hamburger")[0].click(), "#" == $(this).attr("href")) $("html, body").animate({
      scrollTop: top
    }, 1500);else {
      var _e = $($(this).attr("href")).offset().top;
      $("html, body").animate({
        scrollTop: _e
      }, 1500);
    }
  }), $('a[href^="#"').on("click", function () {
    var e = $(this).attr("href");
    return $("html, body").animate({
      scrollTop: $(e).offset().top
    }), !1;
  });
  var e = $(".slider__wrap").lightSlider({
    controls: !1,
    autoplay: !1,
    loop: !0,
    item: 1
  });
  $(".slider__btn-prev").on("click", function () {
    e.goToPrevSlide();
  }), $(".slider__btn-next").on("click", function () {
    e.goToNextSlide();
  });
  var t = $(".slider__wrapper").lightSlider({
    controls: !1,
    autoplay: !1,
    loop: !0,
    item: 3,
    slideMargin: 30,
    responsive: [{
      breakpoint: 1e3,
      settings: {
        item: 2,
        slideMove: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        item: 1,
        slideMove: 1,
        slideMargin: 0
      }
    }],
    onSliderLoad: function onSliderLoad(e) {
      var t = e.find("li").outerWidth() + "px",
          o = new window.IntersectionObserver(function (e) {
        e.forEach(function (e) {
          e.isIntersecting && (e.target.src = e.target.dataset.src, o.unobserve(e.target));
        });
      }, {
        root: e.parent()[0],
        rootMargin: "0px " + t + " 0px " + t
      });
      e.find("li img").each(function () {
        o.observe(this);
      });
    }
  });
  $(".slide__btn-prev").on("click", function () {
    t.goToPrevSlide();
  }), $(".slide__btn-next").on("click", function () {
    t.goToNextSlide();
  }), $("#lightgallery").lightGallery();
});
var lazyLoadInstance = new LazyLoad({});

function initMap() {
  document.getElementById("map_img").remove(), document.getElementById("map_link").remove();
  var e = L.map("map").setView([51.50827264339826, -.075970759226247], 16);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(e), L.marker([51.50827264339826, -.075970759226247]).addTo(e).bindPopup("Tower of London").openPopup();
}

var mybutton = document.getElementById("top");

function scrollFunction() {
  document.body.scrollTop > 450 || document.documentElement.scrollTop > 450 ? mybutton.style.display = "block" : mybutton.style.display = "none";
}

function topFunction() {
  document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
  scrollFunction();
};

var BOT_KEY = "1424289249:AAHFH1j9O0ax8j_rr7vMCANLZNfPhDHo-1Y",
    CHAT_ID = "-1001348934257";
$(document).ready(function () {
  $("#send").click(function (e) {
    var t = $("#message").val(),
        o = $("#name").val(),
        n = $("#email").val(),
        l = encodeURI("<b>Name: </b>" + o + "\n<b>Email: </b>" + n + "\n<b>Message:</b> <i>" + t + "</i>");
    "" != t ? $.ajax({
      url: "https://api.telegram.org/bot" + BOT_KEY + "/sendMessage",
      data: "chat_id=" + CHAT_ID + "&parse_mode=html&text=" + l,
      type: "get",
      dataType: "json",
      success: function success(e) {
        e.ok ? $("#message").val("") : vanillaToast.show("Some error. Try again."), console.log(e);
      },
      error: function error(e) {
        vanillaToast.show(e.description);
      }
    }) : vanillaToast.show("Enter message text");
  });
});