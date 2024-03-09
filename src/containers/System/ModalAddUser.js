import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

import React, { Component } from "react";
import { connect } from "react-redux";
class ModalAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNum: "",
        address: "",
      });
      //   console.log("listen to data emitter", data);
    });
  }

  handleOnChangeInput = (e, id) => {
    // bad code  - modify state
    // this.state[id] = e.target.value;
    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check bad state: ", this.state);
    //   }
    // );

    //good code
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
    this.setState({
      ...copyState,
    });
  };

  validateInput() {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNum",
      "address",
    ];

    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  }

  handleAddNewUser() {
    let isValid = this.validateInput();
    if (isValid === true) {
      //   alert(this.state);
      this.props.handleCreateNewUser(this.state);
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  componentDidMount() {}

  render() {
    return (
      <Modal
        centered
        size="lg"
        isOpen={this.props.isOpenModal}
        toggle={() => this.toggle()}
      >
        <div className="container modal-header d-flex align-items-center justify-content-between">
          Create a new User
          <button className="exit-btn" onClick={() => this.toggle()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ModalBody>
          <form className="container">
            <div className="row mb-4">
              <div className="form-group col-6">
                <label className="form-label">Email</label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "email")}
                  type="email"
                  className="form-control"
                  required
                  value={this.state.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group col-6">
                <label className="form-label">Password</label>
                <input
                  onChange={(e) => this.handleOnChangeInput(e, "password")}
                  type="password"
                  value={this.state.password}
                  className="form-control"
                  required
                  placeholder="********"
                />
              </div>
            </div>
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
            onClick={() => this.handleAddNewUser()}
          >
            Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddUser);
