import React, { createContext, useState, useEffect } from "react";
import { postService } from "../service/postService";
import { getUserId } from "../service/registerService";

const token = localStorage.getItem("token");

const userId = () => {
  if (token) {
    return getUserId(token);
  }
};

const initialState: any = {
  posts: [],
};

const MyPostsContext = createContext(initialState);

const MyPostsProvider = ({ children }: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    {
      token &&
        postService
          .getUsersPosts(userId())
          .then((posts) => setPosts(posts))
          .catch((error) => console.log(error));
    }
  }, []);

  const fetchMyPosts = () => {
    postService.getUsersPosts(userId()).then((posts) => setPosts(posts));
  };

  return (
    <MyPostsContext.Provider value={{ posts, fetchMyPosts }}>
      {children}
    </MyPostsContext.Provider>
  );
};

export { MyPostsContext, MyPostsProvider };
