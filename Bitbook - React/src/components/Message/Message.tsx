import React, { useContext, useEffect } from "react";
import "./Message.css";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { bufferDecode } from "../../shared/helperFunction";
import { messageService } from "../../service/messageService";

const Message = ({ body, date, otherUser, from, to, myID, data }: any) => {
  const { user, loggedUser } = useContext(LoggedUserContext);

  useEffect(() => {
    messageService.readAllMessagesFromSpecificUser(otherUser.id, myID, data);
    loggedUser();
  }, []);

  //getting users image
  const image = () => {
    if (from) {
      if (otherUser && otherUser.avatarUrl) {
        return bufferDecode("image", otherUser.avatarUrl);
      } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU";
      }
    } else if (to) {
      if (user && user.avatarUrl) {
        return bufferDecode("image", user.avatarUrl);
      } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU";
      }
    }
  };

  //getting user name
  const name = () => {
    if (from) {
      if (otherUser && otherUser.firstName) {
        return `${otherUser.firstName} ${otherUser.lastName}`;
      }
    } else {
      if (user && user.firstName) {
        return `${user.firstName} ${user.lastName}`;
      }
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
