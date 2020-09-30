import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Grid } from "@material-ui/core";
import UploadProfileImage from "../components/UploadProfileImage/UploadProfileImage";
import UploadUserInput from "../components/UploadUserInput/UploadUserInput";
import { LoggedUserContext } from "../context/LoggedUserContext";

const EditProfilePage = () => {
  const user = useContext(LoggedUserContext);
  return (
    <>
      <Header showFeedButton={false} />
      <Grid
        container
        direction="row"
        justify="center"
        style={{ marginTop: "100px" }}
      >
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <UploadProfileImage user={user.user} />
        </Grid>
        <Grid item xs={false} sm={1} md={1} lg={1} xl={1}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={5}>
          <UploadUserInput user={user.user} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default EditProfilePage;
