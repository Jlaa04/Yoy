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
    "id": 4,
    "name": "Crêpe Dubai",
    "desc": "Chocolat, kunefa, pistache",
    "price": "24.500 DT",
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
    "id": 6,
    "name": "JOUBNA DUBAI",
    "desc": "",
    "price": "18.500 DT",
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
    "name": "PLATEAU PIZZA BACON",
    "desc": "SAUCE TOMATE FRAICHE , MOZZARELLA,BACON,ROQUETTE,MOZZARELLINI,PARMESAN,SAUCE BALSAMIQUE",
    "price": "99.000 DT",
    "category": "plateau-pizza",
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
    "categoryLabel": "Plateau Pizza"
  },
  {
    "id": 13,
    "name": "PLATEAU PIZZA POULET CITRON CONFIT",
    "desc": "SAUCE TOMATE FRAICHE , MOZZARELLA , ESCALOPE DE POULET , CITRONT CONFIT,PIMMENT DE CAYENNE ,PARMESAN",
    "price": "85.000 DT",
    "category": "plateau-pizza",
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
    "categoryLabel": "Plateau Pizza"
  },
  {
    "id": 14,
    "name": "PLATEAU PIZZA PEPPERONI",
    "desc": "SAUCE TOMATE FRAICHE , MOZZARELLA ,PEPPERONI,PARMESAN",
    "price": "90.000 DT",
    "category": "plateau-pizza",
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
    "categoryLabel": "Plateau Pizza"
  },
  {
    "id": 15,
    "name": "PLATEAU PIZZA THON FROMAGE",
    "desc": "SAUCE TOMATE FRAICHE , MOZZARELLA , THON , TOMATE FRAICHE, OLIVE,PERSIL HUILE D'OLIVE",
    "price": "85.000 DT",
    "category": "plateau-pizza",
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
    "categoryLabel": "Plateau Pizza"
  },
  {
    "id": 16,
    "name": "PLATEAU PIZZA 5 FROMAGES",
    "desc": "SAUCE FROMAGERE ,MOZZARELLA ,GROGONZOLLA, GRUYERE,PARMESAN,MOZZARELLINI",
    "price": "97.000 DT",
    "category": "plateau-pizza",
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
    "categoryLabel": "Plateau Pizza"
  },
  {
    "id": 17,
    "name": "TRANCHE PIZZA THON FROMAGE",
    "desc": "",
    "price": "10.500 DT",
    "category": "pizza-tranche",
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
    "categoryLabel": "Pizza Tranche"
  },
  {
    "id": 18,
    "name": "TRANCHE PIZZA PEPPERONI",
    "desc": "",
    "price": "11.000 DT",
    "category": "pizza-tranche",
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
    "categoryLabel": "Pizza Tranche"
  },
  {
    "id": 19,
    "name": "TRANCHE PIZZA POULET CITRON CONFIT",
    "desc": "",
    "price": "10.500 DT",
    "category": "pizza-tranche",
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
    "categoryLabel": "Pizza Tranche"
  },
  {
    "id": 20,
    "name": "TRANCHE PIZZA BACON",
    "desc": "",
    "price": "11.000 DT",
    "category": "pizza-tranche",
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
    "categoryLabel": "Pizza Tranche"
  },
  {
    "id": 21,
    "name": "TRANCHE PIZZA 5 FROMAGES",
    "desc": "",
    "price": "11.000 DT",
    "category": "pizza-tranche",
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
    "categoryLabel": "Pizza Tranche"
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
    "id": 23,
    "name": "Tebayo's Beef",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, viande haché, frites",
    "price": "22.000 DT",
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
    "id": 27,
    "name": "Tebayo's Chicken",
    "desc": "Mayonnaise, sauce algérienne, ketchup, mozzarella, oignon, poulet, frites",
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
    "categoryLabel": "Créme Yoyo"
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
    "categoryLabel": "Créme Yoyo"
  },
  {
    "id": 33,
    "name": "CREME ELISSA",
    "desc": "",
    "price": "17.500 DT",
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
    "categoryLabel": "Créme Yoyo"
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
    "categoryLabel": "Créme Yoyo"
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
    "categoryLabel": "Créme Yoyo"
  },
  {
    "id": 36,
    "name": "CREME BAKLAWA",
    "desc": "",
    "price": "17.500 DT",
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
    "categoryLabel": "Créme Yoyo"
  },
  {
    "id": 37,
    "name": "PANUOZZO Poulet Crunchy",
    "desc": "AVEC MOZZARELLA ET FRITES",
    "price": "22.000 DT",
    "category": "panuozzo",
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
    "categoryLabel": "Panuozzo"
  },
  {
    "id": 38,
    "name": "PANUOZZO Pepperoni",
    "desc": "AVEC MOZZARELLA ET FRIRES",
    "price": "23.000 DT",
    "category": "panuozzo",
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
    "categoryLabel": "Panuozzo"
  },
  {
    "id": 39,
    "name": "PANUOZZO Le Tunisien",
    "desc": "AVEC MOZZARELLA ET FRITES",
    "price": "18.500 DT",
    "category": "panuozzo",
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
    "categoryLabel": "Panuozzo"
  },
  {
    "id": 40,
    "name": "PANUOZZO Au Poulet Mariné",
    "desc": "AVEC MOZZARELLA ET FRITES",
    "price": "21.500 DT",
    "category": "panuozzo",
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
    "categoryLabel": "Panuozzo"
  },
  {
    "id": 41,
    "name": "PANUOZZO Bœuf Fondant",
    "desc": "AVEC SAUCE FROMAGE , MOZZARELLA ET FRITES",
    "price": "24.000 DT",
    "category": "panuozzo",
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
    "categoryLabel": "Panuozzo"
  },
  {
    "id": 42,
    "name": "Petit Déjeuner Le Duo",
    "desc": "Assiette charcuterie, fromages, omelette, boules gaufres 3 tartines , 2 jus d'orange, 2 cafés au choix, eau minérale 1L, 2 œufs au plat",
    "price": "44.500 DT",
    "category": "petit-dejeuner",
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
    "categoryLabel": "Petit Déjeuner"
  },
  {
    "id": 43,
    "name": "Petit Déjeuner Fast",
    "desc": "Croissant farcie ou omelette ou boules gaufres ou croissant salée , jus d'orange, café au choix",
    "price": "14.500 DT",
    "category": "petit-dejeuner",
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
    "categoryLabel": "Petit Déjeuner"
  },
  {
    "id": 44,
    "name": "Citronnade",
    "desc": "Jus frais",
    "price": "8.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 45,
    "name": "Jus De Pomme Et Kiwi",
    "desc": "Pomme, kiwi",
    "price": "11.500 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 46,
    "name": "Yoyo",
    "desc": "Jus cocktail",
    "price": "16.500 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 47,
    "name": "Jus De Banane",
    "desc": "Banane",
    "price": "14.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 48,
    "name": "Bombe Yoyo",
    "desc": "Jus de banane, datte, fruit sec, pomme",
    "price": "20.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 49,
    "name": "Jus De Fraise",
    "desc": "Fraise",
    "price": "7.500 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 50,
    "name": "Jus D'ananas",
    "desc": "Ananas",
    "price": "15.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 51,
    "name": "Jus D'orange",
    "desc": "Orange",
    "price": "7.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 52,
    "name": "Citronnade Avec Menthe",
    "desc": "Citron, menthe",
    "price": "6.000 DT",
    "category": "yoyo-frutti-juice",
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
    "categoryLabel": "Yoyo Frutti Juice"
  },
  {
    "id": 53,
    "name": "1/2 PLATEAU PIZZA POULET CITRON CONFIT",
    "desc": "",
    "price": "45.000 DT",
    "category": "demi-plateau-pizza",
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
    "categoryLabel": "1/2 Plateau Pizza"
  },
  {
    "id": 54,
    "name": "1/2 PLATEAU PIZZA 5 FROMAGES",
    "desc": "",
    "price": "55.000 DT",
    "category": "demi-plateau-pizza",
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
    "categoryLabel": "1/2 Plateau Pizza"
  },
  {
    "id": 55,
    "name": "1/2 PLATEAU PIZZA BACON",
    "desc": "",
    "price": "50.000 DT",
    "category": "demi-plateau-pizza",
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
    "categoryLabel": "1/2 Plateau Pizza"
  },
  {
    "id": 56,
    "name": "1/2 PLATEAU PIZZA THON FROMAGE",
    "desc": "",
    "price": "45.000 DT",
    "category": "demi-plateau-pizza",
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
    "categoryLabel": "1/2 Plateau Pizza"
  },
  {
    "id": 57,
    "name": "1/2 PLATEAU PIZZA PEPPERONI",
    "desc": "",
    "price": "50.000 DT",
    "category": "demi-plateau-pizza",
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
    "categoryLabel": "1/2 Plateau Pizza"
  },
  {
    "id": 58,
    "name": "1/4 PLATEAU PIZZA POULET CITRON CONFIT",
    "desc": "",
    "price": "25.000 DT",
    "category": "quart-plateau-pizza",
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
    "categoryLabel": "1/4 Plateau Pizza"
  },
  {
    "id": 59,
    "name": "1/4 PLATEAU PIZZA THON FROMAGE",
    "desc": "",
    "price": "25.000 DT",
    "category": "quart-plateau-pizza",
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
    "categoryLabel": "1/4 Plateau Pizza"
  },
  {
    "id": 60,
    "name": "1/4 PLATEAU PIZZA PEPPERONI",
    "desc": "",
    "price": "26.000 DT",
    "category": "quart-plateau-pizza",
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
    "categoryLabel": "1/4 Plateau Pizza"
  },
  {
    "id": 61,
    "name": "1/4 PLATEAU PIZZA BACON",
    "desc": "",
    "price": "26.000 DT",
    "category": "quart-plateau-pizza",
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
    "categoryLabel": "1/4 Plateau Pizza"
  },
  {
    "id": 62,
    "name": "1/4 PLATEAU PIZZA 5 FROMAGES",
    "desc": "",
    "price": "28.000 DT",
    "category": "quart-plateau-pizza",
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
    "categoryLabel": "1/4 Plateau Pizza"
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
    "id": 67,
    "name": "Mexician Spicy",
    "desc": "Laitue, tomate, oignon, mayonnaise, ketchup, frites",
    "price": "21.000 DT",
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
    "id": 68,
    "name": "Smoky Chicken",
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
    "id": 69,
    "name": "Mojito Pinacolada",
    "desc": "Pinacolada",
    "price": "15.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 70,
    "name": "Mojito Red",
    "desc": "Mojito",
    "price": "9.000 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 71,
    "name": "Mojito Neutre",
    "desc": "Neutre",
    "price": "13.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 72,
    "name": "Mojito Pêche",
    "desc": "Pêche",
    "price": "15.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 73,
    "name": "Mojito Energy",
    "desc": "Energy",
    "price": "18.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 74,
    "name": "Mojito Blue",
    "desc": "Blue",
    "price": "15.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 75,
    "name": "Mojito Green",
    "desc": "Green",
    "price": "15.500 DT",
    "category": "mojito",
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
    "categoryLabel": "Mojito"
  },
  {
    "id": 76,
    "name": "COCA ZERO CANETTE 24CL",
    "desc": "",
    "price": "3.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
  },
  {
    "id": 77,
    "name": "Boga - Cidre ( 24Cl ) Canette",
    "desc": "Boisson gazeuse",
    "price": "3.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
  },
  {
    "id": 78,
    "name": "Coca Cola - Classique ( 24Cl ) Canette",
    "desc": "Boisson gazeuse",
    "price": "3.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
  },
  {
    "id": 79,
    "name": "Fanta - Orange ( 24Cl ) Canette",
    "desc": "Boisson gazeuse",
    "price": "3.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
  },
  {
    "id": 80,
    "name": "Boga - Lim ( 24Cl ) Canette",
    "desc": "Boisson gazeuse",
    "price": "3.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
  },
  {
    "id": 81,
    "name": "Eau Minérale 0.5 L",
    "desc": "Eau Minérale",
    "price": "2.500 DT",
    "category": "boisson",
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
    "categoryLabel": "Boisson"
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
