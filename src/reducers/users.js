import {
  FETCH_START,
  FETCH_ALL_USERS,
  FETCH_FRIENDS_OF_USER,
  FETCH_USER_PROFILE,
} from "../actions";

const initialUserState = {
  inProgress: true,
  error: "",
  friends: [],
  allUsers: [],
  profile: {
    user: {},
    posts: [],
    articles: [],
    owner: false,
    requests: []
  }
};

export default function user(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        inProgress: true,
      }
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
    case FETCH_USER_PROFILE:
      return {
        ...state,
        profile: action.data,
        inProgress: false,
      };
    default:
      return {
        ...state,
      };
  }
}
