import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UserProfile from "../components/UserProfile/UserProfile";
import { Grid } from "@material-ui/core";
import { userService } from "../service/userService";
import { postService } from "../service/postService";
import UserPostContainer from "../components/UserPostContainer/UserPostContainer";

const UserProfilePage = ({ match }: any) => {
  const [user, setUser] = useState<null | any>(null);
  const [posts, setPosts] = useState<null | any>([]);
  const id = match.params.id;

  useEffect(() => {
    userService.getSingleUser(id).then((user) => setUser(user));
    postService.getUsersPosts(id).then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <Header showFeedButton={false} />
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <UserProfile user={user} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} xl={9}>
          <UserPostContainer posts={posts} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default UserProfilePage;
