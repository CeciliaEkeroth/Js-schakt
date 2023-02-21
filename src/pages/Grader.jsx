import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileHeader from "../components/MobileHeader";
import Logo from "../images/JS-logo1.png";
import Vaghyvel8 from "../images/vaghyvel8.jpg";
import Vaghyvel11 from "../images/vaghyvel11.jpg";
import Vaghyvel3 from "../images/vaghyvel3.jpg";
import Vaghyvel4 from "../images/vaghyvel4.jpg";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";

const Grader = () => {
  return (
    <>
      <Helmet>
        <title>JS Schakt - Väghyvel</title>
        <meta
          name="description"
          content="JS Schakt - Veekmas FG 2327 S. Toppmodern, Fullutrustad Veekmas väghyvel. utför justeringar mot totalstation, GPS, laser, ultraljud, flukter, eller helt på frihand."
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
            <img src={Vaghyvel8} alt="Väghyvel med skog i bakgrunden" />
          </div>
          <div>
            <img src={Vaghyvel11} alt="Väghyvel på en väg" />
          </div>
          <div>
            <img src={Vaghyvel3} alt="Väghyvel körandes på skogsväg" />
          </div>
          <div>
            <img
              src={Vaghyvel4}
              alt="en bild tagen framifrån på en väghyvel körandes på skogsväg"
            />
          </div>
        </Carousel>
        <img src={Logo} alt="JS Schakt logotyp" className="jsLogoDetails" />
        <h1 className="detailsH">Veekmas FG 2327 S</h1>
        <p className="detailsP">
          Toppmodern, Fullutrustad Veekmas väghyvel. utför justeringar mot
          totalstation, GPS, laser, ultraljud, flukter, eller helt på frihand,
          med omgivningen som referens t.ex. brunnar hus, befintliga ytor. Full
          3-D styrning med dubbel-gps, ultraljud, lasermottagare. System 3000,
          strängspridare, snövinge, hydr. snö/grus-stopp, "fasta" grusstoppar,
          VV-skyltar m.m. Utför justeringar inför asfaltbeläggning och gjutning
          på större och mindre vägar, industriplaner, även inomhus i större
          industrilokaler, Även cementstablisering (åt bygg och
          anläggningsföretag), justering vid "djupfräsning" inför
          tankbeläggning, Justeringunderhåll av grusplaner, mottagning av
          material slitlager 0-16, bärlager 0-32, förstärkning 0-100.
          Underhållshyvling, kantskär, grusåtervinning, förstärkning på enskilda
          vägar och landsvägar. Isrivning/snöröjning på vägar och planer/större
          industriplaner/industrier
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Grader;
