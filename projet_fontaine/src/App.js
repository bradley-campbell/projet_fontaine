import React from "react";
import fountains from "./data/fountains";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";

function App() {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const center = {
    lat: 45.534811216839316,
    lng: -73.61851604929831,
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBgPQJ2VHkedQPu5YMsMgLXz0GDe3qPp30",
    libraries,
  });

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        zoom={13}
        mapContainerStyle={mapContainerStyle}
        center={center}
        options={options}
      >
        {fountains.map((marker) => (
          <Marker
            key={marker._id}
            position={{ lat: +marker.Latitude, lng: +marker.Longitude }}
            icon={{
              url: "/drinkingfountain.svg",
              scaledSize: new window.google.maps.Size(25, 25),
              color: "#4287f5",
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default App;
