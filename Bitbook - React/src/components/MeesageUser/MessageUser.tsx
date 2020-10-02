import React, { useState, useEffect } from "react";
import "./MessageUser.css";
import { useHistory } from "react-router";
import { bufferDecode } from "../../shared/helperFunction";
import { messageService } from "../../service/messageService";
import { getUserId } from "../../service/registerService";

const MessageUser = ({ user }: any) => {
  const [unreadMessage, setUnreadMessage] = useState(0);
  const history = useHistory();
  const token = localStorage.getItem("token");
  const myID = () => {
    if (token) {
      return getUserId(token);
    }
  };

  useEffect(() => {
    messageService
      .getUnreadFromSpecificUser(user.id, myID())
      .then((unread: any) => setUnreadMessage(unread));
  }, []);

  //image of user
  const avatar = () => {
    if (user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU";
    }
  };

  const displayUnreadMEssage = () => {
    if (unreadMessage > 0) {
      return <p style={{ color: "green" }}>new message</p>;
    }
  };

  const clickHandler = () => {
    history.push(`/message/${user.id}`);
  };

  return (
    <div className="messageUser" onClick={clickHandler}>
      <img src={avatar()} alt={user.firstName} />
      <h1>
        {`${user.firstName} ${user.lastName}`} {displayUnreadMEssage()}
      </h1>
    </div>
  );
};

export default MessageUser;
