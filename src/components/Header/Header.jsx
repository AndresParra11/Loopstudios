import React, { useState } from "react";
import {
  ContainerTitleHeader,
  MenuLinksHeader,
  StylesHeader,
} from "./StylesHeader";
import { MenuModal } from "../MenuModal/MenuModal";
import { menuFooter } from "../../data/data";
import LinkFooter from "../LinkFooter/LinkFooter";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.getElementById("root").style.overflow = "hidden";
    document.getElementById("root").style.height = "100vh";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.getElementById("root").style.overflow = "visible";
    document.getElementById("root").style.height = "100%";
  };

  return (
    <StylesHeader>
      <ContainerTitleHeader>
        <h2>loopstudios</h2>
        <span className="material-symbols-outlined" onClick={handleOpenModal}>
          menu
        </span>
        <MenuLinksHeader>
          {menuFooter.map((menu) => (
            <LinkFooter key={`LinkFooter${menu.id}`} menu={menu} />
          ))}
        </MenuLinksHeader>
      </ContainerTitleHeader>
      <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      <MenuModal isOpen={modalOpen} onClose={handleCloseModal} />
    </StylesHeader>
  );
};

export default Header;
