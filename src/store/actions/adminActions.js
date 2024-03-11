import actionTypes from "./actionTypes";

import * as userService from "../../services/userService";
import { toast } from "react-toastify";

//Fetch gender field
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.getAllcodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        console.log("fetchGenderStart error");
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      fetchGenderFailed();
      console.log("fetchGenderStart error", e);
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

//Fetch Role field
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.getAllcodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      fetchGenderFailed();
      console.log("fetchRoleStart error", e);
    }
  };
};
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED,
});

//Fetch position field
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.getAllcodeService("position");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      fetchGenderFailed();
      console.log("fetchPositionStart error", e);
    }
  };
};
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILEDs,
});
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

//Create new user
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.createNewUserService(data);
      if (res && res.errCode === 0) {
        toast.success(`${res.errMessage}`);
        dispatch(saveUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error(`${res.errMessage}`);
        dispatch(saveUserFailed());
      }
    } catch (e) {
      saveUserFailed();
      console.log("saveUserFail error", e);
    }
  };
};
export const saveUserSuccess = () => ({
  type: actionTypes.SAVE_USER_SUCCESS,
});
export const saveUserFailed = () => ({
  type: actionTypes.SAVE_USER_FAILED,
});

//Fetch all user
export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res1 = await userService.getDoctorHomeService(+2);
      console.log("check res1", res1);

      let res = await userService.handleGetAllUsers("ALL");
      if (res && res.errCode === 0) {
        toast.success(`${res.errMessage}`);
        dispatch(fetchAllUsersSuccess(res.users));
      } else {
        console.log("Fail!");
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      fetchGenderFailed();
      console.log("fetchRoleStart error", e);
    }
  };
};
export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});
export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED,
});

//Delete user
export const deleteUserStart = (user) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.deleteUserService(user);
      console.log(res);
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersStart());
        dispatch(deleteUserSuccess(user));
        toast.success(res.errMessage);
      } else {
        dispatch(deleteUserFailed);
        toast.error(`${res.errMessage}`);
      }
    } catch (e) {
      dispatch(deleteUserFailed);
    }
  };
};
export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

//Edit user
export const editUserStart = (editedUser) => {
  return async (dispatch, getState) => {
    try {
      let res = await userService.editUserService(editedUser);
      if (res && res.errCode === 0) {
        toast.success(res.errMessage);
        dispatch(editUserSuccess());
        dispatch(fetchAllUsersStart());
      } else {
        toast.error(res.errMessage);
        dispatch(editUserFailed());
      }
    } catch (e) {
      dispatch(editUserFailed());
    }
  };
};
export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED,
});
// export const editUserSuccess = () => ()
