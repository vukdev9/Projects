import React, { createContext, useState } from "react";
import { postService } from "../service/postService";
import { getUserId } from "../service/registerService";
import { useHistory } from "react-router";

const initialState: any = {
  posts: [],
};

const MyPostsContext = createContext(initialState);

const MyPostsProvider = ({ children }: any) => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const fetchMyPosts = () => {
    const token = localStorage.getItem("token");
    const userId = () => {
      if (token) {
        return getUserId(token);
      }
    };
    postService.getUsersPosts(userId()).then((posts) => setPosts(posts));
  };

  const deletePost = (id:any) => {
    postService.deletePost(id).then(() => fetchMyPosts()).then(() => setTimeout(() => history.push("/profile"), 1000)).catch((error) => console.log(error))
  }

  const updatePost = (id: any, data: any) => {
    postService.updatePost(id, data).then(() => fetchMyPosts()).then(() => setTimeout(() => history.push("/profile"), 1000)).catch((error) => console.log(error))
  }

  return (
    <MyPostsContext.Provider value={{ posts, fetchMyPosts, deletePost, updatePost }}>
      {children}
    </MyPostsContext.Provider>
  );
};

export { MyPostsContext, MyPostsProvider };