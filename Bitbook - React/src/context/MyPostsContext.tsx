import React, { createContext, useState, useEffect } from "react";
import { postService } from "../service/postService";
import { getUserId } from "../service/registerService";

const initialState: any = {
  posts: [],
};

const MyPostsContext = createContext(initialState);

const MyPostsProvider = ({ children }: any) => {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = () => {
    const token = localStorage.getItem("token");
    const userId = () => {
      if (token) {
        return getUserId(token);
      }
    };
    postService.getUsersPosts(userId()).then((posts) => setPosts(posts));
  };

  return (
    <MyPostsContext.Provider value={{ posts, fetchMyPosts }}>
      {children}
    </MyPostsContext.Provider>
  );
};

export { MyPostsContext, MyPostsProvider };
