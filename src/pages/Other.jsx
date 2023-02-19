import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Logo from "../images/JS-logo1.png";

const Other = () => {
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
        <h1 className="detailsH">Enskilt Avlopp</h1>
        <p className="detailsP">
          Är "diplomerad" ("generellt" godkänd av kommunen) för instalation av
          enskilda avloppsanläggningar. Att ett enskilt avlopp fungerar är mer
          än att vattnet rinner undan i vasken. Har man ett enskilt avlopp är
          sannolikheten stor att man även har en egen borrad/grävd brunn, =
          desto sämde ditt avlopp renar ditt avloppsvatten, desto mer av det
          dricker/duchar/tvättar... du i. Du är som fastighetsägare skyldig att
          se till att din fastighet uppfyller kraven för enskilda avlopp på
          aktuell(fastighetens) plats, även för din egen skull. Vilka krav som
          ställs är väldigt beroende på omgivande natur/terräng, t.ex.
          grundvattennivå, närliggande vattendrag/sjöar/brunnar, mycket berg,
          "jordart" grus/lera/morän. Vi (JS Schakt) hjälper er med kontakten med
          kommunens handläggare, som är med och "ser ut" vilken lösning som är
          bäst i varje enskilt fall. Olika alternativ på enskilda avlopp är
          t.ex. "från" en "vanlig" 3-kammarbrunn (slamavskiljare) med
          efterföljande infiltration "till" ett komplett minireningsverk.
          Sammarbetar med lokala leverantörer och kända märken.
        </p>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Other;
