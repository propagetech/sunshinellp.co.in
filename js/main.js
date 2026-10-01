/* Sunshine Mining & Crushing Solutions LLP: classic site.
   Progressive enhancement only. With JavaScript off the menu is always open on small
   screens, SERVICES is a plain link, and the contact form posts a native mailto draft.
   This file (1) opens and closes the mobile menu and the services submenu, and
   (2) turns the contact form into a tidy, ready-to-send email in the visitor's own app. */
(function () {
  "use strict";

  // ---- Mobile menu ------------------------------------------------------------
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-menu");
  var setNav = function (open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) nav.setAttribute("data-open", "true");
    else nav.removeAttribute("data-open");
  };
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    var mq = window.matchMedia("(min-width: 980px)");
    var onChange = function () { if (mq.matches) setNav(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  // ---- Services submenu (hover and focus are handled in CSS) -------------------
  var subToggle = document.querySelector(".sub-toggle");
  var sub = document.getElementById("sub-services");
  var setSub = function (open) {
    if (!subToggle || !sub) return;
    subToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) sub.setAttribute("data-open", "true");
    else sub.removeAttribute("data-open");
  };
  if (subToggle && sub) {
    subToggle.addEventListener("click", function () {
      sub.removeAttribute("data-closed");
      setSub(subToggle.getAttribute("aria-expanded") !== "true");
    });
    // After Escape, keep the menu shut while focus stays on the toggle; reset once focus leaves.
    subToggle.parentNode.addEventListener("focusout", function (e) {
      if (!subToggle.parentNode.contains(e.relatedTarget)) sub.removeAttribute("data-closed");
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (sub && subToggle && subToggle.parentNode.contains(document.activeElement)) {
      var wasOpen = subToggle.getAttribute("aria-expanded") === "true" || sub.matches(":focus-within") || window.getComputedStyle(sub).display !== "none";
      setSub(false); sub.setAttribute("data-closed", "true"); subToggle.focus();
      if (wasOpen) return;
    }
    if (toggle && toggle.getAttribute("aria-expanded") === "true") { setNav(false); toggle.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".site-header")) { setSub(false); setNav(false); }
  });
  if (nav) {
    nav.addEventListener("click", function (e) {
      // Close the mobile menu after following an in-page link (e.g. a services anchor).
      if (e.target.closest(".submenu a, .nav-links > li > a")) window.setTimeout(function () { setNav(false); setSub(false); }, 250);
    });
  }

  // ---- Contact form: compose a mailto draft (no backend, nothing stored) -------
  document.querySelectorAll("form.contact-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = function (name) {
        var el = form.elements[name];
        return el ? String(el.value || "").trim() : "";
      };
      var name = val("name"), email = val("email"), phone = val("phone"), message = val("message");
      if (!email && !phone) {
        window.alert("Please enter your email or phone no.");
        return;
      }
      var to = form.getAttribute("data-mailto");
      var cc = form.getAttribute("data-cc");
      var subject = "Website enquiry" + (name ? " from " + name : "");
      var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\n" + message + "\n";
      var href = "mailto:" + to + "?" + (cc ? "cc=" + encodeURIComponent(cc) + "&" : "") +
        "subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = href;
    });
  });
})();
