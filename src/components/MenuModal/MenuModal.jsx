import React from "react";
import { menuFooter } from "../../data/data";
import LinkModal from "../LinkModal/LinkModal";
import {
  ContainerMenus,
  ContainerTitle,
  StylesMenuModal,
} from "./StylesMenuModal";

export const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <StylesMenuModal>
      <ContainerTitle>
        <h2>loopstudios</h2>
        <span
          className="material-symbols-outlined"
          onClick={onClose}
          style={{ color: "white" }}
        >
          close
        </span>
      </ContainerTitle>
      <ContainerMenus>
        {menuFooter.map((menu) => (
          <LinkModal key={`LinkModal${menu.id}`} menu={menu} />
        ))}
      </ContainerMenus>
    </StylesMenuModal>
  );
};
