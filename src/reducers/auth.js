import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    AUTHENTICATE_USER,
    LOGOUT,
    CLEAR_AUTH_STATE
} from "../actions";

const initialAuthState = {
    user: {},
    error: "",
    isLoggedIn: false,
    inProgress: false,
    isSignedUp: false,
    success: "",
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
      case CLEAR_AUTH_STATE:
        return {
          ...state,
          error: null
        };
      case LOGIN_START:
      case SIGNUP_START:
        return {
          ...state,
          inProgress: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.user,
          isLoggedIn: true,
          inProgress: false,
          error: "",
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.user,
          inProgress: false,
          isSignedUp: true,
          error: "",
          success: action.success
        };
      case LOGIN_FAILED:
      case SIGNUP_FAILED:
        return {
          ...state,
          inProgress: false,
          isSignedUp: false,
          error: action.error,
          success: null,
        };
      case AUTHENTICATE_USER:
        return {
          ...state,
          user: action.user,
          isLoggedIn: true,
        };
      case LOGOUT:
        return {
          ...state,
          user: {},
          isLoggedIn: false,
        };

      default:
        return state;
    }
}
