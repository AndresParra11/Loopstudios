import React from "react";
import { BannerContainer } from "./StylesBanner";
import BannerImage from "../../assets/images/mobile/image-interactive.jpg";

const Banner = () => {
  return (
    <BannerContainer>
      <figure>
        <img src={BannerImage} alt="BannerImage" />
      </figure>
      <h2>THE LEADER IN INTERACTIVE VR</h2>
      <p>
        Founden in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        arward-winning creations have transformed businesses through digital
        experiencies that bind to their brand.
      </p>
    </BannerContainer>
  );
};

export default Banner;
