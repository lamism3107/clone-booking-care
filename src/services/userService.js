import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const handleGetAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users/?id=${inputId}`);
};

// const handleGetAllUsers = (inputId) => {
//   return axios.get("/api/get-all-users/", {
//     data: {
//       id: inputId,
//     },
//   });
// };

const createNewUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserService = (UserId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: UserId,
    },
  });
};

const editUserService = (data) => {
  return axios.put(`/api/update-user`, data);
};

export {
  handleLoginApi,
  handleGetAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
};
