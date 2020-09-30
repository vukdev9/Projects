import React, { useState, useContext } from "react";
import "./AddImage.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { postService } from "../../service/postService";
import { MyPostsContext } from "../../context/MyPostsContext";

const inputTitleStyle = {
  width: "30%",
  marginBottom: "20px",
};

const inputFullStyle = {
  marginBottom: "20px",
};

interface FormInput {
  type: any;
  src: any;
}

const AddImagePost = () => {
  const { register, handleSubmit, errors } = useForm<FormInput>();
  const [isPublic, setCheckedComment] = useState(false);
  const history = useHistory();
  const myPostsContext = useContext(MyPostsContext);

  const toggleIsPublic = () => {
    setCheckedComment((prev) => !prev);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    postService
      .createPost(data)
      .then(() => myPostsContext.fetchMyPosts())
      .then(() => setTimeout(() => history.push("profile"), 500))
      .catch((error) => console.log(error));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="addtext">
        <h1>ADD IMAGE</h1>
        <div className="headingDiv">
          <TextField
            name="type"
            type="text"
            id="outlined-helperText"
            label="Type"
            value="image"
            variant="outlined"
            style={inputTitleStyle}
            inputRef={register()}
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
          label="Image URL..."
          variant="outlined"
          required
          type="url"
          style={inputFullStyle}
          inputRef={register({ required: true })}
          error={Boolean(errors.src)}
          helperText={errors.src ? "Enter valid image address" : ""}
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

export default AddImagePost;
