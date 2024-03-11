import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../store/actions";
class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchAllUserStart();
  };

  handleDeleteUser = (userId) => {
    this.props.deleteUser(userId);
  };

  handleEditUser = (user) => {
    this.props.handleEditUserFromParent(user);
  };
  render() {
    let users = this.props.usersRedux;
    //Check log

    return (
      <div className="container mb-4">
        <table className="table table-hover table-striped table-bordered ">
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
            {users.map((user, index) => (
              <tr>
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
                    onClick={() => this.handleEditUser(user)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => this.handleDeleteUser(user.id)}
                    className=" btn btn-danger px-2 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersRedux: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUserStart: () => dispatch(action.fetchAllUsersStart()),
    deleteUser: (userId) => dispatch(action.deleteUserStart(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
