import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Homepage/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />

          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
