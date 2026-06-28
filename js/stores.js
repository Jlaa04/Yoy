/* ========================================
   STORES.JS — Leaflet map, store list, geolocation
   ======================================== */

/* ========================================
   DONNÉES — BOUTIQUES
   ======================================== */
var stores = [
  {
    id: 1,
    name: "YOYO Carthage",
    address: "Avenue Hamilcar, Carthage",
    hours: "09:00 – 23:00",
    open: true,
    lat: 36.858,
    lng: 10.325,
    glovoUrl: "#"
  },
  {
    id: 2,
    name: "YOYO Lac 1",
    address: "Les Berges du Lac, Lac 1",
    hours: "10:00 – 00:00",
    open: true,
    lat: 36.840,
    lng: 10.235,
    glovoUrl: "#"
  },
  {
    id: 3,
    name: "YOYO Menzah",
    address: "Cité El Menzah 6, Ariana",
    hours: "10:00 – 23:30",
    open: false,
    lat: 36.862,
    lng: 10.188,
    glovoUrl: "#"
  },
  {
    id: 4,
    name: "YOYO Bardo",
    address: "Rue de Bardo, Le Bardo",
    hours: "09:00 – 22:30",
    open: true,
    lat: 36.810,
    lng: 10.143,
    glovoUrl: "#"
  },
  {
    id: 5,
    name: "YOYO Monastir",
    address: "Avenue Habib Bourguiba, Monastir",
    hours: "10:00 – 23:00",
    open: true,
    lat: 35.777,
    lng: 10.832,
    glovoUrl: "#"
  }
];

/* ========================================
   STORE LOCATOR — Carte Leaflet
   ======================================== */
var map;
var markers = [];

(function initMap() {
  var mapEl = document.getElementById("map");
  if (!mapEl) return;

  /* Centre sur la Tunisie */
  map = L.map("map", {
    center: [36.84, 10.22],
    zoom: 11,
    zoomControl: true,
    attributionControl: false
  });

  /* Tuiles sombres via filtre CSS */
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18
  }).addTo(map);

  /* Appliquer le filtre sombre aux tuiles */
  var tilePane = map.getPane("tilePane");
  if (tilePane) {
    tilePane.style.filter = "invert(1) hue-rotate(180deg) brightness(0.85) saturate(0.5)";
  }

  /* Marqueurs custom */
  for (var i = 0; i < stores.length; i++) {
    var s = stores[i];
    var color = s.open ? "#06D6A0" : "#E8001D";
    var statusText = s.open ? "Ouvert" : "Fermé";

    var icon = L.divIcon({
      className: "custom-marker",
      html: '<div style="' +
              'width: 18px; height: 18px; border-radius: 50%;' +
              'background: ' + color + ';' +
              'border: 3px solid #080808;' +
              'box-shadow: 0 0 12px ' + color + '60;' +
            '"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -14]
    });

    var marker = L.marker([s.lat, s.lng], { icon: icon }).addTo(map);
    marker.bindPopup(
      '<div style="text-align:center;">' +
        '<strong style="color: #FFD600;">' + s.name + '</strong><br/>' +
        '<span style="color: #aaa; font-size: 0.8rem; text-transform: none; letter-spacing: 0;">' + s.address + '</span><br/>' +
        '<span style="color: ' + color + '; font-size: 0.75rem;">' + statusText + ' · ' + s.hours + '</span>' +
      '</div>'
    );
    markers.push(marker);
  }
})();

/* Store List — Rendu */
(function initStoreList() {
  var list = document.getElementById("storesList");
  if (!list) return;

  var html = "";
  for (var i = 0; i < stores.length; i++) {
    var s = stores[i];
    var statusClass = s.open ? "store-card__status--open" : "store-card__status--closed";
    var statusLabel = s.open ? "Ouvert" : "Fermé";

    html += '<div class="store-card" data-store-index="' + i + '">' +
              '<div class="store-card__header">' +
                '<span class="store-card__name">' + s.name + '</span>' +
                '<span class="store-card__status ' + statusClass + '">' + statusLabel + '</span>' +
              '</div>' +
              '<div class="store-card__address">' + s.address + '</div>' +
              '<div class="store-card__hours">' + s.hours + '</div>' +
              '<a href="' + s.glovoUrl + '" class="store-card__glovo" onclick="if(this.href.endsWith(\'#\')){event.preventDefault();alert(\'Lien Glovo à venir pour ' + s.name.replace(/'/g, "\\'") + '\');}">Commander sur Glovo</a>' +
            '</div>';
  }
  list.innerHTML = html;

  /* Clic sur carte boutique → flyTo */
  var storeCards = document.querySelectorAll(".store-card");
  for (var j = 0; j < storeCards.length; j++) {
    storeCards[j].addEventListener("click", function (e) {
      if (e.target.closest(".store-card__glovo")) return;
      var idx = parseInt(this.getAttribute("data-store-index"));
      var s = stores[idx];
      map.flyTo([s.lat, s.lng], 15, { duration: 1.2 });
      markers[idx].openPopup();
    });
  }
})();

/* Géolocalisation */
(function initGeolocation() {
  var locateBtn = document.getElementById("locateBtn");
  if (!locateBtn) return;

  locateBtn.addEventListener("click", function () {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var userLat = pos.coords.latitude;
      var userLng = pos.coords.longitude;

      /* Trouver le point de vente le plus proche (distance euclidienne) */
      var closest = null;
      var minDist = Infinity;
      for (var i = 0; i < stores.length; i++) {
        var dx = stores[i].lat - userLat;
        var dy = stores[i].lng - userLng;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      }

      /* Marqueur utilisateur */
      var userIcon = L.divIcon({
        className: "user-marker",
        html: '<div style="' +
                'width: 14px; height: 14px; border-radius: 50%;' +
                'background: #4285F4;' +
                'border: 3px solid #fff;' +
                'box-shadow: 0 0 16px rgba(66,133,244,0.5);' +
              '"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      L.marker([userLat, userLng], { icon: userIcon }).addTo(map)
        .bindPopup('<strong style="color: #4285F4;">Vous êtes ici</strong>');

      /* FlyTo vers le point le plus proche */
      if (closest !== null) {
        map.flyTo([stores[closest].lat, stores[closest].lng], 15, { duration: 1.5 });
        setTimeout(function () {
          markers[closest].openPopup();
        }, 1600);
      }
    }, function () {
      alert("Impossible d'obtenir votre position. Vérifiez vos paramètres de localisation.");
    });
  });
})();
