import React, { Component } from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../Shared/Components/NavigationBar";
import EditProfileForm from "./Components/Edit_Profile_Form";
import "./Edit_Profile.css";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import Footer from "../Shared/Components/Footer";
import avater from "../Shared/img/profile-pic.png";

export default class Edit_Profile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edit Profile</title>
        </Helmet>

        <NavigationBar />

        <div className="container-fluid w-100 h-100 pt-5 header-background mb-5">
          <div className="container">
            <div className="row">
              <p className="text-left text-light ml-3 mb-4 ml-lg-0 display-4 upload-prescription-header-text">
                Edit Profile
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid pl-5 pr-5">
          <div className="row">
            <MDBCol sm="4" className="profile_column">
              <img
                className="d-block mx-auto rounded-circle"
                style={{ width: "250px", height: "250px" }}
                src={avater}
                alt="Profile"
              />

              <button
                type="submit"
                className="btn btn-block text-white text-center"
                style={{
                  marginTop: "15px",
                  marginBottom: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200px",
                  borderRadius: "1em",
                  height: "35px",
                  backgroundColor: "#0C0C52",
                  fontSize: "14px",
                }}
              >
                Change Profile Image
              </button>
            </MDBCol>

            <MDBCol sm="8" className="Edit_profile_column  pl-5">
              <EditProfileForm />
            </MDBCol>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
