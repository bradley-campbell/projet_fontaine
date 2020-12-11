import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { boroughs } from "./mapStyles";
import { setCenter, setFountainData } from "./redux/actions/viewActions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TwitterFollowButton } from "react-twitter-embed";
import LanguageToggle from "./LanguageToggle";
import BoroughSelect from "./BoroughSelect";

const Footer = () => {
  return (
    <Wrapper>
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
