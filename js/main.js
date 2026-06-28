/* ========================================
   MAIN.JS — Shared scripts (nav, reveal, ticker)
   ======================================== */

/* ========================================
   TICKER — Défilement infini
   ======================================== */
(function initTicker() {
  var track = document.getElementById("tickerTrack");
  if (!track) return;

  var tickerItems = [
    "Donuts", "Crêpes au Chocolat", "Gaufres Belges",
    "Milkshakes", "Pancakes", "Ice Cream",
    "Nutella Crunch", "Framboise Intense"
  ];
  var html = "";
  /* Doubler le contenu pour le défilement infini */
  for (var r = 0; r < 2; r++) {
    for (var i = 0; i < tickerItems.length; i++) {
      html += '<span class="ticker__item">' +
                tickerItems[i] +
                '<span class="ticker__dot"></span>' +
              '</span>';
    }
  }
  track.innerHTML = html;
})();

/* ========================================
   NAVIGATION — Scroll / Hamburger
   ======================================== */
(function initNav() {
  var navbar = document.getElementById("navbar");
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");

  if (!navbar) return;

  /* Scroll → border visible */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* Hamburger toggle */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });

    /* Fermer le menu mobile au clic sur un lien */
    var mobileLinks = mobileMenu.querySelectorAll("a");
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener("click", function () {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }
})();

/* ========================================
   SCROLL REVEAL — IntersectionObserver
   ======================================== */
(function initReveal() {
  var els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger");
  if (!("IntersectionObserver" in window)) {
    /* Fallback pour navigateurs anciens */
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add("revealed");
    }
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    for (var j = 0; j < entries.length; j++) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("revealed");
        observer.unobserve(entries[j].target);
      }
    }
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  for (var k = 0; k < els.length; k++) {
    observer.observe(els[k]);
  }
})();

/* ========================================
   CTA COMMANDER — Placeholder
   ======================================== */
(function initCTA() {
  var navCta = document.getElementById("nav-cta-commander");
  var heroCta = document.getElementById("hero-cta-commander");

  if (navCta) {
    navCta.addEventListener("click", function () {
      alert("Commande via Glovo — Lien à venir !");
    });
  }
  if (heroCta) {
    heroCta.addEventListener("click", function (e) {
      e.stopPropagation(); /* prevent background slider click */
      alert("Commande via Glovo — Lien à venir !");
    });
  }
})();

/* ========================================
   HERO BACKGROUND SLIDER
   ======================================== */
(function initHeroSlider() {
  var slider = document.querySelector(".hero__slider");
  var slides = document.querySelectorAll(".hero__slide");
  var dots = document.querySelectorAll(".hero__dot");
  var progressBar = document.getElementById("heroProgressBar");

  if (!slides.length || !progressBar) return;

  var currentSlide = 0;
  var slideDuration = 6000; // 6 seconds per slide
  var progressInterval = 30; // Update progress bar every 30ms
  var elapsed = 0;
  var timer = null;

  function updateSlides(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    currentSlide = index;
  }

  function startTimer() {
    elapsed = 0;
    progressBar.style.width = "0%";
    clearInterval(timer);
    timer = setInterval(function () {
      elapsed += progressInterval;
      var pct = (elapsed / slideDuration) * 100;
      progressBar.style.width = Math.min(pct, 100) + "%";

      if (elapsed >= slideDuration) {
        nextSlide();
      }
    }, progressInterval);
  }

  function nextSlide() {
    var next = (currentSlide + 1) % slides.length;
    updateSlides(next);
    startTimer();
  }

  function goToSlide(index) {
    updateSlides(index);
    startTimer();
  }

  /* Clicks on dot indicators */
  for (var k = 0; k < dots.length; k++) {
    (function (index) {
      dots[index].addEventListener("click", function (e) {
        e.stopPropagation();
        goToSlide(index);
      });
    })(k);
  }

  /* Click on background slider to change photo */
  if (slider) {
    slider.addEventListener("click", function () {
      nextSlide();
    });
  }

  /* Start slider cycle */
  startTimer();
})();

/* ========================================
   BOUTIQUES STATUS DYNAMIQUE (OUVERT / FERMÉ)
   ======================================== */
(function initBoutiqueStatus() {
  var badges = document.querySelectorAll(".yoyo-hours__status-badge");
  if (!badges.length) return;

  function parseTimeToDecimal(timeStr) {
    var parts = timeStr.split(":");
    var hrs = parseInt(parts[0], 10);
    var mins = parseInt(parts[1], 10);
    return hrs + (mins / 60);
  }

  function checkStatus() {
    var now = new Date();
    // Get Tunis time (UTC+1). In JavaScript, Date local time depends on client.
    // Calculate standard Tunisian time (GMT+1) to be accurate for everyone.
    var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    var tunisTime = new Date(utc + (3600000 * 1)); // UTC + 1 hour
    var currentHrs = tunisTime.getHours();
    var currentMins = tunisTime.getMinutes();
    var currentDecimal = currentHrs + (currentMins / 60);

    for (var i = 0; i < badges.length; i++) {
      var badge = badges[i];
      var openStr = badge.getAttribute("data-open");
      var closeStr = badge.getAttribute("data-close");

      if (!openStr || !closeStr) continue;

      var openTime = parseTimeToDecimal(openStr);
      var closeTime = parseTimeToDecimal(closeStr);

      var isOpen = false;
      if (openTime < closeTime) {
        isOpen = (currentDecimal >= openTime && currentDecimal < closeTime);
      } else {
        isOpen = (currentDecimal >= openTime || currentDecimal < closeTime);
      }

      if (isOpen) {
        badge.textContent = "Ouvert";
        badge.className = "yoyo-hours__status-badge yoyo-hours__status-badge--open";
      } else {
        badge.textContent = "Fermé";
        badge.className = "yoyo-hours__status-badge yoyo-hours__status-badge--closed";
      }
    }
  }

  checkStatus();
  setInterval(checkStatus, 60000);
})();

/* ========================================
   THEME TOGGLER (DARK / LIGHT MODE)
   ======================================== */
(function initThemeToggler() {
  var togglers = document.querySelectorAll(".theme-toggle");
  if (!togglers.length) return;

  togglers.forEach(function (toggler) {
    toggler.addEventListener("click", function () {
      var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      var newTheme = (currentTheme === "dark") ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  });
})();


