import axios from "axios";
import { LOGIN_START } from ".";
import APIUrls from '../helpers/urls';


export function startLogin(){
    return {
        type: LOGIN_START
    }
}

export function login(email, password){
    return (dispatch) => {
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
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}