import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MessageContacts from "../components/MessageContancts/MessageContacts";
import { Grid } from "@material-ui/core";

const MessagePage = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <MessageContacts />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default MessagePage;
