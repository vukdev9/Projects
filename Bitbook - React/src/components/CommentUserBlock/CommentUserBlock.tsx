import React from "react";
import "./CommentUserBlock.css";

interface commentUser {
  date: string;
  name: any;
  src: any;
}

const CommentUserBlock = ({ date, name, src }: commentUser) => {
  return (
    <div className="userComment">
      <div>
        <img src={src} alt={name} />
        <h1>{name}</h1>
      </div>

      <p>Created at: {date}</p>
    </div>
  );
};

export default CommentUserBlock;
