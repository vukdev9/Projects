import React from "react";
import "./AvatarBlock.css";
import { bufferDecode } from "../../shared/helperFunction";

interface avatar {
  name: string;
  image: string;
}

const AvatarBlock = ({ name, image }: avatar) => {
  const url = bufferDecode("image", image);
  return (
    <div className="userBlock">
      <img src={url} alt="..." />
      <h1>{name}</h1>
    </div>
  );
};

export default AvatarBlock;
