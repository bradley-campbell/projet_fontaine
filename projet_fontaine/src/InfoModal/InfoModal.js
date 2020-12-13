import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SingleFountain from "./SingleFountain";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/actions/viewActions";
import LanguageToggle from "../LanguageToggle";
import { Overlay } from "../GlobalStyles";

const Payment = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.viewState);

  const closeModal = () => {
    dispatch(setSelected(null));
  };

  return (
    <Wrapper visible={selected}>
      <Overlay>
        <Content>
          <Buttons>
            <ExitButton onClick={closeModal}>
              <AiOutlineCloseCircle size={30} />
            </ExitButton>
            <LanguageToggle />
          </Buttons>
          <SingleFountain />
        </Content>
      </Overlay>
    </Wrapper>
  );
};

export default Payment;

const Wrapper = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Content = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 50%;
  min-height: 450px;
  box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.50);

  @media only screen and (max-width: 768px){
   
   width: 80%;

    }
}


`;

const ExitButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  :active {
    background-color: #578cad;
  }
`;

const Buttons = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
