import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";
import Slider from "react-slick";
import homeHandbookImg from "../../../assets/home-handbook-slide/154230-che-do-dinh-duong-cho-tre-day-thi-som.png";

class HomeHandbook extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect: true,
    };
    return (
      <div className="home-container home-handbook-container">
        <div className="section-container">
          <div className="section-header">
            <h2>Cẩm nang</h2>
            <button>Xem thêm</button>
          </div>
          <div className="image-slider-container home-handbook-slider">
            <Slider {...settings}>
              {/* <div style={{ marginLeft: "-40px" }}> */}
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
                  </div>
                </a>
              </div>
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
                  </div>
                </a>
              </div>
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
                  </div>
                </a>
              </div>
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
                  </div>
                </a>
              </div>
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
                  </div>
                </a>
              </div>
              <div className=" handbook-slide-body">
                <a className="slide-link handbook-slide-link" href="">
                  <div className="handbook-slide-img">
                    <img src={homeHandbookImg} />
                  </div>
                  <div className="slide-title">
                    Tìm hiểu chế độ dinh dưỡng cho trẻ dậy thì sớm
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHandbook);
