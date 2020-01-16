
export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.imageUrl = postData.imageUrl;
        this.text = postData.text;
        this.isPublic = postData.isPublic;
        this.userId = postData.userId;
    }
}
