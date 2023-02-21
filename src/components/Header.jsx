import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ContactCard";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation().pathname;

  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <p className="headerLogo" onClick={() => navigate("/")}>
          JS Schakt
        </p>
        <p
          className="headerLink"
          onClick={() => navigate("/vaghyvel")}
          style={{ color: location === "/vaghyvel" ? "#FFC700" : "white" }}
        >
          Väghyvel
        </p>
        <p
          className="headerLink"
          onClick={() => navigate("/gravmaskin")}
          style={{ color: location === "/gravmaskin" ? "#FFC700" : "white" }}
        >
          Grävmaskin
        </p>
        <p
          className="headerLink"
          onClick={() => navigate("/lastbil")}
          style={{ color: location === "/lastbil" ? "#FFC700" : "white" }}
        >
          Lastbil
        </p>
        <p
          className="headerLink"
          onClick={() => navigate("/andra")}
          style={{ color: location === "/andra" ? "#FFC700" : "white" }}
        >
          Övriga tjänster
        </p>
        <button
          className="headerContact"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Kontakt
        </button>

        <div
          id="myModal"
          className="modal"
          onClick={() => {
            setShowModal(false);
          }}
          style={{ display: showModal ? "initial" : "none" }}
        >
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Header;
