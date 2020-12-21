import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { distance } from "../utils";
import ReactTooltip from "react-tooltip"; // Used to provide text information about tags if icons are unclear
import { Icon, IconWrapper, Tag, TagText } from "../GlobalStyles"; // These are defined in GlobalStyles as I also use them for feedback tag, which appears in another component

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
    ).toFixed(3); // Initiall a number but later converted to a string to include kilometer or meter symbol

    dist > 1
      ? (distanceFrom = `${dist} km`)
      : (distanceFrom = `${dist * 1000} m`); // If distance of marker from user is less than 1 km, number is converted to meters
  }

  return (
    <Wrapper>
      <Tag // Location or park name tag, no conditional rendering as each entry has this field
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
      {proximité && ( // If there is data for the proximité field, tag will render with data
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
      {currentLocation && ( // Current location tag provides distance from user if they allowed their location to be shared - Chrome desktop doesn't seem to be very precise, Firefox is spot on, Safari requires https - won't allow locaton sharing even with local host
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
      {note && ( // If there is a note field i.e. "distanc approx.", this tag will render
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
      {intersection && ( // If there is an intersection field this tag will render -  i.e. "Jeanne-Mance/Mont-Royal"
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
