import Cart from "./Cart/Cart";
import ThankYou from "./Cart/ThankYou";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Homepage/HomePage";
import GlobalStyles from "./Globalstyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/thankyou">
            <ThankYou/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Wrapper = styled.div``;
export default App;
