import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./Drawer";
import { HeaderProps } from "../../types/types";
import ModalDrawer from "../../modals/ModalDrawer";

const modalDrawer = document.getElementById("modal-drawer");

const body = document.querySelector("body");
const HeaderMobile: React.FC<HeaderProps> = ({ language, changeLanguage }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const containerDrawer = useRef<HTMLDivElement>(null);

  const handleDrawer = () => {
    const buttonDrawer = document.querySelector("#drawer .button-drawer");
    setIsOpenDrawer((prev) => !prev);
    if (isOpenDrawer) {
      buttonDrawer?.removeAttribute("style");
      containerDrawer.current?.removeAttribute("style");
      modalDrawer?.removeAttribute("style");
      body?.removeAttribute("style");
    } else {
      containerDrawer.current?.setAttribute("style", "width: 190px;");
      modalDrawer?.setAttribute("style", "width: 100vw;");
      body?.setAttribute("style", "height: 100vh; overflow: hidden;");
      setTimeout(() => {
        buttonDrawer?.setAttribute("style", "opacity: 1");
      }, 225);
    }
  };

  const handleStuffedModal = () => {
    const buttonDrawer = document.querySelector("#drawer .button-drawer");
    setIsOpenDrawer((prev) => !prev);
    containerDrawer.current?.removeAttribute("style");
    modalDrawer?.removeAttribute("style");
    body?.removeAttribute("style");
    buttonDrawer?.removeAttribute("style");
  };

  return (
    <>
      <button
        type="button"
        title={isOpenDrawer ? "Cerrar cajón" : "Abrir cajón"}
        onClick={handleDrawer}
        className="button-drawer"
      >
        <GiHamburgerMenu />
      </button>
      <ModalDrawer>
        <div className="stuffed-modal" onClick={handleStuffedModal}></div>
        <Drawer
          language={language}
          changeLanguage={changeLanguage}
          containerDrawer={containerDrawer}
          handleDrawer={handleDrawer}
        />
      </ModalDrawer>
    </>
  );
};

export default HeaderMobile;
