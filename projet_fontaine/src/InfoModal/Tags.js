import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { distance } from "../utils";
import ReactTooltip from "react-tooltip";

const Tags = () => {
  const {
    currentLocation,
    selected: { intersection, proximité, nom_parc_lieu, note, état, lat, lng },
  } = useSelector((state) => state.viewState);

  const { language } = useSelector((state) => state.viewState);

  let distanceFrom = null;

  if (currentLocation) {
    const dist = distance(
      currentLocation.lat,
      currentLocation.lng,
      lat,
      lng
    ).toFixed(3);

    dist > 1
      ? (distanceFrom = `${dist} km`)
      : (distanceFrom = `${dist * 1000} m`);
  }

  return (
    <Wrapper>
      <Tag
        style={{ backgroundColor: "#B4DC69" }}
        data-tip={
          language === "français"
            ? "Nom du parc ou lieu"
            : "Park or location name"
        }
      >
        <IconWrapper>
          <Icon src="/park.svg" alt="park location icon" />
        </IconWrapper>
        <span>{nom_parc_lieu}</span>
      </Tag>
      {proximité && (
        <Tag
          style={{ backgroundColor: "orange" }}
          data-tip={language === "français" ? "À proximité" : "Proximity to"}
        >
          <IconWrapper>
            <Icon src="/proximity.svg" alt="map proximity icon" />
          </IconWrapper>
          <span>{proximité}</span>
        </Tag>
      )}
      {/* <Tag
        style={{ backgroundColor: "#96BFF6" }}
        data-tip={language === "français" ? "État" : "Condition"}
      >
        <IconWrapper>
          <Icon src="/rating.svg" alt="5 stars rating icon" />
        </IconWrapper>
        <span>{état}</span>
      </Tag> */}
      {currentLocation && (
        <Tag
          style={{ backgroundColor: "orange" }}
          data-tip={
            language === "français"
              ? "Distance approximative"
              : "Approximate distance"
          }
        >
          <IconWrapper>
            <Icon src="/distance.svg" alt="distance between two points icon" />
          </IconWrapper>
          <span>{distanceFrom}</span>
        </Tag>
      )}
      {note && (
        <Tag
          style={{ backgroundColor: "orange" }}
          data-tip={language === "français" ? "Remarque" : "Note"}
        >
          <IconWrapper>
            <Icon src="/note.svg" alt="note pad icon" />
          </IconWrapper>
          <span>{note}</span>
        </Tag>
      )}
      {intersection && (
        <Tag style={{ backgroundColor: "yellow" }} data-tip="Intersection">
          <IconWrapper>
            <Icon src="/intersection.svg" alt="road intersection icon" />
          </IconWrapper>
          <span>{intersection}</span>
        </Tag>
      )}
      <ReactTooltip />
    </Wrapper>
  );
};

export default Tags;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
