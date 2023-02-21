import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import MobileHeader from "../components/MobileHeader";
import Logo from "../images/JS-logo1.png";
import Maskiner from "../images/maskiner.jpg";
import Ovrig from "../images/övrig.jpg";
import Hjulspar from "../images/hjulspår.jpg";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet-async";

const Other = () => {
  return (
    <>
      <Helmet>
        <title>JS Schakt - Enskilt Avlopp & Övriga arbeten</title>
        <meta
          name="description"
          content="JS Schakt - Installation av enskilda avloppsanläggningar. Diplomerad och godkänd av kommunen. Olika alternativ på enskilda avlopp är t.ex. från en vanlig 3-kammarbrunn (slamavskiljare) med efterföljande infiltration till ett komplett minireningsverk."
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
            <img
              src={Maskiner}
              alt="En samling av maskiner som står på ett gårdsplan"
            />
          </div>
          <div>
            <img src={Hjulspar} alt="Hjulspår från en maskin" />
          </div>
          <div>
            <img src={Ovrig} alt="Man som klättrar upp på sidan av en maskin" />
          </div>
        </Carousel>
        <img src={Logo} alt="JS Schakt logotyp" className="jsLogoDetails" />
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
