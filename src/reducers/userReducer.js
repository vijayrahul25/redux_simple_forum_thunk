// counterReducer.js

import * as actionType from "../actions/ActionType";
const initialUserState = {
  users: []
};
export default function userReducer(state = initialUserState.users, action) {
  switch (action.type) {
    case actionType.LOAD_USER_SUCCESS:
      return action.users;
      break;

    case actionType.CREATE_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    case actionType.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user)
      ];
    default:
      return state;
  }
}
