import React, { useState, useEffect, useContext } from "react";
import "./MessageContacts.css";
import MessageUser from "../MeesageUser/MessageUser";
import { UsersContext } from "../../context/UsersContext";
import { messageService } from "../../service/messageService";
import { getUserId } from "../../service/registerService";

const myID = getUserId();

const MessageContacts = () => {
  const [unreadMessage, setUnreadMEssage] = useState(0);
  const users = useContext(UsersContext);

  const receivedID = users.map((user: any) => console.log(user.id));

  // useEffect(() => {
  //   messageService
  //     .getUnreadFromSpecificUser("5f69cd592d468b0017f5c2bc", myID)
  //     ;
  // }, []);

  const dispalyUnreadNotification = () => {
    users.map((user: any) =>
      messageService
        .getUnreadFromSpecificUser(user.id, myID)
        .then((unread: any) => console.log(unread))
    );
  };

  dispalyUnreadNotification();

  return (
    <div className="messageContacts">
      <h1>Pick user to send a message</h1>
      {users.map((user: any) => {
        return <MessageUser user={user} key={user.id} />;
      })}
    </div>
  );
};

export default MessageContacts;
