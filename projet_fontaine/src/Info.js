import React from "react";
import styled from "styled-components";
import { InfoWindow } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "./redux/actions/viewActions";
import { Link } from "react-router-dom";
import { formatRelative } from "date-fns";

const Info = () => {
  const { selected, language } = useSelector((state) => state.viewState);
  const dispatch = useDispatch();

  

  return (
    <InfoWindow
      position={{ lat: +selected.lat, lng: +selected.lng }}
      onCloseClick={() => {
        dispatch(setSelected(null));
      }}
    >
      <div>
        <h2>
          {language === "français" ? "Arrondissement: " : "Borough: "}
          {selected.arrondissement}
        </h2>
        <p>{selected.nom_parc_lieu}</p>
        <p>{selected.proximité}</p>
        <p>Intersection: {selected.intersection}</p>
        <p>{selected._id}</p>
        <Link to={`/fountain/${selected._id}`}>More info</Link>
      </div>
    </InfoWindow>
  );
};

export default Info;
