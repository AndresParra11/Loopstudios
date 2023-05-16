import React from "react";
import { StylesLinkFooter } from "./StylesLinkFooter";

const LinkFooter = ({ menu }) => {
  return (
    <div>
      <StylesLinkFooter>{menu.title}</StylesLinkFooter>
    </div>
  );
};

export default LinkFooter;
