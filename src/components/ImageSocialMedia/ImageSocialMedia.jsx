import { ImageSocial } from "./StylesImageSocial";

const ImageSocialMedia = ({ image }) => {
  return (
    <figure>
      <ImageSocial src={image.img} alt="social media" />
    </figure>
  );
};

export default ImageSocialMedia;
