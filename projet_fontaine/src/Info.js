import React from "react";
import styled from "styled-components";
import { InfoWindow } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./redux/actions/viewActions";

const Info = () => {
  const { selected } = useSelector((state) => state.viewState);
  const dispatch = useDispatch();
  
  return (
    <InfoWindow
      position={{ lat: +selected.Latitude, lng: +selected.Longitude }}
      onCloseClick={() => {
        dispatch(setSelected(null));
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
  );
};

export default Info;
