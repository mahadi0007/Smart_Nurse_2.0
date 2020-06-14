import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../Shared/img/front 1.jpg";
import Slider2 from "../../Shared/img/front 2.jpg";
import Slider3 from "../../Shared/img/front 3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel data-aos="fade-down">
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider1} alt="First slide" />
        <Carousel.Caption>
          <button
            className="btn bg-white float-left rounded-pill font-weight-bold marginSliderButton mb-lg-5"
            style={{ color: "#080808" }}
          >
            Learn More
          </button>
          {/* <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-sm bg-white float-left rounded-pill font-weight-bold" style={{color: '#080808'}}>Learn More</button>
                        </div>
                    </div>
                </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider2} alt="Second slide" />

        <Carousel.Caption>
          <button
            className="btn bg-white float-left rounded-pill font-weight-bold marginSliderButton mb-lg-5"
            style={{ color: "#080808" }}
          >
            Learn More
          </button>
          {/* <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-sm bg-white float-left rounded-pill font-weight-bold" style={{color: '#080808'}}>Learn More</button>
                        </div>
                    </div>
                </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider3} alt="Third slide" />

        <Carousel.Caption>
          <button
            className="btn bg-white float-left rounded-pill font-weight-bold marginSliderButton mb-lg-5"
            style={{ color: "#080808" }}
          >
            Learn More
          </button>
          {/* <div className="container">
                    <div className="row">
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
