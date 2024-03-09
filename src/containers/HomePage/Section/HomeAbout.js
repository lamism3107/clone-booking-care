import React, { Component } from "react";
import { connect } from "react-redux";
import "../HomePage.scss";
import Slider from "react-slick";
import homeAbout1 from "../../../assets/home-about/vtv.png";
import homeAbout2 from "../../../assets/home-about/cuc-y-te.png";
import homeAbout3 from "../../../assets/home-about/dantri.png";
import homeAbout4 from "../../../assets/home-about/ictnews.png";
import homeAbout5 from "../../../assets/home-about/infonet.png";
import homeAbout6 from "../../../assets/home-about/vtcnews.png";
import homeAbout7 from "../../../assets/home-about/vnexpress.png";

class HomeHandbook extends Component {
  render() {
    return (
      <div className="home-container home-about-container">
        <div className="section-container ">
          <div className="section-header">
            <h2>Truyền thông nói gì về BookingCare</h2>
            {/* <button>Xem thêm</button> */}
          </div>
          <div className="section-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="330px"
                src="https://www.youtube.com/embed/OASGscJQXp0"
                title="BookingCare: Hệ thống đặt khám trực tuyến"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <div className="content-right__row">
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout1} />
                  </div>
                </a>
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout2} />
                  </div>
                </a>
              </div>
              <div className="content-right__row">
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout3} />
                  </div>
                </a>
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout4} />
                  </div>
                </a>
              </div>{" "}
              <div className="content-right__row">
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout5} />
                  </div>
                </a>
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout6} />
                  </div>
                </a>
              </div>{" "}
              <div className="content-right__row">
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout1} />
                  </div>
                </a>
                <a href="" className="content-right__col">
                  <div>
                    <img src={homeAbout7} />
                  </div>
                </a>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHandbook);
