import React, { useContext, useEffect } from "react";
import "./Profile.css";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { bufferDecode } from "../../shared/helperFunction";

const Profile = () => {
  const { loggedUser, user } = useContext(LoggedUserContext);

  useEffect(() => {
    loggedUser();
  }, []);

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

  const image = () => {
    if (user && user.avatarUrl && user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
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
