import React, { useEffect } from "react";
import "normalize.css"; // CSS Reset
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  setCurrentLocation,
  setFountainData,
} from "./redux/actions/viewActions";
import Map from "./Reusable/Map";
import Header from "./Header";
import Modal from "./InfoModal/InfoModal";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";

function App() {
  const dispatch = useDispatch();

  const handleFetch = async () => {
    const data = await fetch("/all");
    const parsed = await data.json();
    dispatch(setFountainData(parsed.data));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );
    });
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
}

export default App;

const Wrapper = styled.div``;
