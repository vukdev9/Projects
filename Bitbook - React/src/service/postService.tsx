import { http } from "./http";
import { posts } from "../shared/constants";
import { Post } from "../models/Post";
import { users } from "../shared/constants";
import { getUserId } from "../service/registerService";

const token: string = localStorage.getItem("token")!;

const id = () => {
  if (token) {
    getUserId();
  }
};

class PostService {
  getAllPosts = () => {
    return http.get(posts, token).then((posts) => {
      return posts.data.map((post: any) => new Post(post));
    });
  };

  getSinglePost = (id: any) => {
    return http
      .get(`${posts}/${id}`, token)
      .then((post) => new Post(post.data));
  };

  getUsersPosts = (id: any) => {
    return http.get(`${users}/${id}/posts`, token).then((posts) => {
      return posts.data.map((post: any) => new Post(post));
    });
  };

  createPost = (data: any) => {
    return http.post(posts, data, token);
  };

  updatePost = (id: any, data: any) => {
    return http.patch(`${posts}/${id}`, data, token);
  };

  deletePost = (id: any) => {
    return http.delete(`${posts}/${id}`, token);
  };
}

export const postService = new PostService();
