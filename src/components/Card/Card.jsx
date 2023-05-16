import React, { useState } from "react";
import { CardContainer } from "./StylesCard";

const Card = ({ creation }) => {
  const [isOvered, setIsOvered] = useState(false);

  const handleMouseOver = () => {
    setIsOvered(true);
  };

  const handleMouseOut = () => {
    setIsOvered(false);
  };

  return (
    <CardContainer>
      <figure>
        <img
          src={creation.image}
          alt={creation.title}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ opacity: isOvered ? "0.5" : "1" }}
        />
      </figure>
      <h2
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ color: isOvered ? "black" : "lightgray" }}
      >
        {creation.title}
      </h2>
    </CardContainer>
  );
};

export default Card;
