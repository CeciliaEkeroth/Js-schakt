import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Logo from "../images/JS-logo1.png"

const Grader = () => {
  return (
    <>
      <Header />
      <img src={Logo} alt="" className="jsLogoDetails"/>
      <div className="detailsContainer">
        <img src="https://via.placeholder.com/550x400" alt="" className="detailsImg"/>
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
