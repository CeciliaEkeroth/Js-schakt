import React from "react";
import { useState } from "react";
import ContactCard from "./ContactCard";

const Contact = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="contactDiv">
        <p className="contactText">Har du några frågor eller funderingar?</p>
        <button className="contactBtn" onClick={() => {
            setShowModal(true);
          }}>Kontakt</button>
      </div>
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
    </>
  );
};

export default Contact;
