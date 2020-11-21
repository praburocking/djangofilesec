import React, { useCallback, useState,useRef ,useEffect} from "react";
import PropTypes from "prop-types";
import {
  TextField,Grid,Dialog,DialogTitle,DialogContentText,DialogContent,DialogActions,Button,Tooltip
} from "@material-ui/core";

import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import {state_to_props} from '../../../util/common_utils'
import {setUserDetailsToStore,userFetchType} from '../../../store/action'
import {connect} from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import {addUserImage,getUserImage,changePassword} from '../../../services/connectToServer'
import Badge from '@material-ui/core/Badge';
import Dropzone,{useDropzone} from 'react-dropzone'

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    overflowX: "auto",
    width: "100%",
    padding:"15px"
  },
  blackBackground: {
    backgroundColor: theme.palette.primary.main
  },
  contentWrapper: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2)
    },
    width: "100%"
  },
  dBlock: {
    display: "block !important"
  },
  dNone: {
    display: "none !important"
  },
  firstData: {
    paddingLeft: theme.spacing(3)
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const plan = [
  {
    value: 'Free',
    label: 'Free, 50MB',
  },
  {
    value: 'Plan A',
    label: 'Plan A, 100MB',
  },
  {
    value: 'Plan B',
    label: 'Plan B,  200MB',
  }
];

function SubscriptionTable(props) {
  const { transactions } = props;
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const  [isNameEdit,setNameEdit]=React.useState(false);
  const[name,setName]=React.useState(props.user.username);
  const [isPasswordEdit,setPasswordEdit]=useState(false);
  const oldPassword=useRef(null);
  const newPassword=useRef(null);
  const [userImageUrl,setUserImageUrl]=useState("");
    const onDrop = useCallback(acceptedFiles => {
    uploadFile(acceptedFiles[0]);
  }, [])
 

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/jpeg, image/png' })
   const classes = useStyles();
    useEffect(()=>{
        const asyncprocess=async ()=>{
        let imgResp= await getUserImage()
        if(imgResp.status===200)
        {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( imgResp.data );
        console.log("imageUrl ==>",imageUrl);
        setUserImageUrl(imageUrl);
        }
        }
        asyncprocess()
    },[])
 const uploadFile=(file)=>
{
    if(file)
    {
        const data = new FormData() 
        data.append('file', file);
       
        console.log("onchange",file);
        addUserImage(data);
    }
}
 
  console.log("subscription tablee ",props)
 const handleNameChange = (e) => {
   console.log("setName ",e)
    setName(e.target.value);
  };
const updateName=()=>
{   console.log("updatename ",name);
    props.setUserDetailsToStore({username:name},userFetchType.UPDATE)
    setNameEdit(false);
}
const updatePassword=async ()=>{
  console.log("pasword ==>  ",oldPassword)
    console.log("new pasword ==>  ",newPassword)
    if(oldPassword.current.value==="" ||oldPassword.current.value===null){
       props.pushMessageToSnackbar({text:"empty value for oldPassword"})
       return
    }
    if(newPassword.current.value==="" ||newPassword.current.value===null){
      props.pushMessageToSnackbar({text:"empty value for new Password"})
      return;
    }
  let response=await changePassword({old_password:oldPassword.current.value,new_password:newPassword.current.value});
  setPasswordEdit(false)
}

  if (transactions.length > 0) {
    return (
      <div className={classes.tableWrapper}>
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>       
      <Badge  badgeContent={ <div {...getRootProps()}><input {...getInputProps()} />
     
     <EditIcon/></div>
    } color="primary">
      <Avatar className={classes.large} variant="rounded"  alt= {props.user.userName} src={userImageUrl}></Avatar>
      </Badge>
      </Grid>
      <div className={classes.demo}>
            <List dense={dense}>
          
                <ListItem>
                  <ListItemText
                    primary="Name"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    {isNameEdit===false?<>{props.user.username} <IconButton edge="end" aria-label="delete" onClick={()=>setNameEdit(true)}>
              <EditIcon />
               </IconButton> </>: 
                    <TextField id="standard-password-input" type="text" variant="outlined" size="small" value={name} onChange={handleNameChange}
       InputProps={{
          endAdornment: (
            <InputAdornment position="end">
             <IconButton edge="end" aria-label="update" onClick={updateName}>
              <CheckCircleOutlineIcon style={{color:"green"}}/>
               </IconButton>
               <IconButton edge="end" aria-label="close"  style={{color:"red"}} onClick={()=>setNameEdit(false)}>
                      <HighlightOffIcon />
                    </IconButton>
            </InputAdornment>)}}  /> }
                  </ListItemSecondaryAction>
                </ListItem>

                 <ListItem>
                  <ListItemText  primary="Total Space" />
                  <ListItemSecondaryAction>
                      <ListItemText >{props.license.totalSpace} MB</ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
                 <ListItem>
                  <ListItemText  primary="Free Space" />
                  <ListItemSecondaryAction>
                      <ListItemText>{props.license.totalSpace-props.license.usedSpace} MB</ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText  primary="Plan" />
                  <ListItemSecondaryAction>
                      <ListItemText><Tooltip title="paid verision is not available yet"><TextField select defaultValue={props.license.licenseType}  disabled variant="outlined" size="small">
                      {plan.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                      </TextField></Tooltip></ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
                 <ListItem>
                  <ListItemText  primary="Email Address" />
                  <ListItemSecondaryAction>
                      <ListItemText>{props.user.email} </ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Password"
                  />
                  <ListItemSecondaryAction>
                   <ListItemText> ****** <IconButton edge="end"  onClick={()=>setPasswordEdit(true)}>
              <EditIcon />
               </IconButton></ListItemText>
                  </ListItemSecondaryAction>
                </ListItem>
           
            </List>
          </div>
            <Dialog
        open={isPasswordEdit}
        onClose={()=>setPasswordEdit(false)}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle   id="scroll-dialog-title">Password reset</DialogTitle>
        <DialogContent   >
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
          <TextField
                      id="standard-password-input"
          label="old Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          inputRef={oldPassword}
          style={{margin:5}}
         
        />
          <TextField
                      id="standard-password-input"
          label="new Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          inputRef={newPassword}
          style={{margin:5}}
         
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
        <Button    onClick={()=>setPasswordEdit(false)}>
            cancel
          </Button>
          <Button  color="secondary" variant="contained"  onClick={updatePassword}>
            update
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
  return (
    <div className={classes.contentWrapper}>
      <HighlightedInformation>
        No transactions received yet.
      </HighlightedInformation>
    </div>
  );
}

SubscriptionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(state_to_props,{setUserDetailsToStore:setUserDetailsToStore})(SubscriptionTable);
