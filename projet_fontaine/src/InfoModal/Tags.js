import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { distance } from "../utils";

const Tags = () => {
  const {
    currentLocation,
    selected: { intersection, proximité, nom_parc_lieu, note, état, lat, lng },
  } = useSelector((state) => state.viewState);

  return (
    <Wrapper>
      <Tag style={{ backgroundColor: "#B4DC69" }}>
        <IconWrapper>
          <Icon src="/park.svg" alt="park location icon" />
        </IconWrapper>
        <span>{nom_parc_lieu}</span>
      </Tag>
      {proximité && (
        <Tag style={{ backgroundColor: "orange" }}>
          <IconWrapper>
            <Icon src="/proximity.svg" alt="map proximity icon" />
          </IconWrapper>
          <span>{proximité}</span>
        </Tag>
      )}
      <Tag style={{ backgroundColor: "#96BFF6" }}>
        <IconWrapper>
          <Icon src="/rating.svg" alt="5 stars rating icon" />
        </IconWrapper>
        <span>{état}</span>
      </Tag>
      {currentLocation && (
        <Tag style={{ backgroundColor: "orange" }}>
          <IconWrapper>
            <Icon src="/distance.svg" alt="distance between two points icon" />
          </IconWrapper>
          <span>
            {distance(
              currentLocation.lat,
              currentLocation.lng,
              lat,
              lng
            ).toFixed(3)}{" "}
            km
          </span>
        </Tag>
      )}
      {note && (
        <Tag style={{ backgroundColor: "orange" }}>
          <IconWrapper>
            <Icon src="/note.svg" alt="note pad icon" />
          </IconWrapper>
          <span>{note}</span>
        </Tag>
      )}
      {intersection && (
        <Tag style={{ backgroundColor: "yellow" }}>
          <IconWrapper>
            <Icon src="/intersection.svg" alt="road intersection icon" />
          </IconWrapper>
          <span>{intersection}</span>
        </Tag>
      )}
    </Wrapper>
  );
};

export default Tags;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 15vh;
  overflow: scroll;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;

  align-items: center;
  min-width: 75px;
  padding: 5px;
  margin: 5px 10px 5px 10px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);

  @media only screen and (max-width: 768px) {
    min-width: 50px;
    padding: 2.5px;
    margin: 5px 5px 5px 5px;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: auto;

  @media only screen and (max-width: 768px) {
    height: 15px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 50%;
  margin: 0 10px 0 10px;

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin: 0 5px 0 5px;
  }
`;
