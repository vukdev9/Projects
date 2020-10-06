import React, { useContext, useEffect } from "react";
import "./MessageContacts.css";
import MessageUser from "../MeesageUser/MessageUser";
import { UsersContext } from "../../context/UsersContext";

const MessageContacts = () => {
  const { fetchUsers, users } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
  }, []);

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
