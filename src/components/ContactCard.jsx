import React from "react";
import Logo from "../images/JS-logo1.png";

const ContactCard = () => {
  return (
    <>
      <div className="modal-content">
        <span className="close">&times;</span>
        <div className="contactCard">
          <img src={Logo} alt="" className="contactCardLogo"/>
          <div className="yellowLine"></div>
            <h2 className="contactCardH2">Kontakinformation</h2>
            <h3 className="contactCardH3">Johan Söderström</h3>
            <p className="contactCardOne">Tel:</p>
            <p className="contactCardTwo">0705-16 42 60</p>
            <p className="contactCardOne">Tel:</p>
            <p className="contactCardTwo">0733-29 44 10</p>
            <p className="contactCardOne">Email:</p>
            <p className="contactCardTwo">johan@js-schakt.se</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
