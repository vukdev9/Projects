import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import UsersContainer from "../components/UsersContainer/UsersContainer";

const UsersPage = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <UsersContainer />
      <Footer />
    </>
  );
};
export default UsersPage;
