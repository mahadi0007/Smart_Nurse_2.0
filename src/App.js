import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Homepage/homepage";
import LoginPage from "./Login/Login";
import registrationPage from "./Registration/Registration";
import ForgotPassPage from "./Forgot Password/Forgot_Password";
import PatientRoutine from "./PatientRoutine/PatientRoutine";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={registrationPage} exact />
          <Route path="/forgot_password" component={ForgotPassPage} exact />
          <Route path="/patientroutine" component={PatientRoutine} exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
