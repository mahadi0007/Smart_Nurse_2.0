import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import LoginButton from "../img/Login Button.png";
import NotificationIcon from "../img/Notification Icon.png";
import "./NavigationBar.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="my-nav" collapseOnSelect expand="lg" variant="dark">
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Collapse className="justify-content-end">
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
                  href="/upload-prescription"
                >
                  Add Patient
                </NavDropdown.Item>
                <NavDropdown.Item className="justify-content-lg-center text-white">
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

              <Nav.Link className="text-light mt-lg-n2" href="/login">
                <img
                  src={LoginButton}
                  className="ml-n2 ml-lg-0 login-button"
                  alt="Login Button"
                />
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
