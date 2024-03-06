import { Button } from "bootstrap";
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { handleGetAllUsers } from "../../services/userService";
import "./UserManage.scss";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  state = {};

  async componentDidMount() {
    let res = await handleGetAllUsers("ALL");
    if (res.errCode === 0 && res) {
      this.setState({ users: res.users });
    }
  }

  render() {
    let users = this.state.users;
    return (
      <div className="container">
        <h2
          className="text-center"
          style={{ color: "#0071ba", margin: "12px 0" }}
        >
          {" "}
          User Manage
        </h2>

        <table class="table table-hover">
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
            {console.log(this.state.users)}
            {users &&
              users.map((user, index) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phoneNum}</td>
                    <td>{user.address}</td>
                    <td>
                      <button type="button" class="edit-btn btn btn-warning">
                        Edit
                      </button>
                      <button type="button" class="delete-btn btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <td>Lam</td>
              <td>Lam</td>
              <td>Lam</td>
              <td>Lam</td>
              <td>Lam</td>
              <td>Lam</td>
            </tr> */}
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
