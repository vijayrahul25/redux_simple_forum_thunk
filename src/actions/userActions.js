import * as actionType from "./ActionType";
import userApi from "../api/userApi";

export function addUser(user) {
  return { type: actionType.ADD_USER, user: user };
}
export function loadUsersSuccess(users) {
  return { type: actionType.LOAD_USER_SUCCESS, users };
}


export function loadUsers() {
  return function (dispatch) {
    
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw (error);
    });
  };
}
