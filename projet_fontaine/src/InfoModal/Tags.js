import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { distance } from "../utils";
import ReactTooltip from "react-tooltip";
import { Icon, IconWrapper, Tag, TagText } from "../GlobalStyles";

const Tags = () => {
  const {
    currentLocation,
    selected: { intersection, proximité, nom_parc_lieu, note, lat, lng },
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
        <TagText>
          <span>{nom_parc_lieu}</span>
        </TagText>
      </Tag>
      {proximité && (
        <Tag
          style={{ backgroundColor: "orange" }}
          data-tip={language === "français" ? "À proximité" : "Proximity to"}
        >
          <IconWrapper>
            <Icon src="/proximity.svg" alt="map proximity icon" />
          </IconWrapper>
          <TagText>
            <span>{proximité}</span>{" "}
          </TagText>
        </Tag>
      )}
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
          <TagText>
            <span>{distanceFrom}</span>{" "}
          </TagText>
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
          <TagText>
            <span>{note}</span>{" "}
          </TagText>
        </Tag>
      )}
      {intersection && (
        <Tag style={{ backgroundColor: "yellow" }} data-tip="Intersection">
          <IconWrapper>
            <Icon src="/intersection.svg" alt="road intersection icon" />
          </IconWrapper>
          <TagText>
            <span>{intersection}</span>{" "}
          </TagText>
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
  overflow: scroll;
  height: fit-content;
  width: 100%;
`;
