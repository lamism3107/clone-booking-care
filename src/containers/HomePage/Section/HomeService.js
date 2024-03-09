import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import homeServiceBg from "../../../assets/home-service-icon/home-service-bg.png";
import homeService1 from "../../../assets/home-service-icon/home-service-icon1.png";
import homeService2 from "../../../assets/home-service-icon/home-service-icon2.png";
import homeService3 from "../../../assets/home-service-icon/home-service-icon3.png";
import homeService4 from "../../../assets/home-service-icon/home-service-icon4.png";
import homeService5 from "../../../assets/home-service-icon/home-service-icon5.png";
import homeService6 from "../../../assets/home-service-icon/home-service-icon6.png";
import homeService7 from "../../../assets/home-service-icon/home-service-icon7.png";
import homeService8 from "../../../assets/home-service-icon/home-service-icon8.png";
import homeService9 from "../../../assets/home-service-icon/home-service-icon9.png";
import homeService10 from "../../../assets/home-service-icon/home-service-icon10.png";
import "../HomePage.scss";
class HomeService extends Component {
  render() {
    return (
      <div className="home-container home-service-container">
        <div className="section-container">
          <div className="section-header">
            <h2>Dịch vụ toàn diện</h2>
          </div>

          <div className="home-service-row  ">
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService1} />
              </div>
              <span className="home-service__title">Khám Chuyên Khoa</span>
            </div>
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService2} />
              </div>
              <span className="home-service__title">Khám từ xa</span>
            </div>
          </div>
          <div className="home-service-row  ">
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService3} />
              </div>
              <span className="home-service__title">Khám tổng quát</span>
            </div>
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService4} />
              </div>
              <span className="home-service__title">Xét nghiệm y học</span>
            </div>
          </div>
          <div className="home-service-row  ">
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService5} />
              </div>
              <span className="home-service__title">Sức khỏe tinh thần</span>
            </div>
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService6} />
              </div>
              <span className="home-service__title">Khám nha khoa</span>
            </div>
          </div>
          <div className="home-service-row  ">
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService7} />
              </div>
              <span className="home-service__title">Gói phẫu thuật</span>
            </div>
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService8} />
              </div>
              <span className="home-service__title">Sức khỏe tiểu đường</span>
            </div>
          </div>
          <div className="home-service-row  ">
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService9} />
              </div>
              <span className="home-service__title">Bài test sức khỏe</span>
            </div>
            <div className="home-service-item ">
              <div className="home-service__icon">
                <img src={homeService10} />
              </div>
              <span className="home-service__title">Y tế gần bạn</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeService);
