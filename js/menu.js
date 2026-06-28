/* ========================================
   MENU.JS — Produits, rendu, filtrage
   ======================================== */

/* ========================================
   DONNÉES — PRODUITS
   ======================================== */
var products = [
  {
    id: 1,
    name: "Donut Nutella Crunch",
    desc: "Nutella, éclats de noisettes, glaçage caramel",
    price: "4.500 DT",
    badge: "Bestseller",
    badgeColor: "red",
    category: "donuts",
    emoji: "🍩"
  },
  {
    id: 2,
    name: "Donut Glacé Framboise",
    desc: "Glaçage rose, pépites de sucre, coulis framboise",
    price: "4.000 DT",
    badge: "Nouveau",
    badgeColor: "yellow",
    category: "donuts",
    emoji: "🍩"
  },
  {
    id: 3,
    name: "Donut Triple Chocolat",
    desc: "Trois textures : fondant, croustillant, aérien",
    price: "4.500 DT",
    badge: "Fan-fave",
    badgeColor: "red",
    category: "donuts",
    emoji: "🍫"
  },
  {
    id: 4,
    name: "Crêpe Spéculoos Banane",
    desc: "Crème spéculoos maison, banane, chantilly",
    price: "5.500 DT",
    badge: "Maison",
    badgeColor: "yellow",
    category: "crepes",
    emoji: "🥞"
  },
  {
    id: 5,
    name: "Gaufre Fraises & Cream",
    desc: "Gaufre belge, fraises fraîches, sirop",
    price: "6.000 DT",
    badge: "Saison",
    badgeColor: "yellow",
    category: "crepes",
    emoji: "🧇"
  },
  {
    id: 6,
    name: "Pancakes Miel & Noix",
    desc: "Stack 3 pancakes, miel local, noix grillées",
    price: "5.000 DT",
    badge: "Coup de ♥",
    badgeColor: "red",
    category: "crepes",
    emoji: "🥞"
  },
  {
    id: 7,
    name: "Milkshake Kinder Bueno",
    desc: "Glace vanille, Kinder Bueno mixé, chantilly",
    price: "7.500 DT",
    badge: "Bestseller",
    badgeColor: "red",
    category: "milkshakes",
    emoji: "🥤"
  },
  {
    id: 8,
    name: "Milkshake Fraise Intense",
    desc: "Fraises fraîches, coulis, glace artisanale",
    price: "7.000 DT",
    badge: "Fruité",
    badgeColor: "yellow",
    category: "milkshakes",
    emoji: "🍓"
  }
];

/* ========================================
   MENU — Rendu des cartes produit
   ======================================== */
(function initMenu() {
  var grid = document.getElementById("menuGrid");
  if (!grid) return;

  var html = "";
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    html += '<div class="product-card reveal" data-category="' + p.category + '">' +
              '<span class="product-card__badge product-card__badge--' + p.badgeColor + '">' + p.badge + '</span>' +
              '<span class="product-card__price">' + p.price + '</span>' +
              '<h3 class="product-card__name">' + p.name + '</h3>' +
              '<p class="product-card__desc">' + p.desc + '</p>' +
              '<button class="product-card__btn" onclick="alert(\'Commande via Glovo à venir — ' + p.name.replace(/'/g, "\\'") + '\')">Commander →</button>' +
            '</div>';
  }
  grid.innerHTML = html;

  /* Re-init reveal for dynamically added cards */
  if ("IntersectionObserver" in window) {
    var newCards = grid.querySelectorAll(".reveal");
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
    for (var k = 0; k < newCards.length; k++) {
      observer.observe(newCards[k]);
    }
  }
})();

/* Menu Tabs — filtrage */
(function initMenuTabs() {
  var tabs = document.querySelectorAll(".menu__tab");
  if (!tabs.length) return;

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");
      /* Active state */
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove("active");
      }
      this.classList.add("active");
      /* Filter cards */
      var cards = document.querySelectorAll(".product-card");
      for (var k = 0; k < cards.length; k++) {
        var cat = cards[k].getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          cards[k].classList.remove("hidden");
        } else {
          cards[k].classList.add("hidden");
        }
      }
    });
  }
})();
