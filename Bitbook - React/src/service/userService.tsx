import { http } from "./http";
import { users } from "../shared/constants";
import { User } from "../models/User";

const token: any = localStorage.getItem("token");

class UserService {
  getLoggedUser = () => {
    return http
      .get(`${users}/me`, token)
      .then((user) => new User(user))
      .catch((error) => console.log(error));
  };
  getAllUsers = () => {
    return http
      .get(users, token)
      .then((users) => {
        return users.data.map((user: object) => new User(user));
      })
      .catch((error) => console.log(error));
  };
  getSingleUser = (id: string) => {
    return http
      .get(`${users}/${id}`, token)
      .then((users) => new User(users.data))
      .catch((error) => console.log(error));
  };
  updateUser = (id: string, data: any) => {
    return http.patch(`${users}/${id}`, data, token);
  };
  uploadUserImage = (id: string, file: any) => {
    const formData = new FormData();
    formData.append("image", file, file.name);
    return http.post(`${users}/${id}/image`, formData, token);
  };
  deleteUser = (id: string) => {
    return http.delete(`${users}/${id}`, token);
  };
}

export const userService = new UserService();
