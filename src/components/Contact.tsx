import React from "react";
import contactList from "../utils/contactList";
import getLanguage from "../utils/language";
import { LangProps } from "../types/types";
import ContactIcon from "./ContactIcon";
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
          <ContactIcon
            key={index}
            icon={item.icon}
            name={item.name}
            link={item.link}
            linkSpanish={item.linkSpanish}
            language={language}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
