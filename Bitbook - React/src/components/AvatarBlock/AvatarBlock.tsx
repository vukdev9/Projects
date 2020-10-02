import React from "react";
import "./AvatarBlock.css";
import { bufferDecode } from "../../shared/helperFunction";

interface avatar {
  name: string;
  image: string;
}

const AvatarBlock = ({ name, image }: avatar) => {
  const avatarImage = () => {
    if (image) {
      return bufferDecode("image", image);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };

  return (
    <div className="userBlock">
      <img src={avatarImage()} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default AvatarBlock;
