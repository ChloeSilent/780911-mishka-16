! function (e, t) {
  "function" == typeof define && define.amd ? define([], function () {
    return e.svg4everybody = t()
  }) : "object" == typeof exports ? module.exports = t() : e.svg4everybody = t()
}(this, function () {
  function g(e, t) {
    if (t) {
      var n = !e.getAttribute("viewBox") && t.getAttribute("viewBox"),
        i = document.createDocumentFragment(),
        r = t.cloneNode(!0);
      for (n && e.setAttribute("viewBox", n); r.childNodes.length;) i.appendChild(r.firstChild);
      e.appendChild(i)
    }
  }

  function l(e) {
    e.onreadystatechange = function () {
      if (4 === e.readyState) {
        var t = document.createElement("x");
        t.innerHTML = e.responseText, e.s.splice(0).map(function (e) {
          g(e[0], t.querySelector("#" + e[1].replace(/(\W)/g, "\\$1")))
        })
      }
    }, e.onreadystatechange()
  }
  return function (e) {
    e = e || {};
    var d = document.getElementsByTagName("use"),
      u = "shim" in e ? e.shim : /\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent) || (navigator.userAgent.match(/AppleWebKit\/(\d+)/) || [])[1] < 537,
      c = e.validate,
      f = window.requestAnimationFrame || setTimeout,
      m = {};
    u && function e() {
      for (var t; t = d[0];) {
        var n = t.parentNode;
        if (n && /svg/i.test(n.nodeName)) {
          var i = t.getAttribute("xlink:href");
          if (u && (!c || c(i, n, t))) {
            var r = i.split("#"),
              o = r[0],
              a = r[1];
            if (n.removeChild(t), o.length) {
              var s = m[o] = m[o] || new XMLHttpRequest;
              s.s || (s.s = [], s.open("GET", o), s.send()), s.s.push([n, a]), l(s)
            } else g(n, document.getElementById(a))
          }
        }
      }
      f(e, 17)
    }()
  }
});
