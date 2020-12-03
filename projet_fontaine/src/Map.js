import React, { useCallback, useEffect, useRef, useState } from "react";
import mapStyles from "./mapStyles";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = () => {
  const [fountains, setFountains] = useState([]);

  const handleFetch = async () => {
    const data = await fetch("/all");
    const parsed = await data.json();
    setFountains(parsed.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

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
  const [selected, setSelected] = useState(null);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const { isLoaded, loadError } = useLoadScript(
    {
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
    },
    []
  );

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap
      zoom={14}
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={options}
    >
      {fountains.map((marker) => (
        <Marker
          key={marker._id}
          position={{ lat: +marker.Latitude, lng: +marker.Longitude }}
          icon={{
            url: "/fountainpin.svg",
            scaledSize: new window.google.maps.Size(35.4, 54.2),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17.7, 54.2),
          }}
          onClick={() => {
            setSelected(marker);
          }}
        />
      ))}

      {selected ? (
        <InfoWindow
          position={{ lat: +selected.Latitude, lng: +selected.Longitude }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>{selected.Arrondissement}</h2>
            <p>{selected.Nom_parc_lieu}</p>
            <p>{selected.Proximité_jeux_repère}</p>
            <p>Intersection: {selected.Intersection}</p>
            <p>{selected._id}</p>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
