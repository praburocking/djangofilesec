import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Faq from '../faq';

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
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
}));



function Blog(props) {
  const classes=useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
      
    >
      <Faq className={classes.faqWrapper}/>
    </Box>
  );
}

Blog.propTypes = {
  selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(Blog);
