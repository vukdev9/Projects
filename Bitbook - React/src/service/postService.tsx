import { http } from "./http";
import { posts } from "../shared/constants";
import { Post } from "../models/Post";
import { users } from "../shared/constants";

class PostService {
  getAllPosts = () => {
    return http.get(posts).then((posts) => {
      return posts.data.map((post: any) => new Post(post));
    });
  };

  getSinglePost = (id: any) => {
    return http.get(`${posts}/${id}`).then((post) => new Post(post.data));
  };

  getUsersPosts = (id: any) => {
    return http.get(`${users}/${id}/posts`).then((posts) => {
      return posts.data.map((post: any) => new Post(post));
    });
  };

  createPost = (data: any) => {
    return http.post(posts, data);
  };

  updatePost = (id: any, data: any) => {
    return http.patch(`${posts}/${id}`, data);
  };

  deletePost = (id: any) => {
    return http.delete(`${posts}/${id}`);
  };
}

export const postService = new PostService();
