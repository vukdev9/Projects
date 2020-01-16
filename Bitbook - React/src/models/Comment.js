export class Comment {
    constructor(commentData) {
        this.id = commentData.id;
        this.isPublic = commentData.isPublic;
        this.body = commentData.body;
        this.postId = commentData.postId;
        this.createdTime = commentData.createdAt;
        this.userId = commentData.userId;
    }
}