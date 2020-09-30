export class Post {
  id: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  src: string;
  constructor(postData: any) {
    this.id = postData._id;
    this.owner = postData.owner;
    this.createdAt = postData.createdAt;
    this.updatedAt = postData.updatedAt;
    this.type = postData.type;
    this.src = postData.src;
  }
}
