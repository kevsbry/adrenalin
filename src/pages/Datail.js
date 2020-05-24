import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import DetailContent from "../components/DetailContent";

const Datail = (props) => {
  const { slug } = props.match.params;

  return (
    <div className="page">
      <Nav />
      <DetailContent slug={slug} />
      <Footer />
    </div>
  );
};

export default Datail;
