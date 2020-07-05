import React, { Component } from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../Shared/Components/NavigationBar";
import EditProfileForm from "./Components/Edit_Profile_Form";
import "./Edit_Profile.css";
import { MDBCol } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import Footer from "../Shared/Components/Footer";
import avater from "../Shared/img/profile-pic.png";
import axios from "axios";
import auth from "../Shared/Auth/auth";
import ErrorModal from "../Shared/Components/ErrorModal";

export default class Edit_Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagefile: avater,
      response_message: "",
    };
  }

  callbackFunction = (childData) => {
    //this will get profile pic image from Edit_profile_Form component
    this.setState({ imagefile: childData });
  };

  errorHandler = () => {
    this.setState({
      response_message: "", //clear API response message after clicking okay
    });
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Edit Profile</title>
        </Helmet>

        <NavigationBar />

        <div className="container-fluid w-100 h-100 pt-5 header-background mb-5">
          <div className="container">
            <div className="row">
              <p className="text-left text-light ml-3 mb-4 ml-lg-0 display-4">
                Edit Profile
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid pl-5 pr-5">
          <div className="row">
            <MDBCol lg="4" className="profile_column">
              <img
                className="d-block mx-auto rounded-circle"
                style={{ width: "250px", height: "250px" }}
                src={this.state.imagefile}
                alt="Profile"
              />

              <form>
                <label
                  htmlFor="files"
                  className="btn btn-block text-white mx-auto mt-3 mt-4 rounded-pill justify-content-center"
                  style={{ backgroundColor: "#0C0C52", width: "280px" }}
                >
                  Change Profile Picture
                </label>

                <input
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                  onChange={async (e) => {
                    this.setState({
                      imagefile: URL.createObjectURL(e.target.files[0]),
                    });

                    var formData = new FormData();
                    formData.append("updatepp", e.target.files[0]);
                    formData.append("id", auth.userId);
                    try {
                      const response = await axios.patch(
                        "http://localhost:5000/" +
                          "users/profilePicture/" +
                          auth.userId,
                        formData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      );

                      this.setState({
                        response_message: response.data.message,
                      });
                    } catch (error) {
                      this.setState({
                        response_message: error.response.data.message,
                        imagefile: avater,
                      });
                    }
                  }}
                />
              </form>
            </MDBCol>

            <MDBCol lg="8" className="Edit_profile_column  pl-5">
              <EditProfileForm parentCallback={this.callbackFunction} />{" "}
              {/* calling child component with parentCallback function */}
            </MDBCol>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
