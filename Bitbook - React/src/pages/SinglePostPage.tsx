import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AvatarBlock from "../components/AvatarBlock/AvatarBlock";
import SinglePost from "../components/SinglePost/SinglePost";
import Loader from "../components/Loader/Loader";
import CommentContainer from "../components/CommentContainer/CommentContainer";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import BackupIcon from "@material-ui/icons/Backup";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { postService } from "../service/postService";
import { userService } from "../service/userService";
import { commentService } from "../service/commentService";
import { getUserId } from "../service/registerService";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SinglePostPage = (props: any) => {
  const [singlePost, setSinglePost] = useState<null | any>([]);
  const [user, setUser] = useState<null | any>(null);
  const [comments, setComments] = useState<null | any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const classes = useStyles();
  const id = props.match.params.id;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const post = await postService.getSinglePost(id);
        setSinglePost(post);
        const user = await userService.getSingleUser(post.owner);
        setUser(user);
        fetchComments();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, [id]);

  const fetchComments = async () => {
    const comment = await commentService.getPostComments(id);
    setComments(comment);
  };

  if (loading) {
    return <Loader />;
  }
  //UPLOAD POST
  const onUpdatePost = (data: any) => {
    postService
      .updatePost(id, data)
      .then(() => {
        setTimeout(() => window.location.reload(), 200);
      })
      .catch((error) => console.log(error));
  };

  //DELETE POST
  const onDeletePost = () => {
    postService
      .deletePost(id)
      .then(() => {
        setTimeout(() => history.push("/profile"), 1000);
      })
      .catch((error) => console.log(error));
  };

  //FINDING IF THIS IS YOUR POSTS, SO YOU CAN CHANGE THEM OR DELETE
  const token = localStorage.getItem("token");
  const tokenId = getUserId(token);

  const deleteAndUploadBtn = () => {
    if (user.id === tokenId) {
      return (
        <div style={{ marginBottom: "60px" }}>
          <form onSubmit={handleSubmit(onUpdatePost)}>
            <TextField
              name="src"
              label="Update Post..."
              variant="outlined"
              type="url"
              style={{ width: "50%" }}
              inputRef={register()}
              error={Boolean(errors.image)}
              helperText={errors.image ? "Enter valid image address" : ""}
            />
            <TextField
              name="type"
              value={singlePost.type}
              style={{ display: "none" }}
              inputRef={register()}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<BackupIcon />}
              className={classes.button}
            >
              Upload Post
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={onDeletePost}
            >
              Delete Post
            </Button>
          </form>
        </div>
      );
    }
  };

  return (
    <>
      <Header showFeedButton={false} />
      <Grid container justify="center" alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          lg={9}
          xl={9}
          style={{ marginBottom: "40px" }}
        >
          <AvatarBlock
            image={user.avatarUrl}
            name={`${user.firstName} ${user.lastName}`}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <SinglePost
            type={singlePost.type}
            src={singlePost.src}
            id={singlePost.id}
            owner={singlePost.owner}
            createdAt={singlePost.createdAt}
          />
          {deleteAndUploadBtn()}
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <CommentContainer
            comments={comments}
            postId={singlePost.id}
            onCommentCreated={() => fetchComments()}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default SinglePostPage;
