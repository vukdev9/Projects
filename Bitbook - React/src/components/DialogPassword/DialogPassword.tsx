import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { changePassword } from "../../service/registerService";
import { useForm } from "react-hook-form";

const DialogPassword = ({ handleOpen }: any) => {
  const [open, setOpen] = React.useState(true);
  const { register, handleSubmit } = useForm();

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    changePassword(data);
  };

  return (
    <div>
      <form>
        <Dialog
          open={open}
          onClose={handleOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter, email address, old password and then enter new
              password
            </DialogContentText>
            <TextField
              autoFocus
              name="email"
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              inputRef={register()}
            />
            <TextField
              name="password"
              margin="dense"
              id="password"
              label="Old Password"
              type="password"
              fullWidth
              inputRef={register()}
            />
            <TextField
              name="newPassword"
              margin="dense"
              id="changePaswword"
              label="New Password"
              type="c"
              fullWidth
              inputRef={register()}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit(onSubmit)} color="primary">
              Change Password
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default DialogPassword;
