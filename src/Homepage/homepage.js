import React, { Component } from "react";

import NavigationBar from "../Shared/Components/NavigationBar";
import Slider from "./components/Slider";

class Homepage extends Component {
  render() {
    return (
      <div className="Home-elements">
        <NavigationBar />
        <Slider />
      </div>
    );
  }
}

export default Homepage;
