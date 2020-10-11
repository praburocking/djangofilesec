 import Modal from 'antd/es/modal'
 import Input from 'antd/es/input'
 import message from 'antd/es/message'
 import Upload from 'antd/es/upload'
import { InboxOutlined} from '@ant-design/icons'
import './fileUploader.css'
import {uploadfile} from '../../services/connectToServer'
import React,{useState} from 'react'
import {connect} from 'react-redux'
import { Divider, Drawer,Button } from 'antd';

import {withGetScreen} from 'react-getscreen'
const { Dragger } = Upload;

const updateFilesToStore=(files)=>
{
  files.key=files.id;
 return ({type:"FILES_ADD",data:files})
}

const FileUploader=(props)=>
{
  const { TextArea } = Input;
    const prop = {
        name: 'file',
        multiple: false,
        action:'#',
        showUploadList:false,
    
        beforeUpload:(file)=>{
          console.log('FILE',file);
          if(file )
        {
          const isLt5M = file.size / 1024 / 1024 < 5;
          if(isLt5M){
            setFile(file);
            setModal(true);
          }
          else{
            message.error("File must be smaller than 5 MB");
          }
        }
        },
        onSubmit(e){
          console.log("iam in submit")
          e.preventDefault();
        }
      };


    const [file,setFile]=useState(null);
    const [isShowModal,setModal]=useState(false);
    const [eKey,setEKey]=useState(null);
    const [isFileUpLoading,setFileUpLoading]=useState(false)
    const [desc,setDesc]=useState(null);

   const handleOk = async(e) => {
        console.log(e);
        setFileUpLoading(true)
        const data = new FormData() 
        data.append('file', file);
        data.append('private_key',eKey);
        data.append('description',desc);
        let uploadResp=await uploadfile(data)
        if([200,201,204].includes(uploadResp.status))
        {
          props.updateFilesToStore(uploadResp.data)
        }
        else
        {
          if(uploadResp.data.message)
          {
            message.error(uploadResp.data.message)
          }
          else
          {
            message.error("exception while uploading,please try again later")
          } 
        }
        setFileUpLoading(false)
        setModal(false);
        setFile(null);
        setEKey(null);
      };
    
    const  handleCancel = e => {
        console.log(e);
        if(!isFileUpLoading){
          setModal(false);
          setFile(null);
          setEKey(null);
        }
      };

    const changeEKey=(event)=>
    {
        console.log("value",event.target.value);
        setEKey(event.target.value);

    }
    return(
            <div  style={{backgroundColor:"rgb(57, 224, 89)"}}>
            <Dragger {...prop} >
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
               </p>
               <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Supports single upload only. Max allowed file size is 5MB
                </p>
            </Dragger>
	      
          <Drawer
          title="please Enter your entryption key"
          visible={isShowModal}
          width={props.isMobile()?"60vw" :"30vw"}
          onClose={!isFileUpLoading  &&  handleCancel}
          confirmLoading={isFileUpLoading}
          
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={!isFileUpLoading  &&  handleCancel} style={{ marginRight: 8 }} visible={!isFileUpLoading}>
                Cancel
              </Button>
              <Button onClick={handleOk} type="primary" >
                Submit
              </Button>
            </div>
          }
          >
          <Input.Password type="text" placeholder="Encryption Key" value={eKey} onChange={changeEKey}/>
          <p>we will use this key along with our own random private key to encrypt your data</p>
          <Divider>optional</Divider>
          <TextArea type="text" placeholder="Description (optional)" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        </Drawer>
	  </div>
    )
}

export default connect(null,{updateFilesToStore})(withGetScreen(FileUploader));


