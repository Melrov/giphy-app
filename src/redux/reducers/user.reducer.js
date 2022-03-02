import { SET_User, Clear_User } from "../actions";

export default function userReducer(state = null, action) {
  switch (action.type) {
    case SET_User:
      return action.payload;
    case Clear_User:
      return null;
    default:
      return state;
  }
}
