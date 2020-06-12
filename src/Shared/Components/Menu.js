import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import LoginButton from "../img/Login Button.png";
import NotificationIcon from "../img/Notification Icon.png";
import "./Menu.css";

const Menu = () => {
  const [visible, setVisible] = useState(false);
  const searchButtonClick = () => {
    setVisible(!visible);
  };
  return (
    <Navbar className="my-nav" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="100"
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i className="fas fa-bars text-light"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav ml-auto">
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              My Health Record
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            className="justify-content-center"
            title={
              <span
                className="dropdown-toggle text-white"
                data-toggle="dropdown"
                style={{ backgroundColor: "#020624" }}
              >
                Buy Medicine
                <i className="fa fa-angle-down ml-1"></i>
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              className="justify-content-lg-center text-white"
              href="/upload-prescription"
            >
              Upload Prescription
            </NavDropdown.Item>
            <NavDropdown.Item className="justify-content-lg-center text-white">
              Medicine
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              Set Reminder
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light mt-lg-n2" href="/login">
              <img
                src={LoginButton}
                className="ml-n2 ml-lg-0 login-button"
                alt="Login Button"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              <img
                className="mt-lg-n2 ml-3 ml-lg-0 notification-button"
                src={NotificationIcon}
                alt="Notification Icon"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-light" href="/">
              <img
                className="ml-3 ml-lg-0 mt-0 mt-lg-n2 avatar-icon"
                src={Avatar}
                alt="Avatar"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <i
              className="fas fa-search mt-4 mt-lg-1 mt-xl-2 ml-4 ml-xl-0"
              onClick={function () {
                searchButtonClick();
              }}
            ></i>
          </Nav.Item>
          <form
            className={"search-form-nav " + (visible ? "visible" : "invisible")}
            role="search"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </form>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
