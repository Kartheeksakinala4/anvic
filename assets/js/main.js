/* ANVIC — site interactions */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Highlight active nav link
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Scroll reveal
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.07 + "s";
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Navbar shadow once the page scrolls
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("scrolled", window.scrollY > 50);
      },
      { passive: true }
    );
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Data-rain canvas in the hero
  var canvas = document.getElementById("matrixCanvas");
  if (canvas && !reducedMotion) {
    var ctx = canvas.getContext("2d");
    var CHARS = "01ANVIC#$<>/\\|[]{}";
    var FS = 13;
    var drops = [];

    var resize = function () {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      var columns = Math.floor(canvas.width / FS);
      drops = [];
      for (var i = 0; i < columns; i++) {
        drops.push((Math.random() * canvas.height) / FS | 0);
      }
    };

    var draw = function () {
      ctx.fillStyle = "rgba(247, 249, 252, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = FS + "px monospace";
      for (var i = 0; i < drops.length; i++) {
        var ch = CHARS[(Math.random() * CHARS.length) | 0];
        var alpha = Math.random() > 0.85 ? 0.4 : 0.14;
        ctx.fillStyle = "rgba(8, 145, 178, " + alpha + ")";
        ctx.fillText(ch, i * FS, drops[i] * FS);
        if (drops[i] * FS > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    setInterval(draw, 60);
  }

  // Animated stat counters
  var counters = document.querySelectorAll("[data-target]");
  var setFinal = function (el) {
    el.textContent =
      (el.getAttribute("data-prefix") || "") +
      el.getAttribute("data-target") +
      (el.getAttribute("data-suffix") || "");
  };
  if (reducedMotion || !("IntersectionObserver" in window)) {
    counters.forEach(setFinal);
  } else if (counters.length) {
    var animateCount = function (el) {
      var target = parseInt(el.getAttribute("data-target"), 10);
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1600;
      var start = performance.now();
      var step = function (now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.7 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  }
})();
