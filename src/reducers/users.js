import { FETCH_ALL_USERS, FETCH_FRIENDS_OF_USER } from "../actions";

const initialUserState = {
  inProgress: true,
  error: "",
  friends: [],
  allUsers: [],
};

export default function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: action.users,
      };
    case FETCH_FRIENDS_OF_USER:
      return {
        ...state,
        friends: action.friends,
      };
    default:
      return {
        ...state,
      };
  }
}
