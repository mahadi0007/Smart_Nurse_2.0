import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import LoginButton from "../img/Login Button.png";
import LogoutButton from "../img/Logout Button.png";
import auth from "../Auth/auth";
import { Cookies } from "react-cookie";
import axios from "axios";
import "./NavigationBar.css";
import { Redirect } from "react-router";
import apiCalendar from "../../PatientRoutine/components/ApiCalendar";

export default class NavigationBar extends Component {
  cookies = new Cookies();
  constructor(props) {
    super(props);

    this.state = {
      loggedin: auth.isLoggedIn,
      showSpinner: false, //loading spinner
      showBtn: true, // Button
      redirect: false, //redirect to homepage if logout
    };
    console.log("cookie1: " + auth.isLoggedIn);
  }

  logoutHandler = async (e) => {
    this.setState({
      showSpinner: true, //loading spinner
      showBtn: false, // Button
    });
    try {
      const response = await axios.post(
        "https://smart-nurse-test.herokuapp.com/logout",
        {
          id: auth.userId,
        }
      );

      this.setState({
        showSpinner: false, //loading spinner
        showBtn: true, // Button
      });
      console.log(response.data.message);
      auth.userId = null;
      auth.firstName = null;
      auth.token = null;
      auth.isLoggedIn = false;
      this.cookies.remove("userId", { path: "/" });
      this.cookies.remove("token", { path: "/" });
      this.cookies.remove("isLoggedIn", { path: "/" });
      this.cookies.remove("firstName", { path: "/" });
      if (apiCalendar.sign) {
        apiCalendar.handleSignoutClick();
        this.cookies.remove("googleSignedIn", { path: "/" });
      }

      this.setState({
        redirect: true,
        loggedin: false,
      });
      console.log("cookie2: " + this.state.loggedin);
      window.location.reload(false);
    } catch (error) {
      this.setState({
        showSpinner: false, //loading spinner
        showBtn: true, // Button
      });
      console.log(error);
    }
  };

  render() {
    //redirect to homepage after logout
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Navbar
        sticky="top"
        className="my-nav"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav.Link className="text-light" href="#features">
            Home
          </Nav.Link>

          <NavDropdown
            className="justify-content-center"
            title={
              <span
                className="dropdown-toggle text-white"
                data-toggle="dropdown"
                style={{ backgroundColor: "#020624" }}
              >
                Service
                <i className="fa fa-angle-down ml-1"></i>
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="justify-content-lg-center text-white"
              href="/addpatient"
            >
              Add Patient
            </NavDropdown.Item>
            <NavDropdown.Item
              className="justify-content-lg-center text-white"
              href="/patientroutine"
            >
              Patinent Routine
            </NavDropdown.Item>
            <NavDropdown.Item className="justify-content-lg-center text-white"></NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="text-light" href="#features">
            About
          </Nav.Link>

          <Nav.Link className="text-light" href="#features">
            Contact
          </Nav.Link>

          {this.state.showSpinner ? ( //show loading spinner
            <div class="spinner-border  text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : null}

          {this.state.showBtn ? (
            this.state.loggedin ? (
              <img
                itemType="Button"
                src={LogoutButton}
                onClick={this.logoutHandler}
                className="ml-n2 ml-lg-0 login-button mt-lg-n1"
                alt="Login Button"
              />
            ) : (
              <Nav.Link className="text-light mt-lg-n2" href="/login">
                <img
                  src={LoginButton}
                  className="ml-n2 ml-lg-0 login-button"
                  alt="Login Button"
                />
              </Nav.Link>
            )
          ) : null}

          <Nav.Link className="text-light mt-lg-n2" href="/edit_profile">
            <img
              src={Avatar}
              className="ml-n2 ml-lg-0 profile"
              alt="Login Button"
            />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
