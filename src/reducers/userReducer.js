// counterReducer.js

import * as actionType from "../actions/ActionType";
const initialUserState = {
  users: []
};
const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionType.LOAD_USER_SUCCESS:
      return action.users;
      
      break;
    default:
      return state;
  }
};

export default userReducer;
