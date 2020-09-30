import React from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "../PostCard/PostCard";

interface postInterface {
  posts: any;
}

const FeedContainer: React.FC<postInterface> = ({ posts }: postInterface) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Grid container>
        {posts.map((post: any) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={post.id}>
              <PostCard
                type={post.type}
                src={post.src}
                created={post.createdAt}
                owner={post.owner}
                id={post.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeedContainer;
