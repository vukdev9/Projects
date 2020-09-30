export class Message {
  id: string;
  owner: string;
  to: string;
  body: string;
  from: string;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
  constructor(messageData: any) {
    this.id = messageData._id;
    this.owner = messageData.owner;
    this.to = messageData.to;
    this.from = messageData.from;
    this.seen = messageData.seen;
    this.body = messageData.body;
    this.createdAt = messageData.createdAt;
    this.updatedAt = messageData.updatedAt;
  }
}
