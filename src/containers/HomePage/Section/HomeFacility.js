import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../HomePage.scss";

import Slider from "react-slick";
import facilityImg from "../../../assets/facility-slide/lo-go-viet-duc.jpg";

class HomeDoctor extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      focusOnSelect: true,
    };
    return (
      <div className="home-container home-facility-container">
        <div className="section-container">
          <div className="section-header">
            <h2>Cơ sở y tế</h2>
            <button>Xem thêm</button>
          </div>
          <div className="image-slider-container">
            <Slider {...settings}>
              {/* <div style={{ marginLeft: "-40px" }}> */}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={facilityImg} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="slide-title">Bệnh viện Hữu nghị Việt Đức</div>
                </a>
              </div>
              {/* </div>   */}
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeDoctor);
