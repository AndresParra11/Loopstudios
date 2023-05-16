import React from "react";
import { StylesLinkModal } from "./StylesLinkModal";

const LinkModal = ({ menu }) => {
  return (
    <div>
      <StylesLinkModal>{menu.title.toUpperCase()}</StylesLinkModal>
    </div>
  );
};

export default LinkModal;
