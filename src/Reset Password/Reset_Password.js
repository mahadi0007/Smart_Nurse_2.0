import React, { Component } from "react";
import Logo from "../Shared/img/teresa.png";
import "./Reset_Password.css";
import Doctor from "../Shared/img/Nurse.png";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { Helmet } from "react-helmet";
export default class Reset_Password extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      confirm_password: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendForm = (e) => {
    e.preventDefault();
    console.log(this.state.password);
    console.log(this.state.confirm_password);
  };
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Reset Passowrd</title>
        </Helmet>
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
                  style={{ marginTop: 20 }}
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
                  Reset Password
                </p>
                <div className="col-lg-8 forgot-pass-text">
                  <p className="h5  text-center" style={{ color: "#292A67" }}>
                    Enter your new password
                  </p>
                  <br />
                </div>

                <form className="form-group-fPass" onSubmit={this.sendForm}>
                  <div className="input-field">
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
                    <label className="login-input-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  <div className="input-field">
                    <input
                      type="password"
                      className="form-control rounded-pill   form-input-background "
                      name="confirm_password"
                      value={this.state.confirm_password}
                      onInput={this.handleInput}
                      id="confirm_password"
                      onChange={(e) =>
                        this.setState({
                          confirm_password: e.target.value,
                        })
                      }
                      required
                    />
                    <label
                      className="login-input-label"
                      htmlFor="confirm_password"
                    >
                      Confirm Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block text-white text-center"
                    style={{
                      marginTop: "15px",
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
                    SEND
                  </button>
                </form>
              </MDBCol>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    );
  }
}
