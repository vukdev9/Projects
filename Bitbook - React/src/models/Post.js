
export class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.imageUrl = postData.imageUrl;
        this.text = postData.text;
        this.isPublic = postData.isPublic;
        this.userId = postData.userId;
    }

    get validImage() {
        const regEx = new RegExp(/^((https?|ftp):)?\/\/.*(jpeg|jpg|png|gif|bmp)$/)
        if(regEx.test(this.imageUrl)) {
            return this.imageUrl
        }
        return null   
    }
}
