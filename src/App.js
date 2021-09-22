import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Teste from "components/Test.js";

export default function App() {
  return (
    <MainContainer>
      <Router>
        <Switch>
          <Route path="/health"> OK </Route>
          <Route path="/">
            <Teste />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
`;
