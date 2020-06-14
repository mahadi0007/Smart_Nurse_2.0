import React from "react";
import AboutTeresaPhoto from "../../Shared/img/About Us.jpg";
import "./AboutTeresa.css";

const AboutTeresa = () => {
  return (
    <div
      data-aos="fade-down"
      className="container-fluid"
      style={{ backgroundColor: "#F1F5F8" }}
    >
      <div className="container">
        <img
          className="d-block about-teresa"
          src={AboutTeresaPhoto}
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutTeresa;
