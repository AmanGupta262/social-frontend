import axios from "axios";
import {
    LOGIN_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    AUTHENTICATE_USER,
    LOGOUT
} from ".";
import { APIUrls } from "../helpers/urls";

export function startLogin() {
    return {
        type: LOGIN_START
    };
}
export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error
    };
}
export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    };
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(startLogin());
        const data = JSON.stringify({
            email: email,
            password: password
        });
        const config = {
            method: "post",
            url: APIUrls.login(),
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios(config)
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                if (data.success) {
                    dispatch(loginSuccess(data.data.user));
                    localStorage.setItem('token', data.data.toke);
                    return;
                }
            })
            .catch(function (error) {
                const errorMsg = error.response.data.message;
                dispatch(loginFailed(errorMsg));
            });
    };
}

export function signup(email, password, confirmPassword, name) {
    return (dispatch) => {
        dispatch(startSignup());
        const data = JSON.stringify({
            email,
            password,
            confirmPassword,
            name
        });
        const config = {
            method: "post",
            url: APIUrls.register(),
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        };
        axios(config)
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                if (data.success) {
                    dispatch(signupSuccess(data.data.user));
                    return;
                }
            })
            .catch(function (error) {
                const errorMsg = error.response.data.message;
                dispatch(signupFailed(errorMsg));
            });
    };
}


export function startSignup() {
    return {
        type: SIGNUP_START
    };
}
export function signupFailed(error) {
    return {
        type: SIGNUP_FAILED,
        error
    };
}
export function signupSuccess(user) {
    return {
        type: SIGNUP_SUCCESS,
        user
    };
}

export function authenticateUser(user){
    return {
        type: AUTHENTICATE_USER,
        user
    }
}
export function logout() {
    return {
        type: LOGOUT
    }
}