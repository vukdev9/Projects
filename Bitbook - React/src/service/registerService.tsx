import { http } from "./http";
import { register } from "../shared/constants";
import { login } from "../shared/constants";
import { passwordChange } from "../shared/constants";
import jwt_Decode from "jwt-decode";

export const sendingRegistrationData = (payload: any) => {
  return http.post(register, payload).then((data) => {
    localStorage.setItem("token", data.token);
    const token: any = localStorage.getItem("token");
    getUserId(token);
    return data;
  });
};

export const sendLoginData = (payload: any) => {
  return http.post(login, payload).then((data) => {
    localStorage.setItem("token", data.token);
    const token: any = localStorage.getItem("token");
    getUserId(token);
    return data;
  });
};

export const getUserId = (token: any) => {
  const jwtToken: { _id: any } = jwt_Decode(token);
  return jwtToken._id;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const changePassword = (data: any) => {
  return http.patch(passwordChange, data);
};
