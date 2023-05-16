import React, { useState } from "react";
import { ContainerTitleHeader, StylesHeader } from "./StylesHeader";
import { MenuModal } from "../MenuModal/MenuModal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.getElementById("root").style.overflow = "hidden";
    document.getElementById("root").style.height = "100vh";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.getElementById("root").style.overflow = "visible";
    document.getElementById("root").style.height = "100%";
  };

  return (
    <StylesHeader>
      <ContainerTitleHeader>
        <h2>loopstudios</h2>
        <span className="material-symbols-outlined" onClick={openModal}>
          menu
        </span>
      </ContainerTitleHeader>
      <h1>
        IMMERSIVE EXPERIENCES THAT <br /> DELIVER
      </h1>
      <MenuModal isOpen={modalOpen} onClose={closeModal} />
    </StylesHeader>
  );
};

export default Header;
