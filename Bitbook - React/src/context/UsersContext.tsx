import React, { createContext, useState, useEffect } from "react";
import { userService } from "../service/userService";

const initialState: any = [];

const UsersContext = createContext(initialState);

const UsersProvider = ({ children }: any) => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    {
      token &&
        userService
          .getAllUsers()
          .then((allUsers) => setUsers(allUsers))
          .catch((error) => console.log(error));
    }
  }, []);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
