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
