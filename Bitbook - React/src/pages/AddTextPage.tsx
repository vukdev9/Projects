import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddText from "../components/AddText/AddText";

const AddTextPage = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <AddText />
      <Footer />
    </>
  );
};

export default AddTextPage;
