import React, { useEffect } from "react";
import "normalize.css"; // CSS Reset
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setFountainData } from "./redux/actions/viewActions";
import Map from "./Reusable/Map";
import Header from "./Header";
import Modal from "./InfoModal/InfoModal";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

function App() {
  const dispatch = useDispatch();

  const handleFetch = async () => {
    const data = await fetch("/all"); // GET request to backend for fountain data
    const parsed = await data.json();
    dispatch(setFountainData(parsed.data)); // Set data to Redux store where maps API will access it to place markers
  };

  useEffect(() => {
    handleFetch(); // Fetch done at top level component to ensure data is in Redux store when sub components need it
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
}

export default App;

const Wrapper = styled.div``;
