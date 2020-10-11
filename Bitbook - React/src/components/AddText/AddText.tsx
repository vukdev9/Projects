import React, { useState, useContext } from "react";
import "./AddText.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { postService } from "../../service/postService";
import { MyPostsContext } from "../../context/MyPostsContext";

interface FormInput {
  type: any;
  src: any;
}

const AddText = () => {
  const { register, handleSubmit, errors } = useForm<FormInput>();
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
      .then(() => setTimeout(() => history.push("profile"), 500))
      .catch((error) => console.log(error));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="addtext">
        <h1>ADD POST</h1>
        <div className="headingDiv">
          <TextField
            name="type"
            type="text"
            id="outlined-helperText"
            label="Type"
            value="text"
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
        </div>
        <TextField
          name="src"
          id="outlined-multiline-static"
          label="Description..."
          variant="outlined"
          multiline
          rows={20}
          style={{ marginBottom: "20px" }}
          inputRef={register({ required: true, minLength: 10 })}
          error={Boolean(errors.src)}
          helperText={
            errors.src ? "Description must be at least 10 charaters long" : ""
          }
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

export default AddText;
