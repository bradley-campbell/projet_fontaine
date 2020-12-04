const mapStyles = [
  {
    stylers: [
      {
        saturation: -100,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#0099dd",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#aadd55",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {},
];

export const options = {
  backgroundColor: "#96bff6",
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  minZoom: 11,
  maxZoom: 20,
  noClear: true,
};

export const boroughs = {
  1: { borough: "Saint-Léonard", lat: 45.5875, lng: -73.597, id: 1 },
  2: { borough: "Ahuntsic-Cartierville", lat: 45.5447, lng: -73.6681, id: 2 },
  3: { borough: "Lachine", lat: 45.4413, lng: -73.6886, id: 3 },
  4: {
    borough: "Villeray-Saint-Michel-Parc-Extension",
    lat: 45.5553,
    lng: -73.6083,
    id: 4,
  },
  5: { borough: "Verdun", lat: 45.4548, lng: -73.5699, id: 5 },
  6: { borough: "Le Sud-Ouest", lat: 45.4661, lng: -73.5939, id: 6 },
  7: { borough: "LaSalle", lat: 45.4306, lng: -73.6348, id: 7 },
  8: { borough: "Outremont", lat: 45.5143, lng: -73.609, id: 8 },
  9: { borough: "Plateau-Mont-Royal", lat: 45.5232, lng: -73.587, id: 9 },
  10: {
    borough: "Rivière-des-Prairies-Pointe-aux-Trembles",
    lat: 45.6731,
    lng: -73.5187,
    id: 10,
  },
  11: {
    borough: "Rosemont-La Petite-Patrie",
    lat: 45.5517,
    lng: -73.5836,
    id: 11,
  },
  12: {
    borough: "Côte-des-Neiges-Notre-Dame-de-Grâce",
    lat: 45.4912,
    lng: -73.6327,
    id: 12,
  },
  13: {
    borough: "Mercier-Hochelaga-Maisonneuve",
    lat: 45.573,
    lng: -73.5308,
    id: 13,
  },
  14: { borough: "Anjou", lat: 45.616, lng: -73.5694, id: 14 },
  15: { borough: "Ville-Marie", lat: 45.5088, lng: -73.5553, id: 15 },
  16: { borough: "Pierrefonds-Roxboro", lat: 45.5096, lng: -73.8192, id: 16 },
  17: { borough: "Saint-Laurent", lat: 45.4986, lng: -73.7498, id: 17 },
  18: { borough: "Montréal-Nord", lat: 45.6072, lng: -73.6315, id: 18 },
  19: {
    borough: "L'île-Bizard-Sainte-Geneviève",
    lat: 45.4949,
    lng: -73.8908,
    id: 19,
  },
};
