/* ========================================
   MENU.JS — Produits, rendu, filtrage
   ======================================== */

var products = [
  {
    "id": 9,
    "name": "7 Pièces (Boules Gaufres)",
    "desc": "",
    "price": "11.000 DT",
    "category": "boules-gaufres",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/boules_gaufres.png",
    "categoryLabel": "Boules Gaufres"
  },
  {
    "id": 10,
    "name": "21 Pièces (Boules Gaufres)",
    "desc": "",
    "price": "21.000 DT",
    "category": "boules-gaufres",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/boules_gaufres.png",
    "categoryLabel": "Boules Gaufres"
  },
  {
    "id": 11,
    "name": "14 Pièces (Boules Gaufres)",
    "desc": "",
    "price": "15.000 DT",
    "category": "boules-gaufres",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/boules_gaufres.png",
    "categoryLabel": "Boules Gaufres"
  },
  {
    "id": 1,
    "name": "Tiramisu",
    "desc": "",
    "price": "17.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 2,
    "name": "LA BOMBE",
    "desc": "Brownies, kounefa pistache, fruits secs entiers sauce pistache",
    "price": "20.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 3,
    "name": "Chocolat Dubai",
    "desc": "Chocolat, kunefa, pistache",
    "price": "27.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 5,
    "name": "Fondant Yoyo",
    "desc": "Fondant chocolat, crème chocolat, fruit sec",
    "price": "17.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/fondant_yoyo.png",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 7,
    "name": "Cheesecake San Sebastian",
    "desc": "",
    "price": "17.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 8,
    "name": "Cake Dubai",
    "desc": "Cake, chocolat, kunefa, pistache",
    "price": "17.000 DT",
    "category": "partie-sucre",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/cake_dubai.png",
    "categoryLabel": "Partie Sucré"
  },
  {
    "id": 12,
    "name": "Pizza Bacon",
    "desc": "Sauce tomate fraîche, mozzarella, bacon, roquette, mozzarellini, parmesan, sauce balsamique",
    "price": "99.000 DT",
    "category": "pizza",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Pizza"
  },
  {
    "id": 13,
    "name": "Pizza Poulet Citron Confit",
    "desc": "Sauce tomate fraîche, mozzarella, escalope de poulet, citron confit, piment de cayenne, parmesan",
    "price": "85.000 DT",
    "category": "pizza",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Pizza"
  },
  {
    "id": 14,
    "name": "Pizza Pepperoni",
    "desc": "Sauce tomate fraîche, mozzarella, pepperoni, parmesan",
    "price": "90.000 DT",
    "category": "pizza",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Pizza"
  },
  {
    "id": 15,
    "name": "Pizza Thon Fromage",
    "desc": "Sauce tomate fraîche, mozzarella, thon, tomate fraîche, olive, persil, huile d'olive",
    "price": "85.000 DT",
    "category": "pizza",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Pizza"
  },
  {
    "id": 16,
    "name": "Pizza 5 Fromages",
    "desc": "Sauce fromagère, mozzarella, gorgonzola, gruyère, parmesan, mozzarellini",
    "price": "97.000 DT",
    "category": "pizza",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Pizza"
  },
  {
    "id": 22,
    "name": "Bowl Chicken",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, poulet, frites",
    "price": "23.500 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 24,
    "name": "Tebagos Chicken",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, poulet, frites",
    "price": "32.000 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 25,
    "name": "Tebago's Beef",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, viande haché, frites",
    "price": "33.000 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 26,
    "name": "Bowl Boeuf",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, viande haché, frites",
    "price": "29.500 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 28,
    "name": "Bowl Mixte",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, viande haché, poulet, frites",
    "price": "27.000 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 29,
    "name": "Rolls Beef",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, viande haché, frites",
    "price": "21.000 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 30,
    "name": "Rolls Chicken",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, poulet, frites",
    "price": "19.500 DT",
    "category": "partie-sale",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Partie Salé"
  },
  {
    "id": 31,
    "name": "Crème Américaine Rafaello",
    "desc": "Crème chocolat blanc, cake, noix de coco",
    "price": "17.000 DT",
    "category": "creme-yoyo",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Crème Yoyo"
  },
  {
    "id": 32,
    "name": "Crème Américaine Ferrero",
    "desc": "Crème Américaine, Ferrero",
    "price": "15.000 DT",
    "category": "creme-yoyo",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/creme_ferrero.png",
    "categoryLabel": "Crème Yoyo"
  },
  {
    "id": 34,
    "name": "Crème Dubai",
    "desc": "Crème chocolat, crème pistache, kunefa, cake",
    "price": "18.500 DT",
    "category": "creme-yoyo",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Crème Yoyo"
  },
  {
    "id": 35,
    "name": "Crème Américaine Kinder Maxi",
    "desc": "Crème chocolat, crème chocolat blanc, cake",
    "price": "17.000 DT",
    "category": "creme-yoyo",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Crème Yoyo"
  },
  {
    "id": 63,
    "name": "Classic Beef",
    "desc": "Laitue, tomate, oignon, mayonnaise, ketchup, frites",
    "price": "19.500 DT",
    "category": "burger",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/burger.png",
    "categoryLabel": "Burger"
  },
  {
    "id": 64,
    "name": "Classic Chicken",
    "desc": "Laitue, tomate, oignon, mayonnaise, ketchup, frites",
    "price": "18.500 DT",
    "category": "burger",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/burger.png",
    "categoryLabel": "Burger"
  },
  {
    "id": 65,
    "name": "Smoky Beef",
    "desc": "Laitue, tomate, oignon, mayonnaise, ketchup, frites",
    "price": "24.500 DT",
    "category": "burger",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/burger.png",
    "categoryLabel": "Burger"
  },
  {
    "id": 66,
    "name": "Américain Burger",
    "desc": "Laitue, tomate, oignon, mayonnaise, ketchup, frites",
    "price": "23.500 DT",
    "category": "burger",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/burger.png",
    "categoryLabel": "Burger"
  },
  {
    "id": 44,
    "name": "Citronnade",
    "desc": "Jus frais",
    "price": "8.000 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/citronnade.png",
    "categoryLabel": "Boissons"
  },
  {
    "id": 46,
    "name": "Yoyo Cocktail",
    "desc": "Jus cocktail",
    "price": "16.500 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Boissons"
  },
  {
    "id": 48,
    "name": "Bombe Yoyo",
    "desc": "Jus de banane, datte, fruit sec, pomme",
    "price": "20.000 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Boissons"
  },
  {
    "id": 51,
    "name": "Jus D'orange",
    "desc": "Orange",
    "price": "7.000 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Boissons"
  },
  {
    "id": 70,
    "name": "Mojito Red",
    "desc": "Mojito",
    "price": "9.000 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "images/products/mojito_red.png",
    "categoryLabel": "Boissons"
  },
  {
    "id": 78,
    "name": "Coca Cola Canette 24Cl",
    "desc": "Boisson gazeuse",
    "price": "3.500 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Boissons"
  },
  {
    "id": 81,
    "name": "Eau Minérale 0.5 L",
    "desc": "Eau Minérale",
    "price": "2.500 DT",
    "category": "boissons",
    "boutiques": [
      "monastir",
      "mrezga",
      "yasmine-hammamet",
      "laouina",
      "lac-1",
      "carthage",
      "ariana",
      "le-bardo",
      "boumhel"
    ],
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=400&auto=format&fit=crop",
    "categoryLabel": "Boissons"
  },
];

(function initMenu() {
  var grid = document.getElementById("menuGrid");
  var menuTabsContainer = document.getElementById("menuTabs");
  if (!grid) return;

  if (menuTabsContainer) {
    var cats = [];
    var catLabels = {};
    products.forEach(function(p) {
      if (cats.indexOf(p.category) === -1) {
        cats.push(p.category);
        catLabels[p.category] = p.categoryLabel;
      }
    });
    
    var tabsHtml = '<button class="menu__tab active" data-filter="all">Tout</button>';
    cats.forEach(function(c) {
      tabsHtml += '<button class="menu__tab" data-filter="' + c + '">' + catLabels[c] + '</button>';
    });
    menuTabsContainer.innerHTML = tabsHtml;
  }

  function renderGrid() {
    var activeCat = "all";
    var activeBoutique = "all";
    
    var catTab = document.querySelector(".menu__tab.active");
    if (catTab) activeCat = catTab.getAttribute("data-filter");
    
    var botTab = document.querySelector(".menu__boutique-tab.active");
    if (botTab) activeBoutique = botTab.getAttribute("data-boutique");

    var html = "";
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      
      var matchCat = (activeCat === "all" || p.category === activeCat);
      var matchBoutique = (activeBoutique === "all" || p.boutiques.indexOf(activeBoutique) !== -1);
      
      if (matchCat && matchBoutique) {
        html += '<div class="product-card reveal" style="display:flex; flex-direction:column; position:relative; overflow:hidden;">' +
                  '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin-bottom:15px;"/>' +
                  '<span class="product-card__price" style="position:absolute; top:20px; right:20px; background:var(--red); padding:5px 10px; border-radius:8px; font-weight:bold;">' + p.price + '</span>' +
                  '<h3 class="product-card__name">' + p.name + '</h3>' +
                  '<p class="product-card__desc" style="flex:1;">' + p.desc + '</p>' +
                '</div>';
      }
    }
    
    if (html === "") {
      html = "<p style='grid-column: 1/-1; text-align:center; padding: 40px;'>Aucun produit trouvé pour cette sélection.</p>";
    }
    
    grid.innerHTML = html;

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
  }

  renderGrid();

  if (menuTabsContainer) {
    menuTabsContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("menu__tab")) {
        var tabs = menuTabsContainer.querySelectorAll(".menu__tab");
        for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
        e.target.classList.add("active");
        renderGrid();
      }
    });
  }
  
  var boutiqueTabsContainer = document.getElementById("boutiqueTabs");
  if (boutiqueTabsContainer) {
    boutiqueTabsContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("menu__boutique-tab")) {
        var tabs = boutiqueTabsContainer.querySelectorAll(".menu__boutique-tab");
        for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
        e.target.classList.add("active");
        renderGrid();
      }
    });
  }
})();
