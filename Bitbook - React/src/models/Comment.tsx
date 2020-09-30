export class Comment {
  id: string;
  postId: string;
  body: string;
  owner: string;
  createdAt: string;
  updateAt: string;
  constructor(commentData: any) {
    this.id = commentData._id;
    this.postId = commentData.postId;
    this.body = commentData.body;
    this.owner = commentData.owner;
    this.createdAt = commentData.createdAt;
    this.updateAt = commentData.updateAt;
  }
}
