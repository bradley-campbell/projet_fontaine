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
  2: {
    borough: "Ahuntsic-Cartierville",
    lat: 45.5447,
    lng: -73.6681,
    id: 2,
    twitter: "@AhuntsicCartier",
  },
  14: {
    borough: "Anjou",
    lng: -73.54974978,
    lat: 45.60825004,
    id: 14,
    twitter: "@MTL_Ville",
  },
  12: {
    borough: "Côte-des-Neiges-Notre-Dame-de-Grâce",
    lat: 45.4912,
    lng: -73.6327,
    id: 12,
    twitter: "@CDN_NDG",
  },
  19: {
    borough: "L'Île-Bizard-Sainte-Geneviève",
    lng: -73.89995868,
    lat: 45.51647305,
    id: 19,
    twitter: "@MTLibsg",
  },
  3: {
    borough: "Lachine",
    lat: 45.4413,
    lng: -73.6886,
    id: 3,
    twitter: "@Lachine_MTL",
  },
  7: {
    borough: "LaSalle",
    lat: 45.4306,
    lng: -73.6348,
    id: 7,
    twitter: "@MTL_Ville",
  },
  6: {
    borough: "Le Sud-Ouest",
    lat: 45.4661,
    lng: -73.5939,
    id: 6,
    twitter: "@SO_MTL",
  },
  13: {
    borough: "Mercier-Hochelaga-Maisonneuve",
    lat: 45.573,
    lng: -73.5308,
    id: 13,
    twitter: "@MTL_Ville",
  },
  18: {
    borough: "Montréal-Nord",
    lat: 45.6072,
    lng: -73.6315,
    id: 18,
    twitter: "@MTL_Ville",
  },
  8: {
    borough: "Outremont",
    lat: 45.5143,
    lng: -73.609,
    id: 8,
    twitter: "@MTL_Ville",
  },
  16: {
    borough: "Pierrefonds-Roxboro",
    lng: -73.84578483,
    lat: 45.49282384,
    id: 16,
    twitter: "@pfds_rox",
  },
  9: {
    borough: "Plateau-Mont-Royal",
    lat: 45.5232,
    lng: -73.587,
    id: 9,
    twitter: "@LePMR",
  },
  10: {
    borough: "Rivière-des-Prairies-Pointe-aux-Trembles",
    lat: 45.6731,
    lng: -73.5187,
    id: 10,
    twitter: "@MTL_Ville",
  },
  11: {
    borough: "Rosemont-La Petite-Patrie",
    lat: 45.5517,
    lng: -73.5836,
    id: 11,
    twitter: "@Arr_RosemontPP",
  },
  17: {
    borough: "Saint-Laurent",
    lng: -73.72505571,
    lat: 45.50818573,
    id: 17,
    twitter: "@ArrSaintLaurent",
  },
  1: {
    borough: "Saint-Léonard",
    lat: 45.5875,
    lng: -73.597,
    id: 1,
    twitter: "@MTL_Ville",
  },
  5: {
    borough: "Verdun",
    lat: 45.4548,
    lng: -73.5699,
    id: 5,
    twitter: "@Arr_Verdun",
  },
  15: {
    borough: "Ville-Marie",
    lat: 45.5088,
    lng: -73.5553,
    id: 15,
    twitter: "@CentrevilleMTL",
  },
  4: {
    borough: "Villeray-Saint-Michel-Parc-Extension",
    lat: 45.5553,
    lng: -73.6083,
    id: 4,
    twitter: "@MTL_VSP",
  },
};

export const condition = {
  1: {
    FR: "Très bon état",
    EN: "Very Good Condition",
    id: 1,
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  2: { FR: "Bon état", EN: "Good Condition", id: 2, rating: "⭐️⭐️⭐️⭐️" },
  3: {
    FR: "État passable",
    EN: "Passable Condition",
    id: 3,
    rating: "⭐️⭐️⭐️",
  },
  4: { FR: "Mauvais état", EN: "Poor Condition", id: 4, rating: "⭐️⭐️" },
  5: {
    FR: "Très mauvais état",
    EN: "Very Poor Condition",
    id: 5,
    rating: "⭐️",
  },
  6: { FR: "Enlevée/Déplacée", EN: "Removed/Moved", id: 6, rating: "📍" },
};
