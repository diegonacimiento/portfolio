import React, { useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Contact from "./Contact";
import Header from "./header/Header";
import Presentation from "./Presentation";
import Projects from "./Projects";
import "../assets/css/Layout.css";
import WorkExperience from "./WorkExperience";
import { Certifications } from "./Certifications";
import { Education } from "./Education";

AOS.init({
  duration: 500,
  once: true,
});

const spanish: boolean = JSON.parse(localStorage.getItem("spanish") ?? "null") ?? false;

const Layout: React.FC = () => {
  const [languageSelect, setLanguageSelect] = useState<boolean>(spanish);

  const changeLanguage = () => {
    setLanguageSelect(prev => !prev);
    localStorage.setItem("spanish", JSON.stringify(!languageSelect));
  }
  return (
    <>
      <Header language={languageSelect} changeLanguage={changeLanguage} />
      <main>
        <Presentation language={languageSelect} />
        <WorkExperience language={languageSelect} />
        <Projects language={languageSelect} />
        <Education language={languageSelect} />
        <Certifications language={languageSelect} />
        <Contact language={languageSelect} />
      </main>
    </>
  );
};

export default Layout;