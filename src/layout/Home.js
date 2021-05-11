import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageOne from "../components/PageOne";
import "../layout/home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <PageOne />
        <Footer />
      </div>
    </>
  );
}

export default Home;
