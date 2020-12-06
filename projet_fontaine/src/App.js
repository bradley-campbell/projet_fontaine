import React, { useRef, useCallback, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import Map from "./Map";
import styled from "styled-components";
import Header from "./Header";
import { formatRelative } from "date-fns";
import SingleFountain from "./SingleFountain";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { setFountainData } from "./redux/actions/viewActions";

function App() {
  const dispatch = useDispatch();

  const handleFetch = async () => {
    const data = await fetch("/all");
    const parsed = await data.json();
    console.log(parsed);
    dispatch(setFountainData(parsed.data));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Wrapper>
      <Router>
        <Header />
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Map />
          </Route>
          <Route exact path="/fountain/:id">
            <SingleFountain />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
