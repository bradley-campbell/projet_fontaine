import React from "react";
import styled from "styled-components";
import { GiBonsaiTree, GiHamburgerMenu } from "react-icons/gi";
import { setSelected, toggleDropDown } from "./redux/actions/viewActions";
import { useSelector, useDispatch } from "react-redux";
import { boroughs } from "./mapStyles";
import {
  setCenter,
  setFountainData,
  setLanguage,
} from "./redux/actions/viewActions";

const Header = () => {
  const { dropDown, language } = useSelector((state) => state.viewState);

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    dispatch(toggleDropDown(dropDown));
    const { lat, lng } = boroughs[e.target.value];
    dispatch(setCenter({ lat, lng }));
    // set zoom

    const boroughFountains = await fetch(
      `/fountains/${boroughs[e.target.value].borough}`
    );
    const parsed = await boroughFountains.json();
    console.log(parsed);
    dispatch(setFountainData(parsed.data));
  };

  const toggleLanguage = () => {
    const updatedLanguage = language === "français" ? "english" : "français";
    dispatch(setLanguage(updatedLanguage));
  };

  return (
    <>
      <Wrapper>
        <h1>Eau-bot</h1>
        <button onClick={toggleLanguage}>FR/EN</button>
        <MenuButton
          onClick={() => {
            dispatch(toggleDropDown(dropDown));
          }}
        >
          <GiHamburgerMenu size={35} color={"white"} />
        </MenuButton>
        <DropDownMenu view={dropDown}>
          <label for="boroughs">
            {language === "français"
              ? "Choissisez une arrondissement"
              : "Choose a borough"}
          </label>
          <select name="boroughs" onChange={handleChange} autoFocus={true}>
            {Object.values(boroughs).map((item) => {
              return <option value={item.id}>{item.borough}</option>;
            })}
          </select>
        </DropDownMenu>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.div`
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
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 7.5vh;
  left: 0;
  width: 100vw;
  height: 25vh;
  background-color: rgba(150, 191, 246, 0.75);
  border-bottom: 2px white solid;
  visibility: ${(props) => (props.view ? "visible" : "hidden")};
`;
