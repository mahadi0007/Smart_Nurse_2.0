import React, { Component } from "react";
import "./Edit_Profile_Form.css";
import { MDBCol } from "mdbreact";
import axios from "axios";
import auth from "../../Shared/Auth/auth";
import ErrorModal from "../../Shared/Components/ErrorModal";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      f_name: "",
      l_name: "",
      age: "",
      weight: "",
      height: "",
      phone: "",
      email: "",
      current_pass: "",
      new_pass: "",
      confirm_new_pass: "",
      response_message: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  errorHandler = () => {
    this.setState({
      response_message: "", //clear API response message after clicking okay
    });
  };

  componentDidMount = async (e) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/" + "users/" + auth.userId
      );
      // console.log(response.data)

      this.setState({
        f_name: response.data.user.firstname,
        l_name: response.data.user.lastname,
        age: response.data.user.age,
        weight: response.data.user.weight,
        height: response.data.user.height,
        phone: response.data.user.phone,
        email: response.data.user.email,
      });

      if (response.data.profilePicture) {
        this.props.parentCallback(
          "data:image/png;base64," + response.data.profilePicture
        );
      }

      /*
      if (response.data.profilePicture) {
        setImageFile("data:image/png;base64," + response.data.profilePicture);
        setProfileImageFile(
          "data:image/png;base64," + response.data.profilePicture
        );
      }
      if (response.data.user.guardianList.length > 0) {
        setUserRole("Patient");
        setPatientName(response.data.user.guardianList[0].guardianName);
      }
      if (response.data.user.patientList.length > 0) {
        setUserRole("Guardian");
        setGuardianName(response.data.user.patientList[0].patientName);
        setPatientId(response.data.user.patientList[0].patientId);
      }
      */
    } catch (error) {
      //setMessage(error.response.data.message);
      this.setState({
        response_message: error.response.data.message,
      });
    }
  };

  sendForm = (e) => {
    e.preventDefault();
    console.log(this.state.f_name);
    console.log(this.state.l_name);
    console.log(this.state.age);
    console.log(this.state.weight);
    console.log(this.state.height);
    console.log(this.state.phone);
    console.log(this.state.email);
    console.log(this.state.current_pass);
    console.log(this.state.new_pass);
    console.log(this.state.confirm_new_pass);
  };

  render() {
    return (
      <div>
        {this.state.response_message && ( //API message
          <ErrorModal
            message={this.state.response_message}
            onClear={this.errorHandler.bind(this)}
          />
        )}

        <form className="form-group-fPass" onSubmit={this.sendForm}>
          <p className="h4 pl-3 pb-3" style={{ color: "#000000" }}>
            General Information:
          </p>
          <div className="form-row">
            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
                  <input
                    type="name"
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
                  <label className="editProfile-input-label" htmlFor="f_name">
                    First Name
                  </label>
                </div>
              </MDBCol>
            </MDBCol>

            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
                  <input
                    type="name"
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
                  <label className="editProfile-input-label" htmlFor="l_name">
                    Last Name
                  </label>
                </div>
              </MDBCol>
            </MDBCol>
          </div>

          {/* --------------------- First Input Row finish -------------------------------- */}

          <div className="form-row">
            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
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
                  <label className="editProfile-input-label" htmlFor="age">
                    Age
                  </label>
                </div>
              </MDBCol>
            </MDBCol>

            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
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
                  <label className="editProfile-input-label" htmlFor="weight">
                    Weight
                  </label>
                </div>
              </MDBCol>
            </MDBCol>
          </div>

          {/* --------------------- Second Input Row finish -------------------------------- */}

          <div className="form-row">
            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
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
                  <label className="editProfile-input-label" htmlFor="height">
                    Height
                  </label>
                </div>
              </MDBCol>
            </MDBCol>

            <MDBCol sm="5">
              <MDBCol sm="11">
                <div className="input-field-editProfile">
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
                  <label className="editProfile-input-label" htmlFor="phone">
                    Phone Number
                  </label>
                </div>
              </MDBCol>
            </MDBCol>
          </div>

          {/* --------------------- Second Input Row finish -------------------------------- */}

          <br />
          <p className="h4 pl-3 pb-3 pt-5" style={{ color: "#000000" }}>
            Account Information:
          </p>

          <div className="form-row">
            <MDBCol sm="5">
              <MDBCol sm="11">
                <label className="label" style={{ marginLeft: "10px" }}>
                  Email
                </label>

                <label className="form-control rounded-pill   form-input-background ">
                  {this.state.email}
                </label>
              </MDBCol>
            </MDBCol>
          </div>

          {/* --------------------- Email Input Row finish -------------------------------- */}

          <br />
          <p className="h4 pl-3 pb-3 pt-5" style={{ color: "#000000" }}>
            Change Password:
          </p>

          <div className="form-row">
            <MDBCol sm="4">
              <MDBCol sm="12">
                <div className="input-field-editProfile">
                  <input
                    type="password"
                    className="form-control rounded-pill   form-input-background "
                    name="current_pass"
                    value={this.state.current_pass}
                    onInput={this.handleInput}
                    id="current_pass"
                    onChange={(e) =>
                      this.setState({
                        current_pass: e.target.value,
                      })
                    }
                    required
                  />
                  <label
                    className="editProfile-input-label"
                    htmlFor="current_pass"
                  >
                    Current Password
                  </label>
                </div>
              </MDBCol>
            </MDBCol>

            <MDBCol sm="4">
              <MDBCol sm="12">
                <div className="input-field-editProfile">
                  <input
                    type="password"
                    className="form-control rounded-pill   form-input-background "
                    name="new_pass"
                    value={this.state.new_pass}
                    onInput={this.handleInput}
                    id="new_pass"
                    onChange={(e) =>
                      this.setState({
                        new_pass: e.target.value,
                      })
                    }
                    required
                  />
                  <label className="editProfile-input-label" htmlFor="new_pass">
                    New Password
                  </label>
                </div>
              </MDBCol>
            </MDBCol>

            <MDBCol sm="4">
              <MDBCol sm="12">
                <div className="input-field-editProfile">
                  <input
                    type="password"
                    className="form-control rounded-pill   form-input-background "
                    name="confirm_new_pass"
                    value={this.state.confirm_new_pass}
                    onInput={this.handleInput}
                    id="confirm_new_pass"
                    onChange={(e) =>
                      this.setState({
                        confirm_new_pass: e.target.value,
                      })
                    }
                    required
                  />
                  <label
                    className="editProfile-input-label"
                    htmlFor="confirm_new_pass"
                  >
                    Confirm New Password
                  </label>
                </div>
              </MDBCol>
            </MDBCol>
          </div>

          {/* --------------------- Password Input Row finish -------------------------------- */}

          <br />

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
            SAVE CHANGES
          </button>

          <br />
          <br />
        </form>
      </div>
    );
  }
}
