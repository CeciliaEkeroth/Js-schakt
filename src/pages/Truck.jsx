import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileHeader from "../components/MobileHeader";
import Logo from "../images/JS-logo1.png";
import Lastbil from "../images/lastbil.jpg";
import Lastbil2 from "../images/lastbil2.jpg";
import Transport from "../images/transport.jpg";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";

const Truck = () => {
  return (
    <>
      <Helmet>
        <title>JS Schakt - Lastbil & Transport</title>
        <meta
          name="description"
          content="Lastbil & Transportarbeten. Scania R 164 GB 6x4 lvx, 3 axlad lastväxlar lastbil med 3 axl. lvx. släp. div. lastväxlarflak"
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
            <img src={Lastbil} alt="Lastbil med maskin lastat på släpet" />
          </div>
          <div>
            <img src={Lastbil2} alt="Lastbil mot husvägg" />
          </div>
          <div>
            <img src={Transport} alt="Friggebod lastat på lastbilssläp" />
          </div>
        </Carousel>
        <img src={Logo} alt="JS Schakt logotyp" className="jsLogoDetails" />
        <h1 className="detailsH">Scania R 164 GB 6x4 lvx</h1>
        <p className="detailsP">
          3 axlad lastväxlar lastbil med 3 axl. lvx. släp. div. lastväxlarflak
          (grus/bergflak, maskinflak, 40 kubikare)
          "förmedlar"/säljer/transporterar t.ex. mottagning/bortforsling av
          schakt, bergkross/grus/sand/makadam, jord, sandningssand
          (saltinblandad), kalk och Gödsel (höns) "jordförbättring för
          lantbruk", spån (strö) m.m. Flyttar "mindre" maskiner (har även kört
          t.ex. bilar) och div. på maskinflak. container för skrot. "Utför även"
          spårgrusning, grusning av vägar/planer
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Truck;
