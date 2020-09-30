import { http } from "./http";
import { register } from "../shared/constants";
import { login } from "../shared/constants";
import { passwordChange } from "../shared/constants";
import jwt_Decode from "jwt-decode";

const token = localStorage.getItem("token")!;

export const sendingRegistrationData = (payload: any) => {
  return http.post(register, payload, null).then((data) => {
    localStorage.setItem("token", data.token);
    getUserId();
    return data;
  });
};

export const sendLoginData = (payload: any) => {
  return http.post(login, payload, null).then((data) => {
    localStorage.setItem("token", data.token);
    getUserId();
    return data;
  });
};

export const getUserId = () => {
  const jwtToken: { _id: any } = jwt_Decode(token);
  return jwtToken._id;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const changePassword = (data: any) => {
  return http.patch(passwordChange, data, token);
};
