/* Sunshine Mining & Crushing Solutions LLP - progressive enhancement only.
   The site works fully with this file absent: nav links are real <a>, the FAQ
   is native <details>, and the contact form is a native mailto form. */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var close = function () {
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.getAttribute('data-open') === 'true') {
        close();
        toggle.focus();
      }
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  }

  /* ---- Reveal on scroll (fail-safe: only arm if JS runs) ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function (el) { el.classList.add('reveal--armed'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Contact form: compose a mailto draft (no backend) ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Native fallback already targets a mailto action; JS builds a richer body.
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };
      var name = get('name');
      var email = get('email');
      var phone = get('phone');
      var subject = get('subject') || 'Website enquiry';
      var message = get('message');
      var to = form.getAttribute('data-mailto') || 'admin@sunshinellp.co.in';
      var bodyLines = [
        message, '', '---',
        'Name: ' + name,
        'Email: ' + email,
        phone ? 'Phone: ' + phone : ''
      ].filter(Boolean);
      var href = 'mailto:' + to +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));
      window.location.href = href;
      var note = document.getElementById('form-status');
      if (note) {
        note.textContent = 'Opening your email app with the message ready to send. ' +
          'If nothing happens, email us directly at ' + to + '.';
      }
    });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
