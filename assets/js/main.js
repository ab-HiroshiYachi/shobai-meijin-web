// ==========================================================================
// main.js — 商売名人 コーポレートサイト
// ハンバーガーメニュー / FAQ開閉 / スクロールフェードイン（最小限のJS）
// ==========================================================================

(function () {
  "use strict";

  // ---------- ハンバーガーメニュー ----------
  var hamburger = document.querySelector(".js-hamburger");
  var nav = document.querySelector(".js-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ---------- FAQ開閉 ----------
  document.querySelectorAll(".js-faq-question").forEach(function (question) {
    question.addEventListener("click", function () {
      var item = question.closest(".js-faq-item");
      var isOpen = item.classList.toggle("is-open");
      question.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  // ---------- スクロールフェードイン ----------
  var fadeTargets = document.querySelectorAll(".js-fade");

  if ("IntersectionObserver" in window && fadeTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    fadeTargets.forEach(function (target) {
      observer.observe(target);
    });
  } else {
    fadeTargets.forEach(function (target) {
      target.classList.add("is-visible");
    });
  }
})();
