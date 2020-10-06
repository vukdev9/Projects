import { http } from "./http";
import { posts } from "../shared/constants";
import { comments } from "../shared/constants";
import { Comment } from "../models/Comment";

class CommentService {
  createComment = (data: any) => {
    return http.post(comments, data);
  };

  getPostComments = (id: any) => {
    return http.get(`${posts}/${id}/comments`).then((comments) => {
      return comments.data.map((comment: any) => new Comment(comment));
    });
  };

  deleteComment = (id: any) => {
    return http.delete(`${comments}/${id}`);
  };
}

export const commentService = new CommentService();
