import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, Button ,Container,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {UserVerification} from './userVerification';
import {withRouter} from 'react-router-dom'

import {verifyUser} from '../../../services/connectToServer'
import constants from '../../../util/constants'
  
const useStyles = makeStyles((theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  faqWrapper:{
    maxWidth:1000
  },
  wrapper: {
    minHeight: "40vh",
    backgroundColor:"#c9e265ad"
  },
  noDecoration: {
    textDecoration: "none !important",
  },
 container: {
    marginTop:"15vh",
    padding:20
  },
}));



function Verify(props) {
  const classes=useStyles();
console.log("verification props ==>",props);
const [isVerified,setVerified]=useState(true);
const [status,setStatus]=useState("Verifying User...");


const verifyuser=async (data)=>
{   
    console.log("data==> ",data);
    if(props.token && props.type)
    {   let token=props.token;
        let type=props.type;
        console.log("token ==> ",token);
       const verifyUserResp=await verifyUser(token,type,data);
       if(!constants.errorResponse.includes (verifyUserResp.status))
       {
        
        setVerified(true);
        props.history.push('/');
       
       }
       else
       {   console.log("eriyuser ",verifyUserResp.data)
           if(verifyUserResp.data.message)
           {
            setStatus(verifyUserResp.data.message)
           }
           else
           {
               setStatus("Exception while verifying user")
           }
           
       }
    }
    else
    {
        
        props.history.push('/')
    }
}

    useEffect(()=>{
            if(props.type==='U_V'){
                verifyuser(null);
            }
    },[]);

  return (
    <Container maxWidth="sm" className={classes.container}>
    <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
    <Grid item
    container
  direction="column"
  justify="center"
  alignItems="center"
      className={classNames(classes.wrapper, "lg-p-top")}
      
    >
    <Grid item
    container span={4} justify="center"
  alignItems="center">
    <Typography variant="h3" component="h4" style={{padding:10}}>
 Verification
</Typography>
</Grid>
<Grid item
    container span={4} justify="center"
  alignItems="center">
    <Typography variant="h5" component="h5"  style={{padding:10}}>
 Kindly click on the button to verify the email address
</Typography>
</Grid>
<Grid item
    container span={4} justify="center"
  alignItems="center">
     <Button variant="contained" color="primary" size="large" onClick={verifyuser} style={{padding:10,margin:20}}>
        Verify User
</Button>
</Grid>
    </Grid>
    </Grid>
    </Container>
  );
}

Verify.propTypes = {
  width: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withRouter(Verify));
