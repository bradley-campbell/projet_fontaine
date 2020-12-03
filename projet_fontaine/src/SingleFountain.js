import React from "react";
import styled from "styled-components";

const fountain = {
  _id: "43",
  Arrondissement: "Ahuntsic-Cartierville",
  Nom_parc_lieu: "Prieur",
  Proximité_jeux_repère: "Jardins communautaires",
  Intersection: "rue Sackville/rue Prieur Est",
  Etat: "inconnu",
  Remarque: "accès restreint",
  Precision_localisation: "orthophotographies",
  X: "293151.73",
  Y: "5048680.08",
  Longitude: "-73.64925573",
  Latitude: "45.57793119",
};

const SingleFountain = () => {
  return (
    <Wrapper>
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${+fountain.Latitude},${+fountain.Longitude}&size=300x300&format=jpeg&language=french&markers=icon:/projet_fontaine/public/fountainpin.svg|${+fountain.Latitude},${+fountain.Longitude}&zoom=18&key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }&map_id=12483901aee2b3ef`}
      />
    </Wrapper>
  );
};

export default SingleFountain;

const Wrapper = styled.div`
  margin: 7.5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
// &key=YOUR_API_KEY
