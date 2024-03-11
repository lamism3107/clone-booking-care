import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import FsLightbox from "fslightbox-react";
import TableManageUser from "./TableManageUser";
import { CRUDActions, CommonUtils } from "../../../utils";

class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
      previewImgURL: "",
      toggle: false,

      //User state:
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phoneNum: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",

      action: "",
      userEditId: "",
    };
  }

  componentDidMount() {
    this.props.fetchGenderStart();
    this.props.fetchPositionStart();
    this.props.fetchRoleStart();
  }

  componentDidUpdate(prevProps) {
    // Render => didupdate
    // Hiện tại (this) và quá khứ(prev)
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        genderArr: this.props.genderRedux,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : "",
      });
    }

    if (prevProps.roleRedux !== this.props.roleRedux) {
      let arrRoles = this.props.roleRedux;
      this.setState({
        roleArr: this.props.roleRedux,
        role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : "",
      });
    }

    if (prevProps.positionRedux !== this.props.positionRedux) {
      let arrPositions = this.props.positionRedux;
      this.setState({
        positionArr: this.props.positionRedux,
        role:
          arrPositions && arrPositions.length > 0 ? arrPositions[0].key : "",
      });
    }

    if (prevProps.usersRedux) {
      if (prevProps.usersRedux !== this.props.usersRedux) {
        let arrRoles = this.props.roleRedux;
        let arrGenders = this.props.genderRedux;
        let arrPositions = this.props.positionRedux;
        this.setState({
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          phoneNum: "",
          address: "",
          avatar: "",
          previewImgURL: "",
          position:
            arrPositions && arrPositions.length > 0 ? arrPositions[0].key : "",
          role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : "",
          gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : "",
          action: CRUDActions.CREATE,
        });
      }
    }
  }

  handleOnchangeImg = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objURL = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objURL,
        avatar: base64,
      });
    }
  };

  handlePreviewImg = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleOnChangeInput = (e, id) => {
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  handleValidateInput = () => {
    let arrInput = [
      "email",
      "password",
      "firstname",
      "lastname",
      "phoneNum",
      "address",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        alert("missing required params!");
        return false;
      }
    }
    return true;
  };

  handleSaveUser = () => {
    let isValid = this.handleValidateInput();
    if (isValid === false) return;

    //Fire redux action

    //Create new user
    if (this.state.action === CRUDActions.CREATE) {
      this.props.createNewUser({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        address: this.state.address,
        gender: this.state.gender,
        roleId: this.state.role,
        positionID: this.state.position,
        phoneNum: this.state.phoneNum,
        image: this.state.avatar,
      });
    }
    if (this.state.action === CRUDActions.EDIT) {
      this.props.editUser(
        {
          id: this.state.userEditId,
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstname,
          lastName: this.state.lastname,
          address: this.state.address,
          gender: this.state.gender,
          roleId: this.state.role,
          positionID: this.state.position,
          phoneNum: this.state.phoneNum,
          image: this.state.avatar,
        },
        console.log("Check base64", this.state)
      );
    }
  };

  handleEditUserFromParent = (userTable) => {
    let imgBase64 = "";
    if (userTable.image) {
      imgBase64 = new Buffer(userTable.image, "base64").toString("binary"); //
    }

    console.log("check user from child: ", userTable);
    this.setState({
      userEditId: userTable.id,
      email: userTable.email,
      password: "hardcode",
      firstname: userTable.firstName,
      lastname: userTable.lastName,
      phoneNum: userTable.phoneNum,
      address: userTable.address,
      avatar: "",
      previewImgURL: imgBase64,
      position: userTable.positionID,
      role: userTable.roleId,
      gender: userTable.gender,
      action: CRUDActions.EDIT,
    });
  };

  render() {
    // let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    let genders = this.state.genderArr;

    let language = this.props.language;
    let isLoadingGender = this.props.isLoadingGender;

    let {
      email,
      password,
      firstname,
      lastname,
      phoneNum,
      address,
      gender,
      position,
      role,
      avatar,
      action,
    } = this.state;

    //Check log

    return (
      <div className="user-redux-container">
        <div className="title">
          <div className="text-center">User management with Redux</div>
        </div>

        <div
          className=" user-redux-body mt-4 container"
          style={{ width: "900px" }}
        >
          <div className="row mb-4">
            <div className="col-md-12 mb-4">
              <FormattedMessage id="manage-user.add" />
              <div>{isLoadingGender === true ? "Loading genders" : ""}</div>
            </div>
            <form>
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.email" />
                  </label>
                  <input
                    disabled={this.action === CRUDActions.EDIT}
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "email");
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.password" />
                  </label>
                  <input
                    disabled={this.action === CRUDActions.EDIT}
                    type="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "password");
                    }}
                  />
                </div>
              </div>

              {/* Name */}
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.firstname" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "firstname");
                    }}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.lastname" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "lastname");
                    }}
                  />
                </div>
              </div>

              {/* Gender / phoneNum */}
              <div className="row mb-4">
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.gender" />
                  </label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "gender");
                    }}
                  >
                    {genders &&
                      genders.length > 0 &&
                      genders.map((item, index) => (
                        <option key={index} value={item.key}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.phone-num" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    value={phoneNum}
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "phoneNum");
                    }}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="form-group mb-4 ">
                <label className="mb-1">
                  <FormattedMessage id="manage-user.address" />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                    this.handleOnChangeInput(e, "address");
                  }}
                />
              </div>

              {/* Role /Position/ Avatar */}
              <div className="row mb-4">
                <div className="form-group col-md-4">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.role-id" />
                  </label>
                  <select
                    value={role}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "role");
                    }}
                  >
                    {roles &&
                      roles.length > 0 &&
                      roles.map((item, index) => (
                        <option key={index} value={item.key}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.position" />
                  </label>
                  <select
                    value={position}
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      this.handleOnChangeInput(e, "position");
                    }}
                  >
                    {positions &&
                      positions.length > 0 &&
                      positions.map((item, index) => (
                        <option key={index} value={item.key}>
                          {language === LANGUAGES.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label className="mb-1">
                    <FormattedMessage id="manage-user.image" />
                  </label>
                  <div className="preview-img-container">
                    <input
                      type="file"
                      className="form-control"
                      id="previewImg"
                      hidden
                      onChange={(e) => {
                        this.handleOnchangeImg(e);
                      }}
                    />
                    <label htmlFor="previewImg" className="preview-img-btn btn">
                      Tải ảnh
                      <i className="fa fa-upload ms-2" aria-hidden="true"></i>
                    </label>
                    <div
                      className="preview-img"
                      style={{
                        background: `url(${this.state.previewImgURL}) center/contain no-repeat`,
                        cursor: "pointer",
                      }}
                      onClick={() => this.handlePreviewImg()}
                    ></div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={
                  action === CRUDActions.CREATE
                    ? "user-redux-save-btn btn btn-primary mt-3"
                    : "user-redux-save-btn btn btn-warning mt-3"
                }
                onClick={() => this.handleSaveUser()}
              >
                {action === CRUDActions.CREATE ? (
                  <FormattedMessage id="manage-user.save-btn" />
                ) : (
                  <FormattedMessage id="manage-user.edit-btn" />
                )}
              </button>
            </form>
          </div>
        </div>
        <TableManageUser
          handleEditUserFromParent={this.handleEditUserFromParent}
        />

        <FsLightbox
          toggle={this.state.toggle}
          sources={"this.state.previewImgUR"}
          action={this.state.action}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genderRedux: state.admin.genders,
    roleRedux: state.admin.roles,
    positionRedux: state.admin.positions,
    isLoadingGender: state.admin.isLoadingGender,
    usersRedux: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenderStart: () => dispatch(actions.fetchGenderStart()),
    fetchPositionStart: () => dispatch(actions.fetchPositionStart()),
    fetchRoleStart: () => dispatch(actions.fetchRoleStart()),
    createNewUser: (data) => dispatch(actions.createNewUser(data)),
    fetchAllUser: () => dispatch(actions.fetchAllUsersStart()),
    editUser: (data) => dispatch(actions.editUserStart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
