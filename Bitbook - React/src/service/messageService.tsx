import { http } from "./http";
import { messages } from "../shared/constants";
import { Message } from "../models/Message";

const token = localStorage.getItem("token");

class MessageService {
  getSentMessages = (senderID: any, receiverID: any) => {
    return http
      .get(`${messages}/sent/${senderID}/${receiverID}`, token)
      .then((message) => {
        return message.data.map((mess: any) => new Message(mess));
      });
  };

  getReceivedMessages = (senderID: any, receiverID: any) => {
    return http
      .get(`${messages}/received/${receiverID}/${senderID}`, token)
      .then((message) => {
        return message.data.map((mess: any) => new Message(mess));
      });
  };

  createMessage = (data: any) => {
    return http.post(`${messages}/send`, data, token);
  };

  getUnreadNumbers = (receiverID: any) => {
    return http
      .get(`${messages}/unread/${receiverID}`, token)
      .then((number) => {
        return number.data;
      });
  };

  getUnreadFromSpecificUser = (senderID: string, receiverID: string) => {
    return http
      .get(`${messages}/unread/${senderID}/${receiverID}`, token)
      .then((message) => {
        return message.data;
      });
  };
}

export const messageService = new MessageService();
