import React, { useContext, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DialogDeleteUser from "../../components/DialogDeleteUser/DeleteUser";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userService } from "../../service/userService";
import { useHistory } from "react-router";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { getUserId } from "../../service/registerService";

const halfInputStyling = {
  marginBottom: "30px",
  width: "48%",
  marginRight: "4%",
};

const halfInputSecondStyling = {
  marginBottom: "30px",
  width: "48%",
};

const fullInputStyling = {
  marginBottom: "30px",
  width: "100%",
};

const UploadUserInput = ({ user }: any) => {
  const { register, handleSubmit, errors } = useForm();
  const [dialog, setDialog] = useState<boolean>(false);
  const history = useHistory();
  const { loggedUser } = useContext(LoggedUserContext);
  const token = localStorage.getItem("token");
  const id = getUserId(token);

  useEffect(() => {
    prefixCatcher();
    firstNameCatcher();
  }, []);

  const onSubmit = (data: any) => {
    if (user && user.id) {
      userService
        .updateUser(user.id, data)
        .then(() => loggedUser())
        .then(() => setTimeout(() => history.push("/profile"), 500))
        .catch((error) => console.log(error));
    }
  };

  const deleteUser = () => {
    userService
      .deleteUser(id)
      .then(() => localStorage.clear())
      .then(() => history.push("/"));
  };

  const prefixCatcher = () => {
    if (user && user.prefix) {
      return user.prefix;
    }
  };

  const firstNameCatcher = () => {
    if (user && user.firstName) {
      return user.firstName;
    }
  };

  const lastNameCatcher = () => {
    if (user && user.lastName) {
      return user.lastName;
    }
  };

  const aboutCatcher = () => {
    if (user && user.about) {
      return user.about;
    }
  };

  const resetDialog = () => {
    setDialog(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          required
          autoFocus
          name="prefix"
          label="Prefix"
          variant="outlined"
          type="text"
          defaultValue={prefixCatcher()}
          style={fullInputStyling}
          inputRef={register({ required: true, minLength: 2 })}
          error={Boolean(errors.prefix)}
          helperText={
            errors.prefix ? "Prefix must be minimum 2 characters long" : ""
          }
        />
        <TextField
          required
          name="firstName"
          label="First Name"
          variant="outlined"
          type="text"
          defaultValue={firstNameCatcher()}
          style={halfInputStyling}
          inputRef={register({ required: true, minLength: 2 })}
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "First Name must be minimum 2 characters long"
              : ""
          }
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          variant="outlined"
          type="text"
          defaultValue={lastNameCatcher()}
          style={halfInputSecondStyling}
          inputRef={register({ required: true, minLength: 2 })}
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "Last Name must be minimum 2 characters long" : ""
          }
        />
        <TextField
          required
          name="about"
          id="outlined-multiline-static"
          label="About Yourself"
          multiline
          rows={4}
          variant="outlined"
          defaultValue={aboutCatcher()}
          style={fullInputStyling}
          inputRef={register({ required: true, minLength: 10 })}
          error={Boolean(errors.about)}
          helperText={
            errors.about ? "Description must be minimum 10 characters long" : ""
          }
        />
      </div>
      <div style={{ float: "right", marginBottom: "40px" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginRight: "20px" }}
        >
          <SaveIcon style={{ marginRight: "10px" }} />
          Save
        </Button>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="primary">
            Cancel
          </Button>
        </Link>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setDialog(true)}
      >
        Delete Profile
      </Button>
      {dialog ? (
        <DialogDeleteUser
          deleteUser={deleteUser}
          resetDialog={() => resetDialog()}
        />
      ) : null}
    </form>
  );
};

export default UploadUserInput;
