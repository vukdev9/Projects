import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddImage from "../components/AddImage/AddImage";

const AddImagePage = () => {
  return (
    <>
      <Header showFeedButton={false} />
      <AddImage />
      <Footer />
    </>
  );
};
export default AddImagePage;
