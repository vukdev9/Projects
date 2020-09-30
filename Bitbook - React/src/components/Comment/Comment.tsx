import React, { useState, useEffect } from "react";
import "./Comment.css";
import CommentUserBlock from "../CommentUserBlock/CommentUserBlock";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { userService } from "../../service/userService";
import { commentService } from "../../service/commentService";
import { bufferDecode } from "../../shared/helperFunction";
import { getUserId } from "../../service/registerService";

const Comment = ({ id, body, owner, date, onCommentDeleted }: any) => {
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await userService.getSingleUser(owner);
      setUser(user);
    };
    fetchUser();
  }, [body, owner, id]);

  //GETTING DATE
  const time = new Date(date);
  const calendar = `${time.getDate()}.${
    time.getMonth() + 1
  }.${time.getFullYear()}.`;

  //GETTING NAME
  const name = () => {
    if (user && user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
  };

  const token = localStorage.getItem("token");
  const userId = getUserId(token);

  //DELETING COMMENT
  const handleDelete = () => {
    commentService.deleteComment(id).then(() => onCommentDeleted());
  };

  const deleteComment = () => {
    if (userId === owner) {
      return (
        <Button
          color="secondary"
          style={{ height: "100%", marginTop: "10px" }}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </Button>
      );
    }
  };

  //GETTING URL OF IMAGE
  const src = () => {
    if (user && user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiTmEByhKrmdFfajkjRlLp7odMiWT7qQBqUA&usqp=CAU";
    }
  };

  return (
    <div className="Comment">
      <CommentUserBlock date={calendar} name={name()} src={src()} />
      <div className="commentBody">
        <h3>{body}</h3>
        {deleteComment()}
      </div>
    </div>
  );
};

export default Comment;
