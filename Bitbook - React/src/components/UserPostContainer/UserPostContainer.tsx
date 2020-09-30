import React from "react";
import "./UserPostContainer.css";
import PostCard from "../PostCard/PostCard";
import { Grid } from "@material-ui/core";
import SadEmoji from "../SadEmoji/SadEmoji";

const UserPostContainer = ({ posts }: any) => {
  const renderList = () => {
    if (posts && posts.length > 0) {
      return posts.map((post: any) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <PostCard
              type={post.type}
              id={post.id}
              owner={post.owner}
              created={post.createAt}
              src={post.src}
              key={post.id}
            />
          </Grid>
        );
      });
    } else if (posts && posts.length === 0) {
      return (
        <div className="noPostWrapper">
          <h4 className="noPosts">User did not published any Posts</h4>
          <SadEmoji />
        </div>
      );
    }
  };

  return (
    <>
      <div className="postContainer">
        <div className="postHeading">
          <h2>Posts</h2>
        </div>
        <div id="postWrapper">
          <Grid container>{renderList()}</Grid>
        </div>
      </div>
    </>
  );
};
export default UserPostContainer;
