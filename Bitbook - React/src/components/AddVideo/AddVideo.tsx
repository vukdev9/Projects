import React, { useState, useContext } from "react";
import "../AddImage/AddImage.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useForm } from "react-hook-form";
import { postService } from "../../service/postService";
import { useHistory } from "react-router";
import { MyPostsContext } from "../../context/MyPostsContext";

const inputTitleStyle = {
  width: "30%",
  marginBottom: "20px",
};

const inputFullStyle = {
  marginBottom: "20px",
};

const AddVideo = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isPublic, setIsPublic] = useState(false);
  const history = useHistory();
  const myPostsContext = useContext(MyPostsContext);

  const toggleIsPublic = () => {
    setIsPublic((prev) => !prev);
  };

  const onSubmit = (data: any) => {
    postService
      .createPost(data)
      .then(() => myPostsContext.fetchMyPosts())
      .then(() => setTimeout(() => history.push("profile"), 1000))
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="addtext">
        <h1>ADD VIDEO</h1>
        <div className="headingDiv">
          <TextField
            name="type"
            value="video"
            id="outlined-helperText"
            label="Type"
            variant="outlined"
            style={inputTitleStyle}
            inputRef={register({ required: true, minLength: 2 })}
          />
          <div className="labelbutton">
            <FormControlLabel
              control={
                <Switch
                  name="isPublic"
                  checked={isPublic}
                  color="primary"
                  onChange={toggleIsPublic}
                  inputRef={register()}
                />
              }
              label="Is it post Public?"
            />
          </div>
        </div>
        <TextField
          name="src"
          label="YouTube Video..."
          variant="outlined"
          type="url"
          required
          style={inputFullStyle}
          inputRef={register()}
          error={Boolean(errors.src)}
          helperText={errors.src ? "Enter valid youtube video" : ""}
        />
        <div className="addPostWrapper">
          <Button variant="contained" color="primary" type="submit">
            ADD POST
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddVideo;
