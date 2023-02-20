import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactCard from "./ContactCard";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <p className="headerLogo" onClick={() => navigate("/")}>
          JS Schakt
        </p>
        <p className="headerLink" onClick={() => navigate("/vaghyvel")}>
          Väghyvel
        </p>
        <p className="headerLink" onClick={() => navigate("/gravmaskin")}>
          Grävmaskin
        </p>
        <p className="headerLink" onClick={() => navigate("/lastbil")}>
          Lastbil
        </p>
        <p className="headerLink" onClick={() => navigate("/andra")}>
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
        <ContactCard/>
      </div>
      </div>
    </>
  );
};

export default Header;
