import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Registration.css";
import Logo from "../Shared/img/teresa.png";
import Doctor from "../Shared/img/Dr.jpg";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import { Dropdown } from "react-bootstrap";
import { Last } from "react-bootstrap/PageItem";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      f_name: "",
      l_name: "",
      email: "",
      gender: "",
      age: "",
      password: "",
      confirm_password: "",
      phone: "",
      height: "",
      weight: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendForm = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.f_name);
    console.log(this.state.l_name);
    console.log(this.state.gender);
    console.log(this.state.age);
    console.log(this.state.confirm_password);
    console.log(this.state.phone);
    console.log(this.state.height);
    console.log(this.state.weight);
  };

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registration</title>
        </Helmet>

        <div className="container-fluid register_background">
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

                <p className="active text-center font-weight-bold signup-text">
                  Create Account
                </p>

                <form className="form-group-reg" onSubmit={this.sendForm}>
                  <div className="form-row">
                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="text"
                          className="form-control rounded-pill   form-input-background "
                          name="f_name"
                          value={this.state.f_name}
                          onInput={this.handleInput}
                          id="f_name"
                          onChange={(e) =>
                            this.setState({
                              f_name: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="f_name">
                          First Name
                        </label>
                      </div>
                    </MDBCol>

                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="text"
                          className="form-control rounded-pill   form-input-background "
                          name="l_name"
                          value={this.state.l_name}
                          onInput={this.handleInput}
                          id="l_name"
                          onChange={(e) =>
                            this.setState({
                              l_name: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="l_name">
                          Last Name
                        </label>
                      </div>
                    </MDBCol>
                  </div>
                  <div className="form-row">
                    <MDBCol sm="6">
                      <label className="Gender_Label" htmlFor="gender">
                        {this.state.gender == "" ? "" : "Gender"}
                      </label>
                      <select
                        defaultValue="Gender"
                        id="gender"
                        className="form-control rounded-pill   form-input-background "
                        value={this.state.value}
                        onChange={(e) =>
                          this.setState({
                            gender: e.target.value,
                          })
                        }
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </MDBCol>

                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="number"
                          className="form-control rounded-pill   form-input-background "
                          name="age"
                          value={this.state.age}
                          onInput={this.handleInput}
                          id="age"
                          onChange={(e) =>
                            this.setState({
                              age: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="age">
                          Age
                        </label>
                      </div>
                    </MDBCol>
                  </div>
                  <div className="form-row">
                    <MDBCol sm="6">
                      <div className="input-field-reg">
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
                        <label className="input-label" htmlFor="name">
                          Email
                        </label>
                      </div>
                    </MDBCol>

                    <MDBCol sm="6">
                      <div className="input-field-reg ">
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
                        <label className="input-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                    </MDBCol>
                  </div>
                  <div className="form-row">
                    <MDBCol sm="6">
                      <div className="input-field-reg ">
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
                          className="input-label"
                          htmlFor="confirm_password"
                        >
                          Confirm Password
                        </label>
                      </div>
                    </MDBCol>

                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="tel"
                          className="form-control rounded-pill   form-input-background "
                          name="phone"
                          value={this.state.phone}
                          onInput={this.handleInput}
                          id="phone"
                          onChange={(e) =>
                            this.setState({
                              phone: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="phone">
                          Phone Number
                        </label>
                      </div>
                    </MDBCol>
                  </div>
                  <div className="form-row">
                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="number"
                          className="form-control rounded-pill   form-input-background "
                          name="height"
                          value={this.state.height}
                          onInput={this.handleInput}
                          id="height"
                          onChange={(e) =>
                            this.setState({
                              height: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="height">
                          Height
                        </label>
                      </div>
                    </MDBCol>

                    <MDBCol sm="6">
                      <div className="input-field-reg">
                        <input
                          type="number"
                          className="form-control rounded-pill   form-input-background "
                          name="weight"
                          value={this.state.weight}
                          onInput={this.handleInput}
                          id="weight"
                          onChange={(e) =>
                            this.setState({
                              weight: e.target.value,
                            })
                          }
                          required
                        />
                        <label className="input-label" htmlFor="weight">
                          Weight
                        </label>
                      </div>
                    </MDBCol>
                  </div>

                  <label className="Register-as">Register As</label>

                  <div className="form-row">
                    <MDBCol size="1">
                      <input
                        className="radio-btn"
                        type="radio"
                        value="Guardian"
                        name="userRole"
                        id="userRole"
                      />
                    </MDBCol>

                    <MDBCol size="2" className="abc">
                      <label htmlFor="userRole">Guardian</label>
                    </MDBCol>

                    <MDBCol size="1">
                      <input
                        className="radio-btn"
                        type="radio"
                        value="MALE"
                        name="gender"
                        id="userRole"
                      />
                    </MDBCol>

                    <MDBCol size="2" className="abc">
                      <label htmlFor="userRole">Patient</label>
                    </MDBCol>
                  </div>

                  <br />

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
                    SIGN UP
                  </button>
                  <p className="h6  text-center" style={{ color: "#292A67" }}>
                    Already have an account?
                  </p>
                  <a
                    href="/login"
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
                    LOG IN
                  </a>
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
