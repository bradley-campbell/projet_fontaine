import React, { useEffect } from "react";
import styled from "styled-components";
import { GiBonsaiTree, GiHamburgerMenu } from "react-icons/gi";
import { setSelected, toggleDropDown } from "./redux/actions/viewActions";
import { useSelector, useDispatch } from "react-redux";
import { boroughs } from "./mapStyles";
import {
  setCenter,
  setFountainData,
  setCurrentLocation,
} from "./redux/actions/viewActions";

import LanguageToggle from "./LanguageToggle";
import { useHistory } from "react-router-dom";
import PrimarySearchBar from "./AppBar";
import { Icon } from "react-icons-kit";
import { compass } from "react-icons-kit/ikons/compass";

const Header = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {  // Sets current location on mount - if user has geolocation enable... Might change this 
    setLocation();
  }, []);

  const setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        setCurrentLocation({  // Sets current location to state to allow for giving approx distance - seems less accurate on desktop, will test on mobile
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
      dispatch(
        setCenter({ // Sets map center point to users approximate current location
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    });
  };

  return (
    <>
      <Wrapper>
        <LogoDiv>
          <AvatarDiv>
            <Avatar src="Eaubot-full.svg" />
          </AvatarDiv>

          <p>EAU-bot</p>
        </LogoDiv>
        <LangMenu>
          <LanguageToggle />
          <MenuButton onClick={setLocation}>
            <Icon icon={compass} size={30} />
          </MenuButton>
        </LangMenu>
      </Wrapper>
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
  width: 100vw;
  background-color: #96bff6;
  z-index: 10;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  cursor: pointer;

  :active {
    color: yellow; // just testing this out, TODO change button colors when clicked
  }
`;

const LangMenu = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  height: 50px;
  width: auto;
`;

const AvatarDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00308f;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, 0.42);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const LogoDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
