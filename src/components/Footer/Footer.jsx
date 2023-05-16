import React from "react";
import { menuFooter, menuSocial } from "../../data/data";
import LinkFooter from "../LinkFooter/LinkFooter";
import {
  ContainerLinksFooter,
  ContainerSocialMedia,
  StylesFooter,
} from "./StylesFooter";
import ImageSocialMedia from "../ImageSocialMedia/ImageSocialMedia";

const Footer = () => {
  return (
    <StylesFooter>
      <h2>loopstudios</h2>
      <ContainerLinksFooter>
        {menuFooter.map((menu) => (
          <LinkFooter key={`LinkFooter${menu.id}`} menu={menu} />
        ))}
      </ContainerLinksFooter>
      <ContainerSocialMedia>
        {menuSocial.map((image) => (
          <ImageSocialMedia key={`imageSocialMedia${image.id}`} image={image} />
        ))}
      </ContainerSocialMedia>
      <span>© 2021 Loopstudios. All rights reserved.</span>
    </StylesFooter>
  );
};

export default Footer;
