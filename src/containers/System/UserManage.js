import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Modal } from "reactstrap";
import {
  handleGetAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import "./UserManage.scss";
import ModalAddUser from "./ModalAddUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isShowAddModal: false,
      isShowEditModal: false,
      userEdit: {},
    };
  }

  state = {};
  handleShowAddModal = () => {
    this.setState({
      isShowAddModal: true,
    });
  };

  handleShowEditModal = (user) => {
    this.setState({
      isShowEditModal: true,
      userEdit: user,
    });
  };
  handleToggleModal = () => {
    this.setState({
      isShowAddModal: !this.state.isShowAddModal,
    });
  };

  handleToggleEditModal = () => {
    this.setState({
      isShowEditModal: !this.state.isShowEditModal,
    });
  };
  async getAllUserFromReact() {
    let res = await handleGetAllUsers("ALL");
    if (res.errCode === 0 && res) {
      this.setState({ users: res.users });
    }
  }

  componentDidMount() {
    this.getAllUserFromReact();
  }

  handleCreateNewUser = async (data) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        await this.getAllUserFromReact();
        this.setState({
          isShowAddModal: false,
        });

        //Fire 1 event từ cha -> con
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
    } catch (e) {
      console.log(e);
    }
  };

  async handleDeleteUser(user) {
    let id = user.id;
    try {
      let res = await deleteUserService(id);
      if (res && res.errCode === 0) {
        await this.getAllUserFromReact();
      } else {
        alert(res.errMessage);
        this.setState({
          isShowEditModal: false,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  // handleEditUser = async (user) => {
  //   try {
  //     let res = await editUserService(user);
  //     if (res && res.errCode !== 0) {
  //       alert(res.errMessage);
  //     } else {
  //       this.setState({
  //         isShowEditModal: false,
  //       });
  //       await this.getAllUserFromReact();
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  async handleEditUser(user) {
    try {
      let res = await editUserService(user);
      if (res && res.errCode === 0) {
        this.setState({
          isShowEditModal: false,
        });
        await this.getAllUserFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let users = this.state.users;
    return (
      <div className="container">
        <ModalAddUser
          isOpenModal={this.state.isShowAddModal}
          toggleFromParent={this.handleToggleModal}
          handleCreateNewUser={this.handleCreateNewUser}
        />
        {this.state.isShowEditModal && (
          <ModalEditUser
            isOpenModal={this.state.isShowEditModal}
            toggleFromParent={this.handleToggleEditModal}
            currentUser={this.state.userEdit}
            handleEditUser={this.handleEditUser}
          />
        )}
        <h1
          className="text-center"
          style={{ color: "#0071ba", margin: "16px 0" }}
        >
          {" "}
          User Manage
        </h1>
        <button
          className="add-user-btn btn btn-primary mb-2 px-2"
          onClick={() => {
            this.handleToggleModal();
          }}
        >
          + Add new user
        </button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Email</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Phone number</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phoneNum}</td>
                    <td>{user.address}</td>
                    <td>
                      <button
                        type="button"
                        className=" btn btn-warning px-2 me-2"
                        onClick={() => {
                          this.handleShowEditModal(user);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => this.handleDeleteUser(user)}
                        type="button"
                        className=" btn btn-danger px-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
