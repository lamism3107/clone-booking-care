import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode != 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode == 0) {
        console.log("Success");
        this.props.userLoginSuccess(data.user);
      }
      console.log(data);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({ errMessage: error.response.data.errMessage });
        }
      }
      // console.log("show error", error.response.data.errMessage);
    }
  };
  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center login-text">Login</div>
            <div className="col-12 form-group">
              <label className="col-12">Username</label>
              <input
                value={this.state.username}
                onChange={(e) => this.handleOnChangeUsername(e)}
                placeholder="Enter your username"
                type="text"
                className="form-control login-input"
              />
            </div>
            <div className="col-12 form-group">
              <label className="col-12">Password</label>
              <div className="custom-input-password">
                <input
                  value={this.state.password}
                  onChange={(e) => this.handleOnChangePassword(e)}
                  placeholder="Enter your password"
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control login-input form-control"
                />
                <span
                  onClick={() => {
                    this.handleShowPassword();
                  }}
                >
                  <i
                    class={
                      this.state.isShowPassword
                        ? "fa fa-eye-slash"
                        : "fa fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login btn btn-primary"
                onClick={() => this.handleLogin()}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>

            <div className="col-12 text-center">
              <span className="login-with">or connect with</span>
            </div>
            <div className="col-12 social-login">
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
