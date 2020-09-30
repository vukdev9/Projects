import React, { useEffect, useState } from "react";
import "./UserProfileList.css";
import { useHistory } from "react-router";
import { postService } from "../../service/postService";
import { bufferDecode } from "../../shared/helperFunction";

const UserProfileList = ({ id, email, name, avatar }: any) => {
  const [usersPosts, setUsersPosts] = useState([]);
  const history = useHistory();

  const decodeAvatar = () => {
    let defaultAvatar =
      "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    if (avatar) {
      return bufferDecode("image", avatar);
    } else {
      return defaultAvatar;
    }
  };

  useEffect(() => {
    postService
      .getUsersPosts(id)
      .then((posts) => setUsersPosts(posts))
      .catch((error) => console.log(error));
  }, []);

  const clickHandler = () => {
    history.push(`users/${id}`);
  };

  return (
    <div className="useritem" onClick={clickHandler}>
      <img src={decodeAvatar()} alt={name} />
      <div className="infowrapper">
        <h2>{name}</h2>
        <h4>{email}</h4>
        <h4>Number of Posts: {usersPosts.length}</h4>
      </div>
    </div>
  );
};

export default UserProfileList;
