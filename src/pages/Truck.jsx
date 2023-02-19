import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Logo from "../images/JS-logo1.png";

const Truck = () => {
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
