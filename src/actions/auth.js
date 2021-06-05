import axios from "axios";
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from ".";
import { APIUrls } from '../helpers/urls';


export function startLogin() {
    return {
        type: LOGIN_START
    }
}
export function loginFailed(errorMsg) {
    return {
        type: LOGIN_FAILED,
        error: errorMsg
    }
}
export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user
    }
}


export function login(email, password) {
    return (dispatch) => {
        dispatch(startLogin());
        const data = JSON.stringify({
            "email": email,
            "password": password
        });
        const config = {
            method: 'post',
            url: APIUrls.login(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios(config)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                if(data.success){
                    dispatch(loginSuccess(data.data.user));
                    return;
                }
                else{
                    dispatch(loginFailed(data.message));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}