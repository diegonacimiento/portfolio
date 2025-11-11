import React, { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import { HeaderProps } from "../../types/types";
import NavBar from "./NavBar";
import "../../assets/css/Header.css";

const screenMobile = window.innerWidth <= 712 || window.innerHeight <= 575;

const Header: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  const [isMobile, setIsMobile] = useState(screenMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 890 || window.innerHeight <= 575;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", handleResize);
    
    // Limpieza del event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const redirectHome = () => {
    window.location.href = "";
  };

  return (
    <header>
      <div id="div-logo" onClick={redirectHome}></div>
      {isMobile ? (
        <HeaderMobile language={language} changeLanguage={changeLanguage} />
      ) : (
        <NavBar language={language} changeLanguage={changeLanguage} />
      )}
    </header>
  );
};

export default Header;
