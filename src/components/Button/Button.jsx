import React, { useState } from "react";
import { StylesButton } from "./StylesButton";

const Button = () => {
  const [isOvered, setIsOvered] = useState(false);

  const handleMouseOver = () => {
    setIsOvered(true);
  };

  const handleMouseOut = () => {
    setIsOvered(false);
  };

  const buttonColor = {
    color: isOvered ? "white" : "black",
    backgroundColor: isOvered ? "black" : "transparent",
  };

  return (
    <StylesButton
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={buttonColor}
    >
      SEE ALL
    </StylesButton>
  );
};

export default Button;
