import React from "react";
import "./UserProfile.css";
import { bufferDecode } from "../../shared/helperFunction";

const UserProfile = ({ user }: any) => {
  const name = () => {
    if (user && user.firstName) {
      return `${user.firstName} ${user.lastName}`;
    }
  };

  const email = () => {
    if (user && user.email) {
      return user.email;
    }
  };

  const about = () => {
    if (user && user.about) {
      return user.about;
    }
  };

  const defaultAvatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvPasPbrVe2Txcc4aGbZkCddJkVTaj8uyb7A&usqp=CAU";

  const avatar = () => {
    if (user && user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return defaultAvatar;
    }
  };

  return (
    <div className="userProfile">
      <h1>{name()}</h1>
      <h5>e-mail: {email()}</h5>
      <img src={avatar()} alt={`${name()}`}></img>
      <p>{about()}</p>
    </div>
  );
};

export default UserProfile;
