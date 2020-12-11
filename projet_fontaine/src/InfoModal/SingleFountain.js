import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { condition, options } from "../mapStyles";
import { useDispatch, useSelector } from "react-redux";
import Tags from "./Tags";
import FeedbackForm from "./FeedbackForm";


import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { setFountainData, setSelected } from "../redux/actions/viewActions";

const SingleFountain = () => {
  const [fountain, setFountain] = useState({});
  const id = 12;
  const dispatch = useDispatch();

  const { language, selected } = useSelector((state) => state.viewState);

  const libraries = ["places"];

  const handleFetch = async () => {
    const data = await fetch(`/fountain/${id}`);
    let response = await data.json();
    setFountain(response.data);
  };

  useEffect(() => {
    setFountain(selected);
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

  return !selected ? (
    <div>loading</div>
  ) : (
    <Wrapper>
      <h3 style={{ color: "grey" }}>
        {language === "français" ? "Arrondissement:" : "Borough:"}
        {selected.arrondissement}
      </h3>
      <FeedbackForm />

      <Map>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "30vh",
          }}
          center={{ lat: +selected.lat, lng: +selected.lng }}
          options={options}
          zoom={17}
        >
          <Marker
            position={{ lat: +selected.lat, lng: +selected.lng }}
            icon={{
              url: "Eaubot-full.svg",
              scaledSize: new window.google.maps.Size(35.4, 54.2),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17.7, 54.2),
            }}
          />
        </GoogleMap>
      </Map>
      <Tags />
    </Wrapper>
  );
};

export default SingleFountain;

const Wrapper = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Map = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);
  margin: 10px 0 10px 0;
`;

const Form = styled.form``;

const Info = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding-left: 25px;
`;

// https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
// &key=YOUR_API_KEY
