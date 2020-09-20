import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import NavigationBar from "../Shared/Components/NavigationBar";
import Slider from "./components/Slider";
import Service from "./components/Service";
import AboutTeresa from "./components/AboutTeresa";
import AboutApp from "./components/AboutApp";
import Footer from "../Shared/Components/Footer";
import Process from "./components/Process";

class Homepage extends Component {
  render() {
    return (
      <div className="Home-elements">
        <NavigationBar />
        <Fade top cascade>
          <Slider />
          <Service id="services" />

          <AboutTeresa id="about" />

          <AboutApp />
          <Process id="process" />
        </Fade>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
