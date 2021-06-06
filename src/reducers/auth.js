import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const initialAuthState = {
    user: {},
    error: '',
    isLoggedIn: false,
    inProgress: false
}

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN_START:

            return {
                ...state,
                inProgress: true
            };
        case LOGIN_SUCCESS:

            return {
                ...state,
                user: action.user,
                isLoggedIn: true,
                inProgress: false,
                error: '',
            };
        case LOGIN_FAILED:
            return {
                ...state,
                inProgress: false,
                error: action.error
            };

        default:
            return state;
    }
}