import React, { useRef, useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import Map from "./Map";
import styled from "styled-components";
import Header from "./Header";
import { formatRelative } from "date-fns";
import SingleFountain from "./SingleFountain";
import GlobalStyles from "./GlobalStyles";

function App() {
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
