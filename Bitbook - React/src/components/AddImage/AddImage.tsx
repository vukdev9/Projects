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

  const uploadPhoto = (e: any) => {
    const file = e.target.files;
    postService
        .createImagePost(file)
        .then(() => myPostsContext.fetchMyPosts())
        .then(() => setTimeout(() => history.push("profile"), 500))
        .catch((error) => console.log(error));
  }

  // const onSubmit: SubmitHandler<FormInput> = (data:any) => {
  //   let forma = {...data};
  //   forma.src = forma.src[0];
  //   postService
  //     .createImagePost(forma)
  //     .then(() => myPostsContext.fetchMyPosts())
  //     .then(() => setTimeout(() => history.push("profile"), 500))
  //     .catch((error) => console.log(error));
  // };

  return (
    <form >
      <div className="addtext">
        <h1>ADD IMAGE</h1>
        {/* <div className="headingDiv">
          <TextField
            name="type"
            type="text"
            id="outlined-helperText"
            label="Type"
            value="image"
            variant="outlined"
            style={{ marginBottom: "20px", width: "30%" }}
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
        </div> */}
        <div className="inputWrapper">
          <label htmlFor="contained-button-file">
            Upload Image
          </label>
          <input
            name="src"
            accept="image/*"
            id="contained-button-file"
            type="file"
            style={{ width:"100%" }}
            onChange={uploadPhoto}
            // ref={register()}
          />
        </div>
        {/* <TextField
          name="src"
          label="Image URL..."
          variant="outlined"
          type="url"
          style={{ marginBottom: "20px" }}
          inputRef={register({ required: true })}
          error={Boolean(errors.src)}
          helperText={errors.src ? "Enter valid image address" : ""}
        /> */}
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
