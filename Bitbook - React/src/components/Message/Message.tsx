import React, { useContext, useEffect } from "react";
import "./Message.css";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { bufferDecode } from "../../shared/helperFunction";
import { messageService } from "../../service/messageService";

const Message = ({ body, date, user, from, to, myID, data }: any) => {
  const myUser = useContext(LoggedUserContext);

  useEffect(() => {
    messageService.readAllMessagesFromSpecificUser(user.id, myID, data);
  }, []);

  //getting users image
  const image = () => {
    if (from) {
      if (user && user.avatarUrl) {
        return bufferDecode("image", user.avatarUrl);
      } else {
        return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
      }
    } else if (to) {
      if (myUser.user && myUser.user.avatarUrl) {
        return bufferDecode("image", myUser.user.avatarUrl);
      } else {
        return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
      }
    }
  };

  //getting user name
  const name = () => {
    if (from) {
      if (user && user.firstName) {
        return `${user.firstName} ${user.lastName}`;
      }
    } else {
      return `${myUser.user.firstName} ${myUser.user.lastName}`;
    }
  };

  //getting date of message
  const createdAt = new Date(date);
  const time = `${createdAt.getDate()}.${
    createdAt.getMonth() + 1
  }.${createdAt.getFullYear()} - ${createdAt.getHours()}:${createdAt.getMinutes()}h`;

  return (
    <div className={from ? "message" : "messageProfile"}>
      <div className="userWrapper">
        <div>
          <img src={image()} alt="aaaa" />
          <h5>{name()}</h5>
        </div>
        <p id="date">sent: {time}</p>
      </div>
      <h2> {body} </h2>
    </div>
  );
};

export default Message;
