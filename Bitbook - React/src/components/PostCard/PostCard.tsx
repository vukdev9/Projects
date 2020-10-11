import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CommentIcon from "@material-ui/icons/Comment";
import ReactPlayer from "react-player";
import { userService } from "../../service/userService";
import { useHistory } from "react-router";
import { bufferDecode } from "../../shared/helperFunction";
import { commentService } from "../../service/commentService";
import { postService } from "../../service/postService";

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    cursor: "pointer",
    margin: "10px",
    boxShadow: "10px 10px 7px #b6b4b4",
    border: "1px solid #b6b4b4",
    display: "inline-block",
    width: "90%",
    height: "93%",
    minHeight: "400px",
    marginBottom: "30px",
    position: "relative",
  },
  iconButton: {
    color: "#8f8c8c",
  },
  iconButtonLike: {
    color: "red",
  },
  email: {
    fontSize: "15px",
    fontWeight: 400,
    fontStyle: "italic",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  comment: {
    marginLeft: "5px",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const PostCard = ({ type, id, owner, created, src }: any) => {
  const classes = useStyles();
  const [imageShow, setImageShow] = useState<boolean>(false);
  const [videoShow, setVideoShow] = useState<boolean>(false);
  const [textShow, setTextShow] = useState<boolean>(false);
  const [user, setUser] = useState<null | any>([]);
  const [comments, setComments] = useState<null | any>([]);
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/posts/${id}`);
  };

  useEffect(() => {
    // to hide white space if post has only text
    if (type === "image") {
      setImageShow(true);
    }
    if (type === "video") {
      setVideoShow(true);
    }
    if (type === "text") {
      setTextShow(true);
    }

    userService.getSingleUser(owner).then((user: any) => setUser(user));
    if (id) {
      if (postService.getSinglePost(id)) {
        commentService.getPostComments(id).then((comments) => {
          setComments(comments);
        });
      }
    }
  }, []);

  //get the date
  const time = new Date(created);
  const date = `${time.getDate()}.${
    time.getMonth() + 1
  }.${time.getFullYear()}.`;

  // get name
  const name = (): string => {
    return `${user.firstName} ${user.lastName}`;
  };

  // get URL from buffer
  const source = bufferDecode(type, src);

  const decodeAvatar = () => {
    if (user.avatarUrl) {
      return bufferDecode("image", user.avatarUrl);
    } else {
      return "https://portal.staralliance.com/cms/aux-pictures/prototype-images/avatar-default.png/@@images/image.png";
    }
  };

  return (
    <Card className={classes.root} onClick={clickHandler}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={decodeAvatar()}
          />
        }
        title={name()}
        subheader={`Published at: ${date}`}
      />
      {videoShow && (
        <ReactPlayer url={source} controls={true} width="100%" height="50%" />
      )}
      {imageShow && <CardMedia className={classes.media} image={source} />}
      <CardContent style={{ overflow: "hidden" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {textShow && source}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          position: "absolute",
          bottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <h3 className={classes.email}>email: {user.email}</h3>
        <IconButton>
          <CommentIcon className={classes.iconButton} />
          <span className={classes.comment}>{comments.length}</span>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
