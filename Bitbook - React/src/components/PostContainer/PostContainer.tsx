import React, { useContext, useEffect } from "react";
import "./PostContainer.css";
import { Link } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { MyPostsContext } from "../../context/MyPostsContext";

const buttonStyling = {
  color: "#fff",
  backgroundColor: "#2196f3",
  height: "50px",
  margin: "10px 0px",
};

const addPostStyling = {
  textDecoration: "none",
};

const PostContainer = () => {
  const { fetchMyPosts, posts } = useContext(MyPostsContext);

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const renderPost = () => {
    if (posts) {
      if (posts.length === 0) {
        return (
          <h2 style={{ padding: "20px", color: "#2196f3", textAlign:"center" }}>
            There are no Posts yet...
          </h2>
        );
      } else {
        return posts.map((post: any) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={post.id}>
              <PostCard
                src={post.src}
                type={post.type}
                created={post.createdAt}
                id={post.id}
                owner={post.owner}
              />
            </Grid>
          );
        });
      }
    }
  };

  return (
    <>
      <div className="postContainer">
        <div className="postHeading">
          <h2>Posts</h2>
          <Link to="/profile/edit" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={buttonStyling}>
              UPDATE PROFILE
            </Button>
          </Link>
        </div>
        <div id="postWrapper">
          <Grid container>{renderPost()}</Grid>
        </div>
      </div>
      <div className="buttonWrapper">
        <Link to="/addvideo" style={addPostStyling}>
          <Button variant="contained"> + ADD VIDEO</Button>
        </Link>
        <Link to="/addimage" style={addPostStyling}>
          <Button variant="contained">+ ADD IMAGE</Button>
        </Link>
        <Link to="/addtext" style={addPostStyling}>
          <Button variant="contained">+ ADD TEXT</Button>
        </Link>
      </div>
    </>
  );
};

export default PostContainer;
