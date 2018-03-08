import * as actionType from "./ActionType";
import userApi from "../api/userApi";

export function createUserSuccess(user) {
  return { type: actionType.CREATE_USER_SUCCESS, user };
}

export function updateUserSuccess(user) {
  return { type: actionType.UPDATE_USER_SUCCESS, user };
}

export function loadUsersSuccess(users) {
  return { type: actionType.LOAD_USER_SUCCESS, users };
}

export function loadUsers() {
  return function(dispatch) {
    return userApi
      .getAllUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addUser(user) {
  return function(dispatch, getState) {
    return userApi
      .saveuser(user)
      .then(user => {
        user.id
          ? dispatch(updateUserSuccess(user))
          : dispatch(createUserSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
