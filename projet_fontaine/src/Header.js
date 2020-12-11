import React, { useEffect } from "react";
import styled from "styled-components";
import { GiBonsaiTree, GiHamburgerMenu } from "react-icons/gi";
import {
  setSelected,
  setZoom,
  toggleDropDown,
} from "./redux/actions/viewActions";
import { useSelector, useDispatch } from "react-redux";
import { boroughs } from "./mapStyles";
import {
  setCenter,
  setFountainData,
  setCurrentLocation,
} from "./redux/actions/viewActions";

import LanguageToggle from "./LanguageToggle";
import { Icon } from "react-icons-kit";
import { compass } from "react-icons-kit/ikons/compass";
import BoroughSelect from "./BoroughSelect";

const Header = () => {
  const dispatch = useDispatch();

  const { dropDown } = useSelector((state) => state.viewState);

  const setLocation = () => {
    console.log("location");
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(setZoom(16));
      dispatch(
        setCurrentLocation({
          // Sets current location to state to allow for giving approx distance - seems less accurate on desktop, will test on mobile
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
      dispatch(
        setCenter({
          // Sets map center point to users approximate current location
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    });
  };

  return (
    <>
      <Wrapper>
        <MenuButton
          className="mobile"
          onClick={() => dispatch(toggleDropDown(dropDown))}
        >
          <GiHamburgerMenu size={25} color={"white"} />
        </MenuButton>
        <LogoDiv>
          <AvatarDiv>
            <Avatar src="Eaubot-full.svg" />
          </AvatarDiv>
          <h2 className="desktop">Eau-bot</h2>
        </LogoDiv>
        <LangMenu>
          <LangToggle className="desktop">
            <LanguageToggle />
          </LangToggle>
          <MenuButton onClick={setLocation}>
            <Icon icon={compass} size={window.innerWidth > 768 ? 40 : 30} />
          </MenuButton>
        </LangMenu>
      </Wrapper>
      <DropDownMenu className="mobile" view={dropDown}>
        <BoroughSelect />
        <LanguageToggle />
      </DropDownMenu>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  height: 7.5vh;
  max-height: 100px;
  width: 100vw;
  background-color: #96bff6;
  z-index: 10;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;

  .desktop {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile {
    display: none;

    @media only screen and (max-width: 768px) {
      display: inline;
    }
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  color: white;
  cursor: pointer;
  outline: none;

  :active {
    background-color: #578cad; // just testing this out, TODO change button colors when clicked
  }
`;

const LangMenu = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  height: 6vh;
  max-height: 60px;
  width: auto;

  @media only screen and (max-width: 768px) {
    height: 50px;
    width: auto;
  }
`;

const AvatarDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #231f20;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);
  width: 6.8vh;
  height: 6.8vh;
  max-width: 68px;
  max-height: 68px;
  border-radius: 50%;
  margin-right: 15px;

  @media only screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-top: 10px;
  }
`;

const LogoDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 7.5vh;
  left: 0;
  width: 100vw;
  background-color: rgba(150, 191, 246, 0.75);
  border-bottom: 2px #96bff6 solid;
  z-index: 15;
  visibility: ${(props) => (props.view ? "visible" : "hidden")};
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline;
  }
`;

const LangToggle = styled.div``;
