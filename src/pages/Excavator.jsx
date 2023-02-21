import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileHeader from "../components/MobileHeader";
import Logo from "../images/JS-logo1.png";
import Gravmaskin from "../images/grävmaskin.jpg";
import Gravmaskin2 from "../images/grävmaskin2.jpg";
import Arbete3 from "../images/arbete3.jpg";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";

const Excavator = () => {
  return (
    <>
      <Helmet>
        <title>JS Schakt - Grävmaskin</title>
        <meta
          name="description"
          content="JS Schakt - CAT 307 B. 9-tons bandare fullutrustad, rototilt, planeringsskopa, grävskopa, smalskopa, gallerskopa, tjälkrok, gaffelställ, redskapsvagn/tippkärra, grävmaskinsmattor."
        />
      </Helmet>
      <Header />
      <MobileHeader />
      <div className="detailsContainer">
        <Carousel
          className="detailsImg"
          showThumbs={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
        >
          <div>
            <img src={Gravmaskin2} alt="Grävmaskin utomhus" />
          </div>
          <div>
            <img src={Gravmaskin} alt="Grävmaskin inomhus" />
          </div>
          <div>
            <img src={Arbete3} alt="En bäck i skogen som det har gärvts i" />
          </div>
        </Carousel>
        <img src={Logo} alt="JS Schakt logotyp" className="jsLogoDetails" />
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
