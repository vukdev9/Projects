import React, { createContext, useState, useEffect } from "react";
import { postService } from "../service/postService";
import { getUserId } from "../service/registerService";
// import UserPostsReducer from "../reducer/UserPostsReducer";

const token = localStorage.getItem("token");

const userId = () => {
  if (token) {
    return getUserId();
  }
};

const initialState: any = {
  posts: [],
};

const MyPostsContext = createContext(initialState);

const MyPostsProvider = ({ children }: any) => {
  const [posts, setPosts] = useState([]);
  // const [addingPost, setAddingPost] = useState([]);
  // const [state, dispach] = useReducer(UserPostsReducer, initialState);

  // const addPost = (post: any) => {
  //   dispach({
  //     type: "ADD_POST",
  //     payload: postService.createPost(post).then((post) => setAddingPost(post)),
  //   });
  // };

  useEffect(() => {
    postService
      .getUsersPosts(userId())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error));
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
