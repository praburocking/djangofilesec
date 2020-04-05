 import Modal from 'antd/es/modal'
 import Input from 'antd/es/input'
 import message from 'antd/es/message'
 import Upload from 'antd/es/upload'
 import Icon from 'antd/es/icon'
import './fileUploader.css'
import {uploadfile} from '../../services/connectToServer'
import React,{useState} from 'react'
import {connect} from 'react-redux'

const { Dragger } = Upload;

const updateFilesToStore=(files)=>
{
  files.key=files.id;
 return ({type:"FILES_ADD",data:files})
}

const FileUploader=(props)=>
{
    
    const prop = {
        name: 'file',
        multiple: false,
        action:'#',
        showUploadList:false,
        onChange(info) {
          console.log('FILE',info.file);
          if(info.file)
        {
            setFile(info.file);
            setModal(true);
        }
        },
        beforeUpload:()=>false,
        onSubmit(e){
          console.log("iam in submit")
          e.preventDefault();
        }
      };


    const [file,setFile]=useState(null);
    const [isShowModal,setModal]=useState(false);
    const [eKey,setEKey]=useState(null);


   const handleOk = async(e) => {
        console.log(e);
        const data = new FormData() 
        data.append('file', file);
        data.append('private_key',eKey);
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
        setModal(false);
        setFile(null);
        setEKey(null);
      };
    
    const  handleCancel = e => {
        console.log(e);
        setModal(false);
        setFile(null);
        setEKey(null);
      };

    const changeEKey=(event)=>
    {
        console.log("value",event.target.value);
        setEKey(event.target.value);

    }
    return(
            <div className="col-md-6" style={{backgroundColor:"rgb(57, 224, 89)"}}>
            <Dragger {...prop} >
                <p className="ant-upload-drag-icon">
               <Icon type="inbox" />
               </p>
               <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
                </p>
            </Dragger>
	      
          <Modal
          title="please Enter your entryption key"
          visible={isShowModal}
          onOk={handleOk}
          onCancel={handleCancel}>
          <Input type="text" placeholder="Encryption Key" value={eKey} onChange={changeEKey}/>
          <p>we will use this key along with our own random private key to encrypt your data</p>
        </Modal>
	      
	  </div>
    )
}

export default connect(null,{updateFilesToStore})(FileUploader);


