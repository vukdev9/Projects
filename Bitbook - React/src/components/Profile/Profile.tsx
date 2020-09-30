import React, { useContext } from "react";
import "./Profile.css";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { bufferDecode } from "../../shared/helperFunction";

const Profile = () => {
  const profileContext = useContext(LoggedUserContext);

  const name = () => {
    if (profileContext && profileContext.user) {
      return `${profileContext.user.firstName} ${profileContext.user.lastName}`;
    }
  };

  const email = () => {
    if (profileContext && profileContext.user) {
      return profileContext.user.email;
    }
  };

  const about = () => {
    if (profileContext && profileContext.user) {
      return profileContext.user.about;
    }
  };

  const image = () => {
    if (
      profileContext &&
      profileContext.user &&
      profileContext.user.avatarUrl
    ) {
      return bufferDecode("image", profileContext.user.avatarUrl);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };
  return (
    <div className="profile">
      <h1>{name()}</h1>
      <h5>e-mail: {email()}</h5>
      <img src={image()} alt={name()} />
      <p>{about()}</p>
    </div>
  );
};

export default Profile;
