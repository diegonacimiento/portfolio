import React from 'react';

interface ContactIconProps {
  icon: string;
  name: string;
  link: string;
  linkSpanish?: string;
  language: boolean;
}

const ContactIcon: React.FC<ContactIconProps> = ({ icon, name, link, linkSpanish, language }) => {
  const href = link === "diegonacimiento18@gmail.com"
    ? `mailto:${link}`
    : name === "CV"
      ? language
        ? linkSpanish
        : link
      : link;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} - ${language ? 'Abrir en nueva pestaña' : 'Open in new tab'}`}
    >
      <div
        className="item-icon-contact"
        style={{
          margin: "auto",
          height: "30px",
          width: "30px",
          backgroundImage: `url("${icon}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <p>{name}</p>
    </a>
  );
};

export default ContactIcon; 