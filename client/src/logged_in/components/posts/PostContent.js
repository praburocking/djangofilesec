import React, { useState, useCallback,useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TablePagination,
  Divider,
  Toolbar,
  Typography,
  Button,
  Paper,
  Box,
  withStyles,
} from "@material-ui/core";

import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import {state_to_props} from '../../../util/common_utils'
import FileCard from './filecard'
import {listFiles} from '../../../store/action'
import {connect} from 'react-redux'

const styles = {
  dBlock: { display: "block" },
  dNone: { display: "none" },
  toolbar: {
    justifyContent: "space-between",
  },
};

const rowsPerPage = 10;

function PostContent(props) {
  const {
    pushMessageToSnackbar,
    openAddPostModal,
    classes,
  } = props;


  const [page, setPage] = useState(0);
  const [isDeletePostDialogOpen, setIsDeletePostDialogOpen] = useState(false);
  const [isDeletePostDialogLoading, setIsDeletePostDialogLoading] = useState(
    false
  );

  const closeDeletePostDialog = useCallback(() => {
    setIsDeletePostDialogOpen(false);
    setIsDeletePostDialogLoading(false);
  }, [setIsDeletePostDialogOpen, setIsDeletePostDialogLoading]);

  useEffect(()=>
  {
     props.listFiles()
  },[])

  const onDelete = useCallback(() => {
    setIsDeletePostDialogOpen(true);
  }, [setIsDeletePostDialogOpen]);

  const handleChangePage = useCallback(
    (__, page) => {
      setPage(page);
    },
    [setPage]
  );

  const printImageGrid = useCallback(() => {
    if ( props.files.length > 0) {
      return (
        <Box p={1}>
          <Grid container spacing={1}>
            { props.files
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((file) => (
                <Grid item xs={12} sm={6} md={3} key={file.id}>
                    <FileCard file={file} setIsDeletePostDialogOpen={setIsDeletePostDialogOpen} pushMessageToSnackbar={pushMessageToSnackbar}/>
                </Grid>
              ))}
          </Grid>
        </Box>
      );
    }
    return (
      <Box m={2}>
        <HighlightedInformation>
          No posts added yet. Click on &quot;NEW&quot; to create your first one.
        </HighlightedInformation>
      </Box>
    );
  }, [ props.files, onDelete, page]);

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Your Encrypted Files</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={openAddPostModal}
          disableElevation
        >
          Add Files
        </Button>
      </Toolbar>
      <Divider />
      {printImageGrid()}
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        count={ props.files_count}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onChangePage={handleChangePage}
        classes={{
          select: classes.dNone,
          selectIcon: classes.dNone,
          actions:  props.files.length > 0 ? classes.dBlock : classes.dNone,
          caption:  props.files.length > 0 ? classes.dBlock : classes.dNone,
        }}
        labelRowsPerPage=""
      />
      <ConfirmationDialog
        open={isDeletePostDialogOpen}
        title="Confirmation"
        content="Do you really want to delete the post?"
        onClose={closeDeletePostDialog}
        loading={isDeletePostDialogLoading}
      />
    </Paper>
  );
}

PostContent.propTypes = {
  openAddPostModal: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withStyles(styles)(connect(state_to_props,{listFiles})(PostContent));
