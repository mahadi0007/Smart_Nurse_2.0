import React, { Component } from "react";
import Logo from "../Shared/img/teresa.png";
import "./LoginBox.css";
import Doctor from "../Shared/img/Dr.jpg";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

export default class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendForm = () => {
    console.log(this.state.email);
    console.log(this.state.password);
  };

  render() {
    return (
      <div className="container-fluid login_background">
        <br />
        <br />
        <div className="container shadow">
          <div className="row main_box bg-white">
            <br />
            <MDBCol sm="6" className="nurse_section  d-none d-lg-block">
              <img
                className="mx-auto d-block teresa-logo"
                src={Logo}
                alt="Teresa Logo"
              />

              <img
                className="mx-auto d-block doctor-image "
                src={Doctor}
                alt=""
              />
            </MDBCol>

            <MDBCol sm="6" className="login_form">
              <div className="d-lg-none">
                <img
                  className="mx-auto d-block teresa-logo "
                  src={Logo}
                  alt="Teresa Logo"
                />
                <br />
              </div>

              <p className="active text-center font-weight-bold login-text">
                Log In
              </p>
              <br />
              <form onSubmit={this.sendForm}>
                <div className="form-group">
                  <div className="input-field">
                    <input
                      type="email"
                      className="form-control rounded-pill   form-input-background "
                      name="email"
                      value={this.state.email}
                      onInput={this.handleInput}
                      id="name"
                      onChange={(e) =>
                        this.setState({
                          email: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor="name">Email</label>
                  </div>

                  <div className="input-field ">
                    <input
                      type="password"
                      className="form-control rounded-pill   form-input-background "
                      name="password"
                      value={this.state.password}
                      onInput={this.handleInput}
                      id="password"
                      onChange={(e) =>
                        this.setState({
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <p className="Forgot_pass">
                    <a href="/forgetPassword" style={{ color: "#2D2E6A" }}>
                      Forgot Password
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="btn btn-block text-white text-center"
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "150px",
                      borderRadius: "1em",
                      height: "35px",
                      backgroundColor: "#0C0C52",
                      fontSize: "14px",
                    }}
                  >
                    LOG IN
                  </button>

                  <p className="h6  text-center" style={{ color: "#292A67" }}>
                    Don't have an account?
                  </p>

                  <a
                    href="/register"
                    className="btn btn-block text-white text-center"
                    style={{
                      marginTop: "20px",
                      marginBottom: "10px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "150px",
                      borderRadius: "1em",
                      height: "35px",
                      backgroundColor: "#0C0C52",
                      fontSize: "14px",
                    }}
                  >
                    SIGN UP
                  </a>
                </div>
              </form>
            </MDBCol>
          </div>
        </div>

        <br />
        <br />
      </div>
    );
  }
}
