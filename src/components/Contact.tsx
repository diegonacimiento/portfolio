import React from "react";
import contactList from "../utils/contactList";
import getLanguage from "../utils/language";
import { LangProps } from "../types/types";
import "../assets/css/Contact.css";

const Contact: React.FC<LangProps> = ({ language }) => {
  const { navBar, contactPhrase } = getLanguage(language);
  
  return (
    <section id="section-contact" data-aos="fade-right" aria-labelledby="contact-title">
      <h2 id="contact-title" className="title-section">{navBar.contact}</h2>
      <div className="logo-contact" aria-hidden="true"></div>
      <h3>{contactPhrase}</h3>
      <div className="container-item-contact">
        {contactList.map((item, index) => (
          <a
            key={index}
            href={
              item.link === "diegonacimiento18@gmail.com"
                ? `mailto:${item.link}`
                : item.name === "CV"
                ? language
                  ? item.linkSpanish
                  : item.link
                : item.link
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} - ${language ? 'Abrir en nueva pestaña' : 'Open in new tab'}`}
          >
            <div
              className="item-icon-contact"
              style={{
                margin: "auto",
                height: "30px",
                width: "30px",
                backgroundImage: `url("${item.icon}")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden="true"
            ></div>
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
