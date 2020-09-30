import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
import PostContainer from "../components/PostContainer/PostContainer";
import { Grid } from "@material-ui/core";
import { MyPostsContext } from "../context/MyPostsContext";
import Loader from "../components/Loader/Loader";

const MyProfile = () => {
  const posts = useContext(MyPostsContext);
  return (
    <>
      <Header showFeedButton={false} />
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} xl={9}>
          <PostContainer posts={posts} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MyProfile;
