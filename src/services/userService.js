import { stringify } from "react-auth-wrapper/helpers";
import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const handleGetAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users/?id=${inputId}`);
};

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

const editUserService = (user) => {
  return axios.put(`/api/update-user`, user);
};

const getAllcodeService = (inputData) => {
  return axios.get(`/api/allcode?type=${inputData}`);
};

const getDoctorHomeService = (limit) => {
  return axios.get(`/api/doctor-home?limit=${limit}`);
};
export {
  handleLoginApi,
  handleGetAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
  getAllcodeService,
  getDoctorHomeService,
};
