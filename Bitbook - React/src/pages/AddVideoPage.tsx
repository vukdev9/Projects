import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddVideo from "../components/AddVideo/AddVideo";

const AddVideoPage = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <AddVideo />
      <Footer />
    </>
  );
};

export default AddVideoPage;
