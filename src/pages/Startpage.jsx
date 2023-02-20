import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Logo from "../images/JS-logo1.png";
import Grader from "../images/grader.png";
import Excavator from "../images/excavator.png";
import Plumbing from "../images/plumbing.png";
import Truck from "../images/truck.png";
import { useNavigate } from "react-router-dom";

const Startpage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <img
          src="https://via.placeholder.com/1350x500"
          alt=""
          className="heroImg"
        />
        <img src={Logo} alt="" className="jsLogoHeader" />
        <h1 className="welcomeText">Välkommen till JS Schakt</h1>
        <div className="startpageContainer">
          <div className="box">
            <img src={Grader} alt="" className="startIcons" />
            <h2>Väghyvel</h2>
            <button onClick={() => navigate("/vaghyvel")}>Läs mer</button>
          </div>
          <div className="box">
            <img src={Excavator} alt="" className="startIcons" />
            <h2>Grävmaskin</h2>
            <button onClick={() => navigate("/gravmaskin")}>Läs mer</button>
          </div>
          <div className="box">
            <img src={Truck} alt="" className="startIcons" />
            <h2>Lastbil</h2>
            <button onClick={() => navigate("/lastbil")}>Läs mer</button>
          </div>
          <div className="box">
            <img src={Plumbing} alt="" className="startIconsPlum" />
            <h2>Övriga tjänster</h2>
            <button onClick={() => navigate("/andra")}>Läs mer</button>
          </div>
        </div>
        <div className="aboutDiv">
          <img
            src="https://via.placeholder.com/300x500"
            alt=""
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
