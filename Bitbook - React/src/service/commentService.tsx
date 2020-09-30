import { http } from "./http";
import { posts } from "../shared/constants";
import { comments } from "../shared/constants";
import { Comment } from "../models/Comment";

const token = localStorage.getItem("token");

class CommentService {
  createComment = (data: any) => {
    return http.post(comments, data, token);
  };

  getPostComments = (id: any) => {
    return http.get(`${posts}/${id}/comments`, token).then((comments) => {
      return comments.data.map((comment: any) => new Comment(comment));
    });
  };

  deleteComment = (id: any) => {
    return http.delete(`${comments}/${id}`, token);
  };
}

export const commentService = new CommentService();
