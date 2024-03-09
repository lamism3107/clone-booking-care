import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./Section/HomeHeader";
import HomeService from "./Section/HomeService";
import "./HomePage.scss";
import HomeSpeciality from "./Section/HomeSpeciality";
import HomeFacility from "./Section/HomeFacility";
import HomeDoctor from "./Section/HomeDoctor";
import HomeHandbook from "./Section/HomeHandbook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeAbout from "./Section/HomeAbout";
import HomeFooter from "./Section/HomeFooter";
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeService />
        <HomeSpeciality />
        <HomeFacility />
        <HomeDoctor />
        <HomeHandbook />
        <HomeAbout />
        <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
