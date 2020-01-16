import { http } from "./fetchService";
import jwtDecode from 'jwt-decode'


export const logOut = () => {
    localStorage.removeItem("token");
}

export const getUserId = () => {
    const token = localStorage.getItem("token")
    const fromToken = jwtDecode(token)
    return fromToken.id
}

export const sendLoginData = (payload) => {

    const loginEndpoint = "http://crud-api.hypetech.xyz/v1/auth/login"
    return http.post(loginEndpoint, payload)
        .then(data => {
            console.log(data);
            localStorage.setItem("token", data.accessToken)
            getUserId()
            return data
        })
}

export const isUserLoggedIn = () => {
    return !!localStorage.getItem("token")
}