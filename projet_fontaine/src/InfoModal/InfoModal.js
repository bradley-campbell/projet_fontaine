import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import SingleFountain from "./SingleFountain"
import { Icon } from "react-icons-kit";
import { compass } from "react-icons-kit/ikons/compass";
import { map_delete } from "react-icons-kit/ikons/map_delete";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../redux/actions/viewActions";
import LanguageToggle from "../LanguageToggle";

const Payment = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.viewState);

  console.log(selected);

  const closeModal = () => {
    dispatch(setSelected(null));
  };

  return (
    <Wrapper visible={selected}>
      <Overlay>
        <Content>
          <Buttons>
            <ExitButton onClick={closeModal}>
              <Icon icon={map_delete} size={30} />
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

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  width: 50%;
  min-height: 450px;
  box-shadow: 10px 10px 10px 3px rgba(0,0,0,0.50);


  @media only screen and (max-width: 768px){
   
   width: 80%;

    }
}


`;

const ExitButton = styled.button`
  border: 0;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
