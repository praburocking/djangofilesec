import React, { useState, useCallback,useRef } from "react";
import PropTypes from "prop-types";
import {
  TextField,
Grid,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  withStyles,
} from "@material-ui/core";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import {forgotPassword} from '../../../services/connectToServer'
import constants from '../../../util/constants';
import {forgotPasswordVerify,resetPass} from '../../../services/connectToServer'

const styles = (theme) => ({
  dialogContent: {
    paddingTop: theme.spacing(2),
  },
  dialogActions: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

function ChangePassword(props) {
  const { onClose, classes, setLoginStatus } = props;
  const [isLoading, setIsLoading] = useState(false);
  const emailComp=useRef(null);

  const sendPasswordEmail = useCallback(async() => {
    setIsLoading(true);
    console.log("email ..",emailComp);
    const forgotPassRes=await forgotPassword({email:emailComp.current.value});
    if(forgotPassRes &&  !constants.errorResponse.includes(forgotPassRes.status))
    {
    setLoginStatus("verificationEmailSend");
    setIsLoading(false);

    }
    else
    {
    if(forgotPassRes.data.message)
    {
     // message.error(forgotPassRes.data.message);
    }
    else
    {
      //message.error("Exception while Signing-in ");
    }
  }

      setIsLoading(false);
      onClose();
   
  }, [setIsLoading, setLoginStatus, onClose]);

  return (
    <Grid>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendPasswordEmail();
        }}
      >
        <DialogContent className={classes.dialogContent}>
          <Typography paragraph>
            Enter your email address below and we will send you instructions on
            how to reset your password.
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            label="Email Address"
            autoFocus
            type="email"
            autoComplete="off"
            inputRef={emailComp}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={isLoading}
          >
            Reset password
            {isLoading && <ButtonCircularProgress />}
          </Button>
        </DialogActions>
      </form>
  </Grid>
  );
}

ChangePassword.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  setLoginStatus: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ChangePassword);
