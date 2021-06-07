import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    AUTHENTICATE_USER,
    LOGOUT
} from "../actions";

const initialAuthState = {
    user: {},
    error: "",
    isLoggedIn: false,
    inProgress: false
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN_START:
        case SIGNUP_START:
            return {
                ...state,
                inProgress: true
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
                inProgress: false,
                error: ""
            };
        case LOGIN_FAILED:
        case SIGNUP_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };
        case AUTHENTICATE_USER:
            return {
                ...state,
                user: action.user,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }

        default:
            return state;
    }
}
