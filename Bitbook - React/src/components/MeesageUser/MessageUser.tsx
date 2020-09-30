import React from "react";
import "./MessageUser.css";
import { useHistory } from "react-router";
import { bufferDecode } from "../../shared/helperFunction";

const MessageUser = ({ user }: any) => {
  const history = useHistory();

  const avatar = () => {
    if (user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };

  const clickHandler = () => {
    history.push(`/message/${user.id}`);
  };

  return (
    <div className="messageUser" onClick={clickHandler}>
      <img src={avatar()} alt={user.firstName} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
    </div>
  );
};

export default MessageUser;
