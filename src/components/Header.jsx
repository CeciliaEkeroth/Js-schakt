import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
      <>
        <div className='header'>
            <p className='headerLogo' onClick={() => navigate("/")}>JS Schakt</p>
            <p className='headerLink' onClick={() => navigate("/vaghyvel")}>Väghyvel</p>
            <p className='headerLink' onClick={() => navigate("/gravmaskin")}>Grävmaskin</p>
            <p className='headerLink' onClick={() => navigate("/lastbil")}>Lastbil</p>
            <p className='headerLink' onClick={() => navigate("/andra")}>Övriga tjänster</p>
            <button className='headerContact'>Kontakt</button>
        </div>
      </>
    );
  };
  
  export default Header;