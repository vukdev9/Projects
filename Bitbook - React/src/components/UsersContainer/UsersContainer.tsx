import React, { useState, useContext } from "react";
import "./UsersContainer.css";
import { Grid } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import AppsIcon from "@material-ui/icons/Apps";
// import ListIcon from "@material-ui/icons/List";
import { UsersContext } from "../../context/UsersContext";
import UserProfileList from "../UserProfileList/UserProfileList";

const UsersContainer = (): any => {
  const [list, setList] = useState([12, 12, 6, 4, 3]);
  const users = useContext(UsersContext);
  return (
    <>
      <div className="headAndButton">
        <div className="heading-wrapper">
          <h1 id="users">Users</h1>
        </div>
        {/* <div className="button-wrapper">
          <Button variant="outlined" color="inherit">
            <AppsIcon />
          </Button>
          <Button variant="outlined" color="inherit">
            <ListIcon />
          </Button>
        </div> */}
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
