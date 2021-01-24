"use strict";

(function () {
  "use strict";

  var e = function () {
    function e() {
      this.queue = new n(), this.cancellationTokens = [], this.element = null;
    }

    var i = {
      "default": {
        className: "default",
        fadeDuration: 400,
        fadeInterval: 16,
        duration: 2e3,
        closeButton: !1,
        immediately: !1
      },
      success: {
        className: "success"
      },
      info: {
        className: "info"
      },
      warning: {
        className: "warning"
      },
      error: {
        className: "error",
        duration: 3e3,
        closeButton: !0
      }
    };

    for (var a in e.prototype.initElement = function (e) {
      var t = document.createElement("div"),
          n = document.createElement("div"),
          a = document.createElement("div"),
          l = document.createElement("span");
      t.setAttribute("id", "vanilla-toast-container"), n.setAttribute("id", "vanilla-toast"), a.setAttribute("id", "vanilla-toast-text"), l.setAttribute("id", "vanilla-toast-close-button"), l.innerHTML = "&#10006;", n.appendChild(a), n.appendChild(l), t.appendChild(n), e ? document.getElementById(seletor).appendChild(containter) : document.body.appendChild(t), this.element = {
        container: t,
        toastBox: n,
        text: a,
        closeButton: l
      }, o(this, i["default"]);
    }, e.prototype.cancel = function () {
      this.cancellationTokens.length && this.cancellationTokens[0].cancel();
    }, e.prototype.cancelAll = function () {
      for (var e = this.cancellationTokens.length, t = 0; t < e; ++t) {
        this.cancellationTokens[e - t - 1].cancel();
      }
    }, e.prototype.show = function (e, n, a) {
      var s = this;
      s.element || s.initElement(), n || (n = {}), n.immediately && s.cancelAll();
      var c = new t();
      return s.queue.enqueue(function (t) {
        var u = n.fadeDuration || i["default"].fadeDuration,
            r = n.fadeInterval || i["default"].fadeInterval,
            f = Math.min(r / u, 1),
            d = n.duration || i["default"].duration;
        s.element.closeButton.style.display = n.closeButton ? "inline" : "none", s.element.text.innerHTML = e;
        var p = s.element.toastBox.style;
        p.opacity = 0, p.display = "inline-block", o(s, n);

        var m = null,
            h = function h() {
          m = null, s.element.toastBox.removeEventListener("click", v), function (e, t, n, a) {
            t || (t = {});
            var o = t.fadeDuration || i["default"].fadeDuration,
                s = t.fadeInterval || i["default"].fadeInterval,
                c = Math.min(s / o, 1),
                u = e.element.toastBox.style;
            u.opacity = 1, l(u, -c, s, n, function () {
              u.display = "none", a && a();
            });
          }(s, n, c, function () {
            a && a(), s.cancellationTokens.shift().dispose(), t();
          });
        },
            v = function v() {
          m && (clearTimeout(m), h());
        };

        l(p, f, r, c, function () {
          s.element.toastBox.addEventListener("click", v), c.isCancellationRequested ? h() : (m = setTimeout(h, d), c.register(function () {
            v();
          }));
        });
      }), s.cancellationTokens.push(c), s;
    }, i) {
      !function (t) {
        e.prototype[t] = function (e, n, a) {
          for (var o in n || (n = {}), i[t]) {
            void 0 === n[o] && (n[o] = i[t][o]);
          }

          return this.show(e, n, a);
        };
      }(a);
    }

    function o(e, t) {
      e.element.toastBox.className = t.className || i["default"].className;
    }

    function l(e, t, n, i, a) {
      !function o() {
        if (i.isCancellationRequested) return e.opacity = t < 0 ? 0 : 1, void (a && a());
        if (e.opacity = Number(e.opacity) + t, t < 0 && e.opacity < 0) a && a();else if (t > 0 && e.opacity >= 1) a && a();else {
          var l = setTimeout(function () {
            l = null, o();
          }, n);
          i.register(function () {
            l && (clearTimeout(l), l = null, a && a());
          });
        }
      }();
    }

    return e;
  }(),
      t = function () {
    function e() {
      this.isCancellationRequested = !1, this.cancelCallbacks = [];
    }

    return e.prototype.cancel = function () {
      this.isCancellationRequested = !0;

      for (var e = this.cancelCallbacks.slice(); e.length;) {
        e.shift()();
      }
    }, e.prototype.register = function (e) {
      this.cancelCallbacks.push(e);
    }, e.prototype.dispose = function () {
      for (; this.cancelCallbacks.length;) {
        this.cancelCallbacks.shift();
      }
    }, e;
  }(),
      n = function () {
    function e() {
      this.queue = [], this.isExecuting = !1;
    }

    return e.prototype.enqueue = function (e) {
      this.queue.push(e), function e(t) {
        if (t.isExecuting) return;
        var n = t.queue.shift();
        if (!n) return;
        t.isExecuting = !0;
        n(function () {
          t.isExecuting = !1, e(t);
        });
      }(this);
    }, e;
  }();

  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = new e()), exports.vanillaToast = new e()) : this.vanillaToast = new e();
}).call(void 0);