import React, { useState } from "react";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useNavigate, useLocation } from "react-router-dom";

const MobileHeader = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation().pathname;

  function toggleIcon(e) {
    if (e) {
      return <AiOutlineClose />;
    } else {
      return <FiMenu />;
    }
  }

  return (
    <>
      <div className="mobileHeader">
        <button
          className="mobileHeaderBtn"
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          {toggleIcon(showMenu)}
        </button>
        <h2 className="mobileHeaderName" onClick={() => navigate("/")}>JS Schakt</h2>
      </div>
      <div
        className="menuBackground"
        style={{ display: showMenu ? "initial" : "none" }}
      >
        <div className="menuBar">
          <ul>
            <li
              className="menuText"
              onClick={() => navigate("/")}
              style={{ color: location === "/" ? "#FFC700" : "black" }}
            >
              Hem
            </li>
            <li className="yellowMenu"></li>
            <li
              className="menuText"
              onClick={() => navigate("/vaghyvel")}
              style={{ color: location === "/vaghyvel" ? "#FFC700" : "black" }}
            >
              Väghhyvel
            </li>
            <li className="yellowMenu"></li>
            <li
              className="menuText"
              onClick={() => navigate("/gravmaskin")}
              style={{
                color: location === "/gravmaskin" ? "#FFC700" : "black",
              }}
            >
              Grävmaskin
            </li>
            <li className="yellowMenu"></li>
            <li
              className="menuText"
              onClick={() => navigate("/lastbil")}
              style={{ color: location === "/lastbil" ? "#FFC700" : "black" }}
            >
              Lastbil
            </li>
            <li className="yellowMenu"></li>
            <li
              className="menuText"
              onClick={() => navigate("/andra")}
              style={{ color: location === "/andra" ? "#FFC700" : "black" }}
            >
              Övriga tjänster
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
