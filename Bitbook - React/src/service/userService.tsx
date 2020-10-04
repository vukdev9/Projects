import { http } from "./http";
import { users } from "../shared/constants";
import { User } from "../models/User";

class UserService {
  getLoggedUser = () => {
    return http
      .get(`${users}/me`)
      .then((user) => new User(user))
      .catch((error) => console.log(error));
  };
  getAllUsers = () => {
    return http
      .get(users)
      .then((users) => {
        return users.data.map((user: object) => new User(user));
      })
      .catch((error) => console.log(error));
  };
  getSingleUser = (id: string) => {
    return http
      .get(`${users}/${id}`)
      .then((users) => new User(users.data))
      .catch((error) => console.log(error));
  };
  updateUser = (id: string, data: any) => {
    return http.patch(`${users}/${id}`, data);
  };
  uploadUserImage = (id: string, file: any) => {
    let formData = new FormData();
    formData.append("image", file, file.name);
    return http.post(`${users}/${id}/image`, formData);
  };
  deleteUser = (id: string) => {
    return http.delete(`${users}/${id}`);
  };
}

export const userService = new UserService();
