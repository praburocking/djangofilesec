import React, { Fragment, useState, useCallback } from "react";
import PropTypes from "prop-types";
import {useDropzone} from 'react-dropzone'
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Box,
  withStyles,
  TextField,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Bordered from "../../../shared/components/Bordered";

const styles = (theme) => ({
  floatButtonWrapper: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000,
  },
  inputRoot: {
    width: 190,
    "@media (max-width:  400px)": {
      width: 160,
    },
    "@media (max-width:  360px)": {
      width: 140,
    },
    "@media (max-width:  340px)": {
      width: 120,
    },
  },
  uploadIcon: {
    fontSize: 48,
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  imgWrapper: { position: "relative" },
  img: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: theme.shape.borderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  uploadText: {
    transition: theme.transitions.create(["color", "box-shadow", "border"], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: "9px 34px 9px 14.5px",
  },
  emojiTextArea: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -1,
  },
  dNone: {
    display: "none",
  },
});

const inputOptions = ["None", "Slow", "Normal", "Fast"];

function AddPostOptions(props) {
  const {
    Dropzone,
    classes,
    files,
    deleteItem,
    onDrop,
    EmojiTextArea,
    encrpytKey,
    DateTimePicker,
    reEncrpytKey,
    desc,

    uploadAt,
    onChangeUploadAt,
  } = props;

  const printFile = useCallback(() => {
    if (files[0]) {
      return (
        <div className={classes.imgWrapper}>
        <Grid  className={classes.img}  style={{ height: 148,backgroundColor:"#ff914d38"}} container direction="row" justify="center" alignItems="center">
          <Typography>
          {files[0].name}
          </Typography>
          </Grid> 
          <div className={classes.floatButtonWrapper}>
            <IconButton onClick={deleteItem}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      );
    }
    return (
      <Dropzone accept="*/*" onDrop={onDrop} fullHeight>
        <span className={classes.uploadText}>
          Click / Drop file <br /> here
        </span>
      </Dropzone>
    );
  }, [onDrop, files, classes, deleteItem]);

 

  return (
    <Fragment>
 
      <Typography paragraph variant="h6">
        Upload File
      </Typography>
      <Box mb={2}>
        {EmojiTextArea && (
          <EmojiTextArea
            inputClassName={classes.emojiTextArea}
            maxCharacters={2200}
            rightContent={printFile()}
            emojiSet="google"
            placeholder="Description"
            inputRef={desc}

          />
        )}
      </Box>
 
      <List disablePadding>
        <Bordered disableVerticalPadding disableBorderRadius>
        {/* <ListItem
              className="listItemLeftPadding"
              disableGutters
              divider={true}
              key={1}
            >
              <ListItemText>
                <Typography variant="body2">Auto Delete</Typography>
              </ListItemText>
              
                <ListItemSecondaryAction>
                <Switch
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
                </ListItemSecondaryAction>
   
            </ListItem>


          <ListItem divider disableGutters className="listItemLeftPadding">
            <ListItemText>
              <Typography variant="body2">Auto Delete File At</Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              {DateTimePicker && (
                <DateTimePicker
                  value={uploadAt}
                  format="yyyy/MM/dd hh:mm a"
                  onChange={onChangeUploadAt}
                  disablePast
                />
              )}
            </ListItemSecondaryAction>
          </ListItem>
          */}
            <ListItem
              className="listItemLeftPadding"
              disableGutters
              divider={true}
              key={2}
            >
              <ListItemText >
                <Typography variant="body2">Enter Encrption key for the file</Typography>
              </ListItemText>
              
                <ListItemSecondaryAction>
                <TextField
                      id="standard-password-input"
          label="Encryption Key"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          inputRef={encrpytKey}
        />
                </ListItemSecondaryAction>
   
            </ListItem>
            <ListItem
              className="listItemLeftPadding"
              disableGutters
           
              key={3}
            >
              <ListItemText>
                <Typography variant="body2">Re-Enter Encrption key for the file</Typography>
              </ListItemText>
              
                <ListItemSecondaryAction>
                <TextField
                      id="standard-password-input"
          label="Encryption Key"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          inputRef={reEncrpytKey}
         
        />
                </ListItemSecondaryAction>
   
            </ListItem>
       
        </Bordered>
      </List>
    </Fragment>
  );
}

AddPostOptions.propTypes = {
  onEmojiTextareaChange: PropTypes.func,
  DateTimePicker: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  classes: PropTypes.object,
  cropperFile: PropTypes.object,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func,
  onDrop: PropTypes.func,
  value: PropTypes.string,
  characters: PropTypes.number,
  uploadAt: PropTypes.instanceOf(Date),
  onChangeUploadAt: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(AddPostOptions);
