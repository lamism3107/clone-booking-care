import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeaderSlider from "./HomeHeaderSlider";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguageApp } from "../../../store/actions";
import { lang } from "moment";
import "./HomeHeader.scss";
import "../HomePage.scss";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //Fire redux event: actions
  };

  render() {
    let language = this.props.language;

    return (
      <div className="home-header-container">
        <div className="home-header-content container">
          <div className="home-header-content__left">
            <div className="header-left__menu">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="header-left__logo"></div>
          </div>
          <div className="home-header-content__mid">
            <div className="header-mid__category">
              <b>
                <FormattedMessage id="home-header.speciality" />
              </b>
              <span>
                <FormattedMessage id="home-header.search-doctor" />
              </span>
            </div>
            <div className="header-mid__category">
              <b>
                <FormattedMessage id="home-header.health-facility" />
              </b>
              <span>
                <FormattedMessage id="home-header.select-room" />
              </span>
            </div>
            <div className="header-mid__category">
              <b>
                <FormattedMessage id="home-header.doctor" />
              </b>
              <span>
                <FormattedMessage id="home-header.choose-doctor" />
              </span>
            </div>
            <div className="header-mid__category">
              <b>
                <FormattedMessage id="home-header.package" />
              </b>
              <span>
                <FormattedMessage id="home-header.check-health" />
              </span>
            </div>
            <div className="header-mid__search">
              <i className="fa fa-search" aria-hidden="true"></i>
              <FormattedMessage id="home-header.search" />
            </div>
          </div>
          <div className="home-header-content__right">
            <div className="header-right__support">
              <i className="fa fa-question-circle" aria-hidden="true"></i>
              <span>
                <FormattedMessage id="home-header.support" />
              </span>
            </div>
            <div
              className={
                language === LANGUAGES.VI
                  ? "header-right__lang active"
                  : "header-right__lang"
              }
              style={{ marginRight: "6px" }}
            >
              <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
            </div>
            <div
              className={
                language === LANGUAGES.EN
                  ? "header-right__lang active"
                  : "header-right__lang"
              }
            >
              <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
            </div>
          </div>
        </div>
        <HomeHeaderSlider />
        <div className="clear"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
