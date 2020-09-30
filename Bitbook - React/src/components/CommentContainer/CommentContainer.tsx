import React from "react";
import "./CommentContainer.css";
import Comment from "../Comment/Comment";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { commentService } from "../../service/commentService";
import { useForm } from "react-hook-form";

//STYLE INPUT
const inputStyle = {
  marginTop: "10px",
  marginLeft: "30px",
  width: "calc( 100% - 30px )",
};

const CommentContainer = ({ comments, onCommentCreated, postId }: any) => {
  const { register, handleSubmit } = useForm();

  //COMMENTS LIST
  const commentList = () => {
    if (comments.length > 0) {
      return comments.map(
        (comment: {
          id: string;
          body: string;
          owner: string;
          createdAt: string;
          postId: string;
        }) => {
          return (
            <Comment
              id={comment.id}
              body={comment.body}
              owner={comment.owner}
              date={comment.createdAt}
              onCommentDeleted={() => onCommentCreated()}
            />
          );
        }
      );
    } else {
      return (
        <h3 className="noComment">Be first to leave comment on this post</h3>
      );
    }
  };

  //CREATE COMMENT
  const onSubmit = (data: any, e: any) => {
    commentService.createComment(data).then(() => {
      onCommentCreated();
    });
    e.target.reset();
  };

  return (
    <>
      <h2>Comments</h2>
      <div className="container">{commentList()}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-multiline-static"
          name="body"
          label="Leave your comment..."
          multiline
          rows={4}
          variant="outlined"
          style={inputStyle}
          inputRef={register({ maxLength: "200" })}
        />
        <TextField
          name="postId"
          value={postId}
          style={{ display: "none" }}
          inputRef={register()}
        />
        <div className="buttons">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            <AddIcon />
            Add Comment
          </Button>
          <Button variant="outlined" color="primary">
            cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default CommentContainer;
