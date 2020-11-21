import React, { Fragment, useState, useCallback,useRef } from "react";
import PropTypes from "prop-types";
import { Button, Box } from "@material-ui/core";
import ActionPaper from "../../../shared/components/ActionPaper";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import AddPostOptions from "./AddPostOptions";
import {uploadfile} from '../../../services/connectToServer'

function AddPost(props) {
  const {
    pushMessageToSnackbar,
    Dropzone,
    EmojiTextArea,
    DateTimePicker,
    ImageCropper,
    onClose,
  } = props;

  const [files, setFiles] = useState([]);

  const [uploadAt, setUploadAt] = useState(new Date());
  const [loading, setLoading] = useState(false);
  
  const encrpytKey=useRef(null)
  const desc=useRef(null)
 const reEncrpytKey=useRef(null)



  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("fielss==>",acceptedFiles);
      if (acceptedFiles.length  > 1) {
        pushMessageToSnackbar({
          isErrorMessage: true,
          text: "You cannot upload more than one file at once",
        });
      } else if (acceptedFiles.length === 0) {
        pushMessageToSnackbar({
          isErrorMessage: true,
          text: "File size is more than 5MB",
        });
      } else if (acceptedFiles.length === 1) {
        const curfile = acceptedFiles[0];
        curfile.preview = URL.createObjectURL(curfile);
        curfile.key = new Date().getTime();
        setFiles([curfile]);
      }
    },
    [pushMessageToSnackbar,setFiles]
  );


  const deleteItem = useCallback(() => {

    setFiles([]);
  }, [setFiles]);

  const handleUpload = useCallback( async() => {
    setLoading(true);
    const data = new FormData() 

    console.log("priivatekey be3fore upload==>",encrpytKey.current.value)
    console.log("desc be3fore upload==>",desc.current.value)
    if(!encrpytKey.current.value ||encrpytKey.current.value===""){
      pushMessageToSnackbar({
        text: "invalid encryption key",
      });
      setLoading(false);
    }else if(encrpytKey.current.value===reEncrpytKey.current.value)
    {
    data.append('file', files[0]);
    data.append('private_key',encrpytKey.current.value);
    data.append('description',desc.current.value);
    const resp= await uploadfile(data);
    console.log("resp ==>",resp)
    setFiles([]);
      pushMessageToSnackbar({
        text: "Your File has been uploaded",
      });
      onClose();
    }
    else {
      pushMessageToSnackbar({
        text: "encryption key mismatch",
      });
      setLoading(false);
    }
   
  }, [setLoading, onClose, pushMessageToSnackbar,setFiles,files]);

  return (
    <Fragment>
      <ActionPaper
        helpPadding
        maxWidth="md"
        content={
          <AddPostOptions
            EmojiTextArea={EmojiTextArea}
            Dropzone={Dropzone}
            files={files}
            onDrop={onDrop}
            deleteItem={deleteItem}
            DateTimePicker={DateTimePicker}
            uploadAt={uploadAt}
            onChangeUploadAt={setUploadAt}
            encrpytKey={encrpytKey}
            desc={desc}
            reEncrpytKey={reEncrpytKey}

            ImageCropper={ImageCropper}
          />
        }
        actions={
          <Fragment>
            <Box mr={1}>
              <Button onClick={onClose} disabled={loading}>
                Back
              </Button>
            </Box>
            <Button
              onClick={handleUpload}
              variant="contained"
              color="secondary"
              disabled={files.length===0 || loading}
            >
              Upload {loading && <ButtonCircularProgress />}
            </Button>
          </Fragment>
        }
      />
    </Fragment>
  );
}

AddPost.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  onClose: PropTypes.func,
  Dropzone: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
};

export default AddPost;
