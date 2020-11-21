import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, Button ,Container,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import {UserVerification} from './userVerification';

import {verifyUser} from '../../../services/connectToServer'
import constants from '../../../util/constants'
import Verify from  '../../../shared/components/verification/verification'
  
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



function Verification(props) {

return <Verify {...props} />

}
Verification.propTypes = {
  width: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(Verification);
