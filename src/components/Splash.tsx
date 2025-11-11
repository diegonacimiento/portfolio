import React from "react";
import "../assets/css/Splash.css";

interface SplashProps {
  year?: string;
}

const Splash: React.FC<SplashProps> = ({ year = "2023" }) => {
  return (
    <div 
      className="container-splash" 
      role="status" 
      aria-label="Cargando aplicación"
    >
      <div id="splash" aria-hidden="true"></div> 
      <p>{year}</p>
    </div>
  );
};

export default Splash;