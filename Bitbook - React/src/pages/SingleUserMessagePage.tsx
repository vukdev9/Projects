import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MessageContainer from "../components/MessageContainer/MessageContainer";
import { userService } from "../service/userService";

const headerStyling = {
  marginTop: "20px",
  marginBottom: "30px",
};

const SingleUserMessagePage = ({ match }: any) => {
  const [user, setUser] = useState<null | any>();
  const id = match.params.id;

  useEffect(() => {
    userService
      .getSingleUser(id)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

  const name = () => {
    if (user && user.firstName) {
      return `${user.firstName} ${user.lastName}`;
    }
  };

  const receiverid = () => {
    if (user && user.id) {
      return user.id;
    }
  };

  return (
    <>
      <Header showFeedButton={false} />
      <h1 style={headerStyling}>Conversation with {name()} </h1>
      <MessageContainer receiverID={receiverid()} otherUser={user} />
      <Footer />
    </>
  );
};

export default SingleUserMessagePage;
