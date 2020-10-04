import React, { useState, useEffect } from "react";
import "./SinglePost.css";
import ReactPlayer from "react-player";
import { bufferDecode } from "../../shared/helperFunction";

interface singlePost {
  type: any;
  id: any;
  owner: any;
  createdAt: any;
  src: any;
}

const SinglePost = ({ type, src, createdAt }: singlePost) => {
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (type === "image") {
      setShowImage(true);
    }
    if (type === "video") {
      setShowVideo(true);
    }
    if (type === "text") {
      setShowText(true);
    }
  }, [type]);

  //URL
  const url = () => {
    if (src) {
      return bufferDecode(type, src);
    }
  };

  //DATE
  const time = new Date(createdAt);
  const date = `${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()}`;

  return (
    <div className="singlePost">
      {showImage && <img src={url()} alt="..." className="postImage" />}
      {showVideo && (
        <ReactPlayer url={url()} controls={true} width="100%" height="500px" />
      )}
      {showText && <p className="postText">{url()}</p>}
      <p id="publish">Published at: {date} </p>
    </div>
  );
};

export default SinglePost;
