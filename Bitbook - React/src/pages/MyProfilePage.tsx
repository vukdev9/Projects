import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
import PostContainer from "../components/PostContainer/PostContainer";
import { Grid } from "@material-ui/core";

const MyProfile = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <Grid container>
        <Grid item xs={12} sm={5} md={4} lg={3} xl={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={7} md={8} lg={9} xl={9}>
          <PostContainer />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MyProfile;
