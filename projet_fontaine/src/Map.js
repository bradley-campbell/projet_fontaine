import React, { useCallback, useEffect, useRef, useState } from "react";
import mapStyles, { options } from "./mapStyles";
import { useSelector, useDispatch } from "react-redux";
import {
  setCenter,
  setFountainData,
  setSelected,
} from "./redux/actions/viewActions";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Info from "./Info";

const Map = () => {
  const { center, fountainData, selected, zoom } = useSelector(
    (state) => state.viewState
  );

  const dispatch = useDispatch();

  const libraries = ["places"];

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
      mapContainerStyle={{
        width: "100vw",
        height: "85vh",
      }}
      center={center}
      options={options}
      zoom={zoom}
    >
      {fountainData.map((marker) => (
        <Marker
          key={marker._id}
          position={{ lat: +marker.lat, lng: +marker.lng }}
          icon={{
            url: "/droppinlight.svg",
            scaledSize: new window.google.maps.Size(35.4, 54.2),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17.7, 54.2),
          }}
          onClick={() => {
            dispatch(setSelected(marker));
          }}
        />
      ))}

      {/* {selected ? <Info /> : null} */}
    </GoogleMap>
  );
};

export default Map;
