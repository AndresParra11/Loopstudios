import React, { useState, useEffect } from "react";
import { CardContainer } from "./StylesCard";

const Card = ({ creation }) => {
  const [isOvered, setIsOvered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMouseOver = () => {
    setIsOvered(true);
  };

  const handleMouseOut = () => {
    setIsOvered(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const imageSrc = windowWidth >= 900 ? creation.image2 : creation.image;

  return (
    <CardContainer>
      <figure>
        <img
          src={imageSrc}
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
