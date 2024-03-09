import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      phoneNum: "",
      address: "",
    };

    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", (data) => {
      //reset State
      this.setState({
        firstName: "",
        lastName: "",
        phoneNum: "",
        address: "",
      });
    });
  }

  handleOnChangeInput = (e, id) => {
    //good code
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  validateInput() {
    let isValid = true;
    let arrInput = ["firstName", "lastName", "phoneNum", "address"];

    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  }

  handleSaveUser() {
    let isValid = this.validateInput();
    if (isValid === true) {
      this.props.handleEditUser(this.state);
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  componentDidMount() {
    let currentUser = this.props.currentUser;
    if (currentUser && !_.isEmpty(currentUser)) {
      this.setState({
        id: currentUser.id,
        email: currentUser.email,
        password: currentUser.password,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phoneNum: currentUser.phoneNum,
        address: currentUser.address,
      });
    }
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        centered
        size="lg"
        isOpen={this.props.isOpenModal}
        toggle={() => this.toggle()}
      >
        <div className="container modal-header d-flex align-items-center justify-content-between">
          Update user information
          <button className="exit-btn" onClick={() => this.toggle()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ModalBody>
          <form className="container">
            <div className="row mb-4">
              <div className="form-group col-6">
                <label className="form-label">Firstname</label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "firstName")}
                  type="text"
                  value={this.state.firstName}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group col-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Lastname
                </label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "lastName")}
                  type="text"
                  value={this.state.lastName}
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="form-group col-12">
                <label className="form-label">Phone</label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "phoneNum")}
                  type="text"
                  value={this.state.phoneNum}
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="form-group col-12">
                <label className="form-label">Address</label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "address")}
                  type="text"
                  value={this.state.address}
                  required
                  className="form-control"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-primary px-2"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
