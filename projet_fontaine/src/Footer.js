import React from "react";
import styled from "styled-components";
import { TwitterFollowButton } from "react-twitter-embed";
import BoroughSelect from "./Reusable/BoroughSelect";

const Footer = () => {
  return (
    <Wrapper>
      {/* BoroughSelect only visible in desktop version, appears in dropdown menu in mobile version */}
      <BoroughSelect />
      <TwitterFollowButton screenName={"eau_bot"} />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  padding: 15px;
  background-color: #96bff6;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    height: 7.5vh;

    .desktop {
      display: none;
    }
  }
`;
