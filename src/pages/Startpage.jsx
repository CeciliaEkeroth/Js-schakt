import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import Logo from "../images/JS-logo1.png";
import Grader from "../images/grader.png";
import Excavator from "../images/excavator.png";
import Plumbing from "../images/plumbing.png";
import Truck from "../images/truck.png";
import Vaghyvel8 from "../images/vaghyvel8.jpg";
import Maskiner from "../images/maskiner.jpg";
import Hjulspar from "../images/hjulspår.jpg";
import Lastbil from "../images/lastbil.jpg";
import Foretaget from "../images/företaget.png";
import Vag from "../images/väg.jpg";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import { Helmet } from "react-helmet-async";

const Startpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>JS Schakt - Gräv, Schakt & Transportarbeten</title>
        <meta
          name="description"
          content="JS Schakt är ett Gräv, Schakt & Transportföretag i Halland"
        />
      </Helmet>
      <Header />
      <MobileHeader />
      <Carousel
        className="heroImg"
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
      >
        <div>
          <img src={Vaghyvel8} alt="Väghyvel med skog i bakgrunden" />
        </div>
        <div>
          <img src={Maskiner} alt="flertal maskiner på gårdsplan" />
        </div>
        <div>
          <img src={Hjulspar} alt="Hjulspår från maskin" />
        </div>
        <div>
          <img src={Lastbil} alt="Lastbil med maskin på släpet" />
        </div>
        <div>
          <img src={Vag} alt="Skogsväg med maskinspår" />
        </div>
      </Carousel>
      <div>
        <img src={Logo} alt="JS Schakt logotyp" className="jsLogoHeader" />
        <h1 className="welcomeText">Välkommen till JS Schakt</h1>
        <div className="startpageContainer" data-aos="slide-up">
          <div className="box">
            <img src={Grader} alt="Ikon för väghyvel" className="startIcons" />
            <h2>Väghyvel</h2>
            <button onClick={() => navigate("/vaghyvel")}>Läs mer</button>
          </div>
          <div className="box">
            <img
              src={Excavator}
              alt="Ikon för grävmaskin"
              className="startIcons"
            />
            <h2>Grävmaskin</h2>
            <button onClick={() => navigate("/gravmaskin")}>Läs mer</button>
          </div>
          <div className="box">
            <img src={Truck} alt="Ikon för lastbil" className="startIcons" />
            <h2>Lastbil</h2>
            <button onClick={() => navigate("/lastbil")}>Läs mer</button>
          </div>
          <div className="box">
            <img
              src={Plumbing}
              alt="Ikon för avlopp"
              className="startIconsPlum"
            />
            <h2>Övriga tjänster</h2>
            <button onClick={() => navigate("/andra")}>Läs mer</button>
          </div>
        </div>
        <div className="aboutDiv">
          <img
            src={Foretaget}
            alt="Maskindörr med JS schakt logotyp på sidan"
            className="aboutImg"
          />
          <h3 className="aboutH">om företaget</h3>
          <p className="aboutP">
            Har "flerårig branchvana" många kontakter. Startade företaget hösten
            2009, samma år som jag gick ut skolan (transportpogrammet inriktning
            anläggning, Kattegattgymnasiet, Halmstad) efter kortare anställning
            på NCC Roads (Ballast), där jag sommarjobbat sedan 15 års ålder. Har
            kört väghyvel sedan sommaren 2010, som f-skattare, började i en
            Mattsson 161, därefter en Mattsson 261 V, och sedan våren 2015 äger
            jag en Veekmas FG 2327 S. "Behörigheter" Är registrerad/har id06,
            har körkort A BE CE , YKB (yrkeskompetensbevis) ADR (Farligt gods,
            Grund och Explosivt) Förarbevis, Hjullastare,
            Grävmaskin/grävlastare, Väghyvel, säkerhet på väg och arbete på väg
          </p>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Startpage;
