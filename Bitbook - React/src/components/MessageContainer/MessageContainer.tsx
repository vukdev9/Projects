import React, { useState, useEffect } from "react";
import "./MessageContainer.css";
import Message from "../Message/Message";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getUserId } from "../../service/registerService";
import { messageService } from "../../service/messageService";

const textFieldStyle = {
  width: "100%",
  marginTop: "15px",
};

const hideTextField = {
  display: "none",
};

const MessageContainer = ({ receiverID, user }: any) => {
  const { register, handleSubmit } = useForm();
  const [sent, setSent] = useState<boolean | any>();
  const [received, setReceived] = useState<boolean | any>();
  const id = getUserId();

  const fetchMessages = () => {
    messageService
      .getReceivedMessages(id, receiverID)
      .then((message) => setReceived(message));
    messageService
      .getSentMessages(id, receiverID)
      .then((message) => setSent(message));
  };

  useEffect(() => {
    fetchMessages();
  }, [receiverID]);

  //create message
  const onSubmit = (data: any, e: any) => {
    messageService.createMessage(data).then(() => fetchMessages());
    e.target.reset();
  };

  //render messages
  const messeges = () => {
    if (received && sent) {
      const allMessages = [...sent, ...received];
      var sortedMessages = allMessages.sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
      return sortedMessages.map((mess: any) => (
        <Message
          key={mess.id}
          body={mess.body}
          date={mess.createdAt}
          user={user}
          from={mess.from}
          to={mess.to}
        />
      ));
    }
  };

  return (
    <div className="messageContainer">
      {messeges()}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="body"
          variant="outlined"
          type="text"
          label="Enter your message..."
          inputRef={register()}
          style={textFieldStyle}
        />
        <TextField
          name="senderID"
          value={id}
          style={hideTextField}
          inputRef={register()}
        />
        <TextField
          name="receiverID"
          value={receiverID}
          style={hideTextField}
          inputRef={register()}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ float: "right", margin: "10px 0" }}
        >
          SEND MESSAGE
        </Button>
      </form>
    </div>
  );
};

export default MessageContainer;
