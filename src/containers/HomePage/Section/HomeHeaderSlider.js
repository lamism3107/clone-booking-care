import React, { Component } from "react";
import { connect } from "react-redux";

import Slider from "react-slick";
import "./HomeHeaderSlider.scss";
import headerSlider1 from "../../../assets/header-slider/header-slider-1.jpg";
import headerSlider2 from "../../../assets/header-slider/header-slider-2.png";
import headerSlider3 from "../../../assets/header-slider/header-slider-3.png";
import headerSlider4 from "../../../assets/header-slider/header-slider-4.png";

class HomeHeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      focusOnSelect: true,
    };
    return (
      <div className="header-slider">
        <div className="header-slider-bg">
          <div className="home-container header-slider-container">
            <div className="image-slider-container">
              <Slider {...settings}>
                <div className="header-slider-img">
                  <img src={headerSlider1} />
                </div>
                <div className="header-slider-img">
                  <img src={headerSlider2} />
                </div>
                <div className="header-slider-img">
                  <img src={headerSlider3} />
                </div>
                <div className="header-slider-img">
                  <img src={headerSlider4} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderSlider);
