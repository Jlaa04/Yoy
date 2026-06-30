/* ========================================
   STORES.JS — Google Maps Embed (iframe), store list
   ======================================== */

/* ========================================
   DONNÉES — BOUTIQUES
   ======================================== */
var stores = [
  { id: 1, name: "Monastir - YOYO", address: "Route de la Falaise, Monastir", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJQa1zMUtzAhMRzWQOdHFLdzM", lat: 35.7725, lng: 10.8250, image: "images/boutiques/monastir.png" },
  { id: 2, name: "Mrezga - Yoyo", address: "2096 Boulevard de l'Environnement, Mrezga", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJwXN-fs2fAhMRxGBiAarr9MU", lat: 36.4350, lng: 10.7000, image: "images/boutiques/mrezga.png" },
  { id: 3, name: "Yasmine Hammamet - YOYO PREMIUM", address: "Zone touristique Yasmine Hammamet", hours: "10:00 – 23:00", open: true, glovoUrl: "https://glovoapp.com/en/tn/nabeul-hammamet/stores/yoyo-food-hammamet-nbl", placeId: "ChIJnXCHks1j_RIRciP3bDGJY-U", lat: 36.3740, lng: 10.5410, image: "images/boutiques/yasmine_hammamet.png" },
  { id: 4, name: "L'Aouina - Pâtisserie Yoyo", address: "Rue De Parfum, L'Aouina", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJGRKPBJfL4hIReBHfMFzIifU", lat: 36.8440, lng: 10.2330, image: "images/boutiques/laouina.png" },
  { id: 5, name: "Lac 1 - YOYO FOOD", address: "19 rue Lac Farwa, Les Berges du Lac 1", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJKQyWCgA1_RIRWWJ3FtSdCLk", lat: 36.8370, lng: 10.2450, image: "images/boutiques/lac1.png" },
  { id: 6, name: "Sidi Bou Said - YOYO FOOD", address: "3 Impasse Bir Sidi Taieb, Carthage", hours: "10:00 – 23:00", open: true, glovoUrl: "https://glovoapp.com/en/tn/tunis/stores/yoyo-tis", placeId: "ChIJ5ePbw4C14hIRKFOcOlP3Zqs", lat: 36.8585, lng: 10.3325, image: "images/boutiques/sidi_bou_said.png" },
  { id: 7, name: "Ariana - Yoyo food", address: "61 Avenue d'Afrique, Ariana", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJMYXl_58z_RIRTAKnHPpsEF8", lat: 36.8485, lng: 10.1652, image: "images/boutiques/ariana.png", mapQuery: "Yoyo food, El Menzah 5" },
  { id: 8, name: "Le Bardo - YOYO food", address: "6 Rue Marrakech, Le Bardo", hours: "10:00 – 23:00", open: true, glovoUrl: "#", placeId: "ChIJOWQ-P6Iz_RIRMnyrC6jMgBw", lat: 36.8132, lng: 10.1339, image: "images/boutiques/le_bardo.png" },
  { id: 9, name: "Boumhel - Yoyo Food", address: "Boumhel El Bassatine", hours: "10:00 – 23:00", open: true, glovoUrl: "https://glovoapp.com/en/tn/tunis/stores/yoyo-food-boumhal-tis", placeId: "ChIJSarrQIdJ_RIRD1gHC6gbok0", lat: 36.7340, lng: 10.3110, image: "images/boutiques/boumhel.png" }
];

/* ========================================
   IFRAME — Mise à jour de la carte
   ======================================== */
function updateMapIframe(store) {
  var iframe = document.getElementById("map");
  if (!iframe) return;
  /* Utiliser le mapQuery s'il existe, sinon le nom + adresse pour que Google Maps trouve l'établissement exact */
  var query = store.mapQuery || (store.name + ", " + store.address + ", Tunisie");
  iframe.src = "https://maps.google.com/maps?q=" + encodeURIComponent(query) + "&output=embed&z=17";
}

function showAllStores() {
  var iframe = document.getElementById("map");
  if (!iframe) return;
  iframe.src = "https://maps.google.com/maps?q=YOYO+food+Tunisie&output=embed&z=7";
}

/* ========================================
   STORE LIST — Rendu
   ======================================== */
(function initStoreList() {
  var list = document.getElementById("storesList");
  if (!list) return;

  var html = "";
  for (var i = 0; i < stores.length; i++) {
    var s = stores[i];
    var statusClass = s.open ? "store-card__status--open" : "store-card__status--closed";
    var statusLabel = s.open ? "Ouvert" : "Fermé";
    var mapsLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.name + " " + s.address) + "&query_place_id=" + s.placeId;

    html += '<div class="store-card" data-store-index="' + i + '">' +
              '<div class="store-card__image-container">' +
                '<img src="' + s.image + '" alt="' + s.name + '" class="store-card__image" onerror="this.src=\'images/hours_store.png\'">' +
              '</div>' +
              '<div class="store-card__header">' +
                '<span class="store-card__name">' + s.name + '</span>' +
                '<span class="store-card__status ' + statusClass + '">' + statusLabel + '</span>' +
              '</div>' +
              '<div class="store-card__address">' + s.address + '</div>' +
              '<div class="store-card__hours">' + s.hours + '</div>' +
              '<div class="store-card__actions">' +
                '<a href="' + s.glovoUrl + '" class="store-card__glovo" onclick="if(this.href.endsWith(\'#\')){event.preventDefault();alert(\'Lien Glovo à venir pour ' + s.name.replace(/'/g, "\\'") + '\');}">Commander sur Glovo</a>' +
              '</div>' +
            '</div>';
  }
  list.innerHTML = html;

  /* Clic sur carte boutique → mise à jour iframe */
  var storeCards = document.querySelectorAll(".store-card");
  for (var j = 0; j < storeCards.length; j++) {
    storeCards[j].addEventListener("click", function(e) {
      if (e.target.closest(".store-card__glovo") || e.target.closest(".store-card__direction")) return;

      /* Réduire toutes les cartes */
      for (var k = 0; k < storeCards.length; k++) {
        storeCards[k].classList.remove("store-card--expanded");
      }
      /* Agrandir cette carte */
      this.classList.add("store-card--expanded");

      var idx = parseInt(this.getAttribute("data-store-index"));
      var s = stores[idx];

      /* Mettre à jour l'iframe pour afficher cette boutique */
      updateMapIframe(s);
    });
  }

  /* Gérer le paramètre de l'URL pour sélectionner une boutique spécifique */
  var urlParams = new URLSearchParams(window.location.search);
  var storeParam = urlParams.get('store');
  if (storeParam !== null && !isNaN(storeParam)) {
    var idxToSelect = parseInt(storeParam, 10);
    if (idxToSelect >= 0 && idxToSelect < stores.length) {
      var targetCard = document.querySelector('.store-card[data-store-index="' + idxToSelect + '"]');
      if (targetCard) {
        targetCard.click();
        setTimeout(function() {
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } else {
      showAllStores();
    }
  } else {
    showAllStores();
  }
})();

/* ========================================
   GÉOLOCALISATION
   ======================================== */
(function initGeolocation() {
  var locateBtn = document.getElementById("locateBtn");
  if (!locateBtn) return;

  locateBtn.addEventListener("click", function() {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(function(pos) {
      var userLat = pos.coords.latitude;
      var userLng = pos.coords.longitude;

      /* Trouver la boutique la plus proche */
      var nearest = null;
      var minDist = Infinity;
      for (var i = 0; i < stores.length; i++) {
        var d = Math.sqrt(
          Math.pow(stores[i].lat - userLat, 2) +
          Math.pow(stores[i].lng - userLng, 2)
        );
        if (d < minDist) {
          minDist = d;
          nearest = i;
        }
      }

      if (nearest !== null) {
        var s = stores[nearest];
        /* Afficher la boutique la plus proche sur la carte */
        updateMapIframe(s);

        /* Mettre en surbrillance la carte */
        var storeCards = document.querySelectorAll(".store-card");
        for (var k = 0; k < storeCards.length; k++) {
          storeCards[k].classList.remove("store-card--expanded");
        }
        var targetCard = document.querySelector('.store-card[data-store-index="' + nearest + '"]');
        if (targetCard) {
          targetCard.classList.add("store-card--expanded");
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

    }, function() {
      alert("Impossible d'obtenir votre position. Vérifiez vos paramètres de localisation.");
    });
  });
})();
