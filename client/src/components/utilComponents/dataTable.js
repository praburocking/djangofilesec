
 import {Table,Divider,message,Modal,Input,Tag} from 'antd'
 import {downloadFiles,deleteFile} from '../../services/connectToServer'
import {connect} from 'react-redux'
import React,{useState} from 'react';
import {state_to_props} from '../../util/common_utils'


  const deleteFromStore=(key)=>
  {
    return {type:"FILES_DEL",data:key}
  }


  const DataTable=(props)=>
  {
    const [isShowModal,setModal]=useState(false);
    const [currentDownload,setCurrentDownload]=useState(null); 
    const [eKey,setEKey]=useState(null);
    const [isFileDownLoading,setFileDownLoading]=useState(false)
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a style={{color:"black"}}>{text}</a>,
      },
     
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a style={{color:"black"}} onClick={()=>handleDownload(record)}>Download </a>
            <Divider type="vertical" style={{color:"black"}} />
            <a style={{color:"black"}} onClick={()=>handeDelete(record.key)}>Delete</a>
          </span>
        ),
      },
    ];


    const download=async (record)=>
    {
      var key=record.key;
      setFileDownLoading(true)
      var downloadResp=await downloadFiles(key,eKey);
      setEKey(null);
      if(downloadResp.status===200)
        { 
            var data=downloadResp.data;
            const downloadUrl = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', record.name); //any other extension
            document.body.appendChild(link);
            link.click();
            link.remove(); 
        }
      else
        {
          if(downloadResp.data && downloadResp.data.message)
            {
              message.error(downloadResp.data.message)
            }
          else
          {
            message.error("Exception while downloading the file")
          }
        }
        setFileDownLoading(false)
        setModal(false)

    }

    const handleDownload=(record)=>
    {
      setModal(true);
      setCurrentDownload(record);
    }


    const handeDelete=async(key)=>
      {
          let deleteResp=await deleteFile(key)
          if([200,201,204].includes( deleteResp.status) )
            {
              props.deleteFromStore(key)
            }
          else
            {
              if(deleteResp.data && deleteResp.data.message)
                {
                  message.error(deleteResp.data.message)
                }
              else
                {
                  message.error("Exception while deleting the file, Please try again later")
                }
              }
        }

        const  handleCancel = e => {
          console.log(e);
          setModal(false);
          setEKey(null);
        };
  
      const changeEKey=(event)=>
      {
          console.log("value",event.target.value);
          setEKey(event.target.value);
  
      }
      return(
    <div  >
      <Table columns={columns} dataSource={props.data} size="middle" loading={props.loading} />
      <Modal
          title="please Enter your decryption key"
          visible={isShowModal}
          onOk={()=>download(currentDownload)}
          onCancel={!isFileDownLoading && handleCancel}
          confirmLoading={isFileDownLoading} >
          <Input.Password  placeholder="Decryption Key" value={eKey} onChange={changeEKey}/>
          <p>we will use this key along with our own random private key to decrypt your data</p>
        </Modal>
        </div>
      )
  }


export default connect(null,{deleteFromStore})(DataTable);
