import React from "react";
import { options } from "../mapStyles";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../redux/actions/viewActions";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { center, fountainData, zoom, currentLocation } = useSelector(
    (state) => state.viewState
  );

  const dispatch = useDispatch();

  const libraries = ["places"];

  const handleSelect = async (_id) => {
    let fountain = await fetch(`/fountain/${_id}`); // Individual fountain data is fetched on selection, this ensures that the data displayed is the most up to date without having to re-fetch the entire DB
    fountain = await fountain.json();
    dispatch(setSelected(fountain.data));
  };

  const { isLoaded, loadError } = useLoadScript(
    {
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Create react app can access keys from .env files beginning with REACT_APP without needing to require "dotenv"
      libraries,
    },
    []
  );

  if (loadError) return "Error Loading Maps"; // If there's a loading error, will return message - may create a component for this
  if (!isLoaded) return "Loading Maps"; // While loading, displays loading message, map loads very fast but may not for slower connections, may create loading screen

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100vw",
        height: window.innerWidth > 768 ? "85vh" : "92.5vh", // Height will vary depending on screen size - Footer is larger on desktop than mobile
      }}
      center={center} // Found in Redux store
      options={options} // Imported from mapStyles.js
      zoom={zoom} // Found in Redux Store
    >
      {fountainData.map((marker) => (
        <Marker
          key={marker._id}
          position={{ lat: +marker.lat, lng: +marker.lng }} // In DB, lat + lng are strings - prefixed them with +, which converts them to numbers
          icon={{
            url: "/droppinlight.svg",
            scaledSize: new window.google.maps.Size(35.4, 54.2),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17.7, 54.2), // Off sets pin location to make sure the tip is at pointing at the location instead of being centered on top of it.
          }}
          onClick={() => {
            handleSelect(marker._id);
          }}
        />
      ))}
      {currentLocation && (
        <Marker
          position={{ lat: currentLocation.lat, lng: currentLocation.lng }} // If the user has consented to sharing their location, a pin is added to the map with their current location - currently the default pin (red), may change to a custom pin
        />
      )}
    </GoogleMap>
  );
};

export default Map;
