import React, { createContext, useState, useEffect } from "react";
import { sendingRegistrationData } from "../service/registerService";
import { userService } from "../service/userService";

const initalState: any = null;

const LoggedUserContext = createContext(initalState);

const LoggedUserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService
      .getLoggedUser()
      .then((user: any) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  // const loggIn = (payload: any) => {
  //   sendingRegistrationData(payload).then((data) => setUser(data));
  // };

  const loggedUser = () => {
    userService.getLoggedUser().then((user: any) => setUser(user));
  };

  return (
    <LoggedUserContext.Provider value={{ user, loggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
};

export { LoggedUserContext, LoggedUserProvider };
