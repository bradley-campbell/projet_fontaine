import React, { useEffect } from "react";
import "normalize.css"; // CSS Reset
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setFountainData } from "./redux/actions/viewActions";
import Map from "./Map";
import Header from "./Header";
import Modal from "./InfoModal/InfoModal";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; May need this to create landing page

function App() {
  const dispatch = useDispatch();

  const handleFetch = async () => {
    const data = await fetch("/all");
    const parsed = await data.json();
    dispatch(setFountainData(parsed.data));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Wrapper>
      <Header />
      <GlobalStyles />
      <Map />
      <Modal />
      <Footer />
    </Wrapper>
  );
  // Add landing page route /home ?
}

export default App;

const Wrapper = styled.div``;
