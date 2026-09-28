/* Sunshine v2. The site works with JavaScript off: real links, native <details> FAQ,
   mailto enquiry starters, and a no-JS menu that is always open on small screens.
   This file only (1) opens and closes the mobile menu, (2) auto-hides the header while
   scrolling down, and (3) marks the service in view in the services index. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) menu.setAttribute("data-open", "true");
      else menu.removeAttribute("data-open");
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !e.target.closest(".nav")) setOpen(false);
    });
    var mq = window.matchMedia("(min-width: 961px)");
    var onChange = function () { if (mq.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  // Auto-hide header: slide it away while scrolling down, bring it back on any scroll up.
  // Never hides near the top, while the mobile menu is open, or while focus is inside it.
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = window.scrollY, ticking = false;
    var setHidden = function (hide) {
      header.classList.toggle("is-hidden", hide);
      document.documentElement.classList.toggle("header-hidden", hide);
    };
    var update = function () {
      ticking = false;
      var y = window.scrollY, delta = y - lastY;
      var menuOpen = toggle && toggle.getAttribute("aria-expanded") === "true";
      var bar = document.querySelector(".utility");
      var threshold = (bar ? bar.offsetHeight : 0) + header.offsetHeight + 40;
      if (menuOpen || header.contains(document.activeElement) || y < threshold) {
        setHidden(false);
        lastY = y;
        return;
      }
      if (Math.abs(delta) < 8) return;
      setHidden(delta > 0);
      lastY = y;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    header.addEventListener("focusin", function () { setHidden(false); });
    if (toggle) toggle.addEventListener("click", function () { setHidden(false); });
  }

  // Services index: highlight the service currently in view.
  var links = document.querySelectorAll(".svc-nav a[href^='#']");
  if (links.length && "IntersectionObserver" in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = byId[en.target.id];
        if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-35% 0px -60% 0px" });
    document.querySelectorAll(".svc[id]").forEach(function (s) { io.observe(s); });
  }
})();
