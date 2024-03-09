import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../HomePage.scss";
import Slider from "react-slick";
import specialityImg from "../../../assets/specialit-slide/co-xuong-khop.png";

class HomeSpeciality extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      focusOnSelect: true,
    };
    return (
      <div className="home-container home-speciality-container">
        <div className="section-container">
          <div className="section-header">
            <h2>Chuyên khoa</h2>
            <button>Xem thêm</button>
          </div>
          <div className="image-slider-container">
            <Slider {...settings}>
              {/* <div style={{ marginLeft: "-40px" }}> */}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
                </a>
              </div>{" "}
              <div className="slide-body">
                <a className="slide-link" href="">
                  <div className="slide-img">
                    <img src={specialityImg} />
                  </div>
                  <div className="slide-title">Cơ xương khớp</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSpeciality);
