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
   CTA COMMANDER — Modal Options & Geolocation
   ======================================== */
var YOYO_STORES = [
  { name: "Monastir - YOYO", lat: 35.7725, lng: 10.8250, url: "https://www.glovoapp.com/" },
  { name: "Mrezga - Yoyo", lat: 36.4350, lng: 10.7000, url: "https://www.glovoapp.com/" },
  { name: "Yasmine Hammamet - YOYO PREMIUM", lat: 36.3740, lng: 10.5410, url: "https://glovoapp.com/en/tn/nabeul-hammamet/stores/yoyo-food-hammamet-nbl" },
  { name: "L'Aouina - Pâtisserie Yoyo", lat: 36.8440, lng: 10.2330, url: "https://www.glovoapp.com/" },
  { name: "Lac 1 - YOYO FOOD", lat: 36.8370, lng: 10.2450, url: "https://www.glovoapp.com/" },
  { name: "Sidi Bou Said - YOYO FOOD", lat: 36.8585, lng: 10.3325, url: "https://glovoapp.com/en/tn/tunis/stores/yoyo-tis" },
  { name: "Ariana - Yoyo food", lat: 36.8485, lng: 10.1652, url: "https://www.glovoapp.com/" },
  { name: "Le Bardo - YOYO food", lat: 36.8132, lng: 10.1339, url: "https://www.glovoapp.com/" },
  { name: "Boumhel - Yoyo Food", lat: 36.7340, lng: 10.3110, url: "https://glovoapp.com/en/tn/tunis/stores/yoyo-food-boumhal-tis" }
];

function showOrderModal() {
  var modal = document.getElementById("orderModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "orderModal";
    modal.className = "order-modal";
    modal.innerHTML = 
      '<div class="order-modal__overlay" onclick="document.getElementById(\'orderModal\').style.display=\'none\'"></div>' +
      '<div class="order-modal__content">' +
        '<button class="order-modal__close" onclick="document.getElementById(\'orderModal\').style.display=\'none\'">&times;</button>' +
        '<h3 class="order-modal__title">Choisissez votre boutique</h3>' +
        '<div class="order-modal__options">' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">Monastir - YOYO</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">Mrezga - Yoyo</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://glovoapp.com/en/tn/nabeul-hammamet/stores/yoyo-food-hammamet-nbl\', \'_blank\')">Yasmine Hammamet - YOYO PREMIUM</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">L\'Aouina - Pâtisserie Yoyo</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">Lac 1 - YOYO FOOD</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://glovoapp.com/en/tn/tunis/stores/yoyo-tis\', \'_blank\')">Sidi Bou Said - YOYO FOOD</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">Ariana - Yoyo food</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://www.glovoapp.com/\', \'_blank\')">Le Bardo - YOYO food</button>' +
          '<button class="btn-outline order-modal__btn" onclick="window.open(\'https://glovoapp.com/en/tn/tunis/stores/yoyo-food-boumhal-tis\', \'_blank\')">Boumhel - Yoyo Food</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
  }
  modal.style.display = "flex";
}

function handleOrderClick() {
  if (!navigator.geolocation) {
    showOrderModal();
    return;
  }

  // Change cursor to indicate loading if desired
  document.body.style.cursor = 'wait';

  navigator.geolocation.getCurrentPosition(function(pos) {
    document.body.style.cursor = 'default';
    var userLat = pos.coords.latitude;
    var userLng = pos.coords.longitude;
    var nearest = null;
    var minDist = Infinity;

    for (var i = 0; i < YOYO_STORES.length; i++) {
      // Simple distance formula (Pythagorean theorem) - sufficient for short distances
      var d = Math.sqrt(
        Math.pow(YOYO_STORES[i].lat - userLat, 2) +
        Math.pow(YOYO_STORES[i].lng - userLng, 2)
      );
      if (d < minDist) {
        minDist = d;
        nearest = YOYO_STORES[i];
      }
    }

    if (nearest) {
      window.open(nearest.url, '_blank');
    } else {
      showOrderModal();
    }
  }, function(err) {
    document.body.style.cursor = 'default';
    // Fallback if user denies geolocation or it fails
    showOrderModal();
  }, { timeout: 5000 });
}

(function initCTA() {
  var navCta = document.getElementById("nav-cta-commander");
  var heroCta = document.getElementById("hero-cta-commander");
  var mobileLink = document.querySelector(".nav__mobile-menu .mobile-link[style*='color: var(--red)']");

  if (navCta) {
    navCta.addEventListener("click", handleOrderClick);
  }
  if (heroCta) {
    heroCta.addEventListener("click", function (e) {
      e.stopPropagation(); /* prevent background slider click */
      handleOrderClick();
    });
  }
  if (mobileLink) {
    mobileLink.addEventListener("click", function(e) {
      e.preventDefault();
      handleOrderClick();
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


