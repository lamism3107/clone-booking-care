import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../HomePage.scss";

import Slider from "react-slick";
import doctorImg from "../../../assets/home-doctor-slide/104629tien-si-bac-si-nguyen-khac-duc.jpg";

class HomeSpeciality extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      focusOnSelect: true,
    };
    return (
      <div className="home-container home-doctor-container">
        <div className="section-container">
          <div className="section-header">
            <h2>Chuyên khoa</h2>
            <button>Xem thêm</button>
          </div>
          <div className="image-slider-container">
            <Slider {...settings}>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
                </a>
              </div>
              <div style={{ marginLeft: "-40px" }}>
                <a className="doctor-slide-link" href="">
                  <div className="doctor-slide-img">
                    <img src={doctorImg} />
                  </div>
                  <div className="doctor-slide-info">
                    <p className="doctor-slide-title">
                      Thạc sĩ, Bác sĩ chuyên khoa II Đỗ Anh Vũ
                    </p>
                    <p className="doctor-slide-desc">
                      Thần kinh, Cột sống, Ngoại thần kinh ádfsadfasd
                    </p>
                  </div>
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
