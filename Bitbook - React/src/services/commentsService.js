import { http } from "./fetchService";
import { Comment } from '../models/Comment'

class CommentsService {
    getPostComments(postId) {
        return http.get('https://crud-api.hypetech.xyz/v1/posts/' + postId + '/comments')
            .then(comments => {
                return comments.map((comment) => {
                    return new Comment(comment)
                })
            })
    }
}
export const commentsService = new CommentsService()