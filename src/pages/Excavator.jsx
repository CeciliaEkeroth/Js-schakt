import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Logo from "../images/JS-logo1.png";

const Excavator = () => {
  return (
    <>
      <Header />
      <img src={Logo} alt="" className="jsLogoDetails" />
      <div className="detailsContainer">
        <img
          src="https://via.placeholder.com/550x400"
          alt=""
          className="detailsImg"
        />
        <h1 className="detailsH">CAT 307 B</h1>
        <p className="detailsP">
          9-tons bandare "fullutrustad", rototilt, planeringsskopa, grävskopa,
          smalskopa, gallerskopa, tjälkrok, gaffelställ, redskapsvagn/tippkärra,
          grävmaskinsmattor. Lågt marktryck, speciellt med "mattor"=tar sig fram
          bra i "relativt" sank terräng, Utför t.ex. byten av vägtrummor,
          "generell upprustning (restaurering) av vägar", dikning, skogsdikning,
          dräneringsarbeten, enskilda avlopp (länka),
          husgrunder/tillbyggnationer.
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Excavator;
