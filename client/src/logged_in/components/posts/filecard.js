import React,{useState,useRef,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card,TextField } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import {  red } from "@material-ui/core/colors";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";
import HistoryIcon from "@material-ui/icons/History";
import Tooltip from "@material-ui/core/Tooltip";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DownloadHistory from "./timeLine";
import {downloadFiles,deleteFile,getDownloadHistory,updateFile} from '../../../services/connectToServer'
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import { withStyles} from '@material-ui/core/styles';

import {state_to_props} from '../../../util/common_utils'
import {listFiles} from '../../../store/action'
import {connect} from 'react-redux'

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270,
    minHeight:250,
    backgroundColor:"#ff914d38"

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  deleteButton: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    }
  },
  pos: {
    fontSize: 12
  }
}));


 function FileCard(props) {
  const classes = useStyles();
  // const [openDownloadHist, setOpenDownloadHist] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
   const [openEdit, setOpenEdit] = useState(false);
   const [isLoading,setIsLoading] =useState(false)

  const encryptKeyRef=useRef(null);
  const despRef=useRef(null);
  const [downloadHistory,setDownloadHistory]=useState(null);
  const handleClose = () => {
    setDownloadHistory(null);
  };

  // useEffect(() => {
  //   if (openDownloadHist) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [openDownloadHist]);

  const download=async (record)=>
    {
      setIsLoading(true)
      if(encryptKeyRef.current.value===""||encryptKeyRef.current.value===null){
         props.pushMessageToSnackbar({text:"empty encryption key"})
         setIsLoading(false)
         return
      }
      var downloadResp=await downloadFiles(props.file.id,encryptKeyRef.current.value);
      if(downloadResp.status===200)
        { 
            var data=downloadResp.data;
            const downloadUrl = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', props.file.name); //any other extension
            document.body.appendChild(link);
            link.click();
            link.remove(); 
        }
      else
        {
          console.log("push message ",downloadResp)
          if(downloadResp.data && downloadResp.data.message)
            {
              console.log("push message")
              props.pushMessageToSnackbar({text:downloadResp.data.message})
            }
          else
          {
            props.pushMessageToSnackbar({text:"Exception while downloading the file"})
          }
        }
        setIsLoading(false)
        setOpenDownload(false)

    }

    const handleDownloadHistory=async ()=>{
      var response=await getDownloadHistory(props.file.id);
      setDownloadHistory(response.data);
      console.log(response);
    }

  const handeEdit=async()=>{
    setIsLoading(true)
    let updateResp= await updateFile(props.file.id,{"description":despRef.current.value});
    if(![200,201,204].includes( updateResp.status) )
    {
      if(updateResp.data && updateResp.data.detail)
        {
          props.pushMessageToSnackbar({text:updateResp.data.detail})
          props.listFiles()
        }
      else
        {
          props.pushMessageToSnackbar({text:"Exception while deleting the file, Please try again later"})
        }
      }
      setIsLoading(false)
    setOpenEdit(false)
  }
    const handeDelete=async()=>
    {
      setIsLoading(true)
        let deleteResp=await deleteFile(props.file.id)
        if([200,201,204].includes( deleteResp.status) )
          {
            //props.deleteFromStore(props.file.id)
            props.listFiles()
          }
        else
          {
            if(deleteResp.data && deleteResp.data.message)
              {
                props.pushMessageToSnackbar({text:deleteResp.data.message})
              }
            else
              {
                props.pushMessageToSnackbar({text:"Exception while deleting the file, Please try again later"})
              }
            }
            setIsLoading(false)
          setOpenDelete(false)
      }

  return (
   <div>
    <Card className={classes.root}>
      <CardContent style={{minHeight:200}}>
      <HtmlTooltip title={props.file.name} arrow>
        <Typography variant="h5" component="h2" noWrap={true}>
         {props.file.name}
        </Typography>
        </HtmlTooltip>
        {/* <Grid container justify="space-between" color="textSecondary">
          <Typography className={classes.pos}>Total download : 30</Typography>
          <Typography className={classes.pos} style={{ color: "red" }}>
            failed :10
          </Typography>
        </Grid> */}
        <Grid container justify="space-between" color="textSecondary" style={{margin:5,paddingTop:7}}>
        <Typography variant="body2" component="p">
          Description:
        </Typography>
          <Typography className={classes.pos}>Size :{ Math.round((props.file.size + Number.EPSILON) * 100) / 100} MB</Typography>
        </Grid>
        <Grid container justify="space-between" style={{minHeight:110}}  >
        <Typography variant="body2" component="p" >
        {props.file.description}
        </Typography>
        </Grid>
      </CardContent>
      <CardActions >
        <Grid
          container
          item
          justify="space-around"
          spacing="1"
          direction={"row"}
        >
          <Grid item container justify="center" xs={12} fullWidth>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
              variant="text"
            >
              <Tooltip title="view Download History">
                <Button aria-label="edit" color="secondary" fullWidth onClick={handleDownloadHistory}>
                  <HistoryIcon />
                </Button>
              </Tooltip>
              <Tooltip title="edit description">
                <Button aria-label="edit" color="secondary" fullWidth  onClick={()=>setOpenEdit(true)}>
                  <EditIcon />
                </Button>
              </Tooltip>
              <Tooltip title="download">
                <Button aria-label="download" color="secondary" fullWidth  onClick={()=>setOpenDownload(true)}>
                  <GetAppIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Delete">
                <Button aria-label="delete" color="secondary" fullWidth onClick={()=>setOpenDelete(true)}>
                  <DeleteRoundedIcon style={{ color: "red" }}  />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    <Dialog
        open={downloadHistory!==null && downloadHistory!==undefined}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
       
      >
        <DialogTitle   id="scroll-dialog-title">Download History -  {props.file.name}</DialogTitle>
        <DialogContent >
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          
          >
            <DownloadHistory downloadHistory={downloadHistory}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
          <Button onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDownload}
        onClose={()=>setOpenDownload(false)}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle   id="scroll-dialog-title">Download -  {props.file.name}</DialogTitle>
        <DialogContent   >
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
          <TextField
                      id="standard-password-input"
          label="Encryption Key"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          inputRef={encryptKeyRef}
         
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
          <Button onClick={()=>setOpenDownload(false)}  >
            cancel
          </Button>
          <Button onClick={download} color="secondary" variant="contained" disabled={isLoading}>
          {!isLoading &&  "download"}
          {isLoading && <> <ButtonCircularProgress />  download</>}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDelete}
        onClose={()=>setOpenDelete(false)}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle   id="scroll-dialog-title"> Delete -  {props.file.name}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
          This operation is irreversible. Are you sure want to delete this file ?
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
        <Button onClick={()=>setOpenDelete(false)} disabled={isLoading} >
          cancel
          </Button>
          <Button onClick={handeDelete} color="secondary" variant="contained" disabled={isLoading}>
          {!isLoading &&  "Delete"}
          {isLoading && <> <ButtonCircularProgress />  Delete</>}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openEdit}
        onClose={()=>setOpenEdit(false)}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle   id="scroll-dialog-title"> Edit -  {props.file.name}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
         <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue={props.file.description}
          inputRef={despRef}
          variant="outlined"
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
        <Button onClick={()=>setOpenEdit(false)} disabled={isLoading} >
            Cancel
          </Button>
          <Button onClick={handeEdit} color="secondary" variant="contained" disabled={isLoading}>
          {!isLoading &&  "Update"}
          {isLoading && <> <ButtonCircularProgress />  Update</>}
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default connect(state_to_props,{listFiles})(FileCard);
