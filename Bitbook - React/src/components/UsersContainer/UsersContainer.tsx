import React, { useContext } from "react";
import "./UsersContainer.css";
import { Grid } from "@material-ui/core";
import { UsersContext } from "../../context/UsersContext";
import UserProfileList from "../UserProfileList/UserProfileList";

const UsersContainer = (): any => {
  const users = useContext(UsersContext);
  return (
    <>
      <div className="headAndButton">
        <div className="heading-wrapper">
          <h1 id="users">Users</h1>
        </div>
      </div>
      <div className="userContainer">
        <Grid container justify="flex-start" alignItems="center" spacing={2}>
          {users.map((users: any) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={users.id}>
                <UserProfileList
                  id={users.id}
                  avatar={users.avatarUrl}
                  email={users.email}
                  name={`${users.firstName} ${users.lastName}`}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default UsersContainer;
