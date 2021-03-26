import { useState } from "react";

import {
  makeStyles,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormGroup,
  FormControl,
  TextField,
  FormLabel,
  Checkbox,
  Radio,
  DialogActions,
  IconButton,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useStylesSignIn } from "../../pages/SignIn";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  classes: ReturnType<typeof useStylesSignIn>;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  classes,
}): React.ReactElement => {
  // const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="signup-modal">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={handleClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.loginSideField}
              autoFocus
              id="email"
              label="Your email"
              type="email"
              fullWidth
            />
            <TextField
              className={classes.loginSideField}
              autoFocus
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <Button
              onClick={handleClose}
              color="primary"
              style={{ marginBottom: 14 }}
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </FormGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
