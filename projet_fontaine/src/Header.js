import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleDropDown } from "./redux/actions/viewActions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const { dropDown, language } = useSelector((state) => state.viewState);

  console.log(language);

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <div>Hi</div>
        <MenuButton
          onClick={() => {
            dispatch(toggleDropDown(dropDown));
          }}
        >
          <GiHamburgerMenu size={35} color={"white"} />
        </MenuButton>
        <DropDownMenu view={dropDown}></DropDownMenu>
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


// Set(19) {
//   'Saint-Léonard', 45.5875° N, 73.5970° W
//   'Ahuntsic-Cartierville', 45.5447° N, 73.6681° W
//   'Lachine', 45.4413° N, 73.6886° W
//   'Villeray-Saint-Michel-Parc-Extension', 45.5553° N, 73.6083° W
//   'Verdun', 45.4548° N, 73.5699° W
//   'Le Sud-Ouest', 45.4661° N, 73.5939° W
//   'LaSalle', 45.4306° N, 73.6348° W
//   'Outremont',45.5143° N, 73.6090° W
//   'Plateau-Mont-Royal', 45.5232° N, 73.5870° W
//   'Rivière-des-Prairies-Pointe-aux-Trembles', 45.6731° N, 73.5187° W
//   'Rosemont-La Petite-Patrie', 45.5517° N, 73.5836° W
//   'Côte-des-Neiges-Notre-Dame-de-Grà¢ce', 45.4912° N, 73.6327° W
//   'Mercier-Hochelaga-Maisonneuve', 45.5730° N, 73.5308° W
//   'Anjou', 45.6160° N, 73.5694° W
//   'Ville-Marie',45.5088° N, 73.5553° W
//   'Pierrefonds-Roxboro',45.5096° N, 73.8192° W
//   'Saint-Laurent',45.4986° N, 73.7498° W
//   'Montréal-Nord',45.6072° N, 73.6315° W
//   "L'île-Bizard-Sainte-Geneviève" 45.4949° N, 73.8908° W
// }

