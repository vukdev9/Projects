import { http } from "./http";
import { messages } from "../shared/constants";
import { Message } from "../models/Message";

class MessageService {
  getSentMessages = (senderID: any, receiverID: any) => {
    return http
      .get(`${messages}/sent/${senderID}/${receiverID}`)
      .then((message) => {
        return message.data.map((mess: any) => new Message(mess));
      });
  };

  getReceivedMessages = (senderID: any, receiverID: any) => {
    return http
      .get(`${messages}/received/${receiverID}/${senderID}`)
      .then((message) => {
        return message.data.map((mess: any) => new Message(mess));
      });
  };

  createMessage = (data: any) => {
    return http.post(`${messages}/send`, data);
  };

  getUnreadNumbers = (receiverID: any) => {
    return http.get(`${messages}/unread/${receiverID}`).then((number) => {
      return number.data;
    });
  };

  getUnreadFromSpecificUser = (senderID: string, receiverID: string) => {
    return http
      .get(`${messages}/unread/${senderID}/${receiverID}`)
      .then((message) => {
        return message.data;
      });
  };

  readAllMessagesFromSpecificUser = (
    senderID: string,
    receiverID: string,
    data: any
  ) => {
    return http.patch(`${messages}/read/${senderID}/${receiverID}`, data);
  };
}

export const messageService = new MessageService();
