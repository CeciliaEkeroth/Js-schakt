import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Logo from "../images/JS-logo1.png"
import Grader from "../images/grader.png"
import Excavator from "../images/excavator.png"
import Plumbing from "../images/plumbing.png"
import Truck from "../images/truck.png"

const Startpage = () => {
  return (
    <>
      <Header />
      <div>
        <img src="https://via.placeholder.com/1350x500" alt="" className="heroImg" />
        <img src={Logo} alt="" className="jsLogoHeader"/>
        <h1 className="welcomeText">Välkommen till JS Schakt</h1>
        <div className="startpageContainer">
          <div className="box">
            <img src={Grader} alt="" className="startIcons" />
            <h2>Väghyvel</h2>
            <button>Läs mer</button>
          </div>
          <div className="box">
            <img src={Excavator} alt="" className="startIcons"/>
            <h2>Grävmaskin</h2>
            <button>Läs mer</button>
          </div>
          <div className="box">
            <img src={Truck} alt="" className="startIcons"/>
            <h2>Lastbil</h2>
            <button>Läs mer</button>
          </div>
          <div className="box">
            <img src={Plumbing} alt="" className="startIconsPlum"/>
            <h2>Övriga tjänster</h2>
            <button>Läs mer</button>
          </div>
        </div>
        <div className="aboutDiv">
          <img src="https://via.placeholder.com/300x500" alt="" className="aboutImg" />
          <h3 className="aboutH">om företaget</h3>
          <p className="aboutP">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            corrupti, laboriosam mollitia perferendis veniam enim quia eligendi
            dolorum delectus ex accusamus molestiae nisi ducimus ullam eaque
            nihil quibusdam magnam quo?
          </p>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Startpage;
