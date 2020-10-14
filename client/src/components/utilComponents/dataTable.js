
 import {message,Modal,Input,Tag,List,Drawer, Timeline} from 'antd'
 import {downloadFiles,deleteFile,getDownloadHistory} from '../../services/connectToServer'
import {connect} from 'react-redux'
import React,{useState} from 'react';
import {state_to_props} from '../../util/common_utils'
import { PageHeader, Button, Descriptions } from 'antd';
import {withGetScreen} from 'react-getscreen'



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
    const [deleteRecord,setDeleteRecord]=useState(null)
    const [downloadHistory,setDownloadHistory]=useState(null)
    const [showEditDrawer,setEditDrawer]=useState(null)
    const {TextArea} = Input;


   const handleDownloadHistory=async (id)=>{
      var response=await getDownloadHistory(id);
      console.log(response);
      setDownloadHistory(response.data);
    }

    const listView=(
    <div style={{width:"700",maxHeight:"400"}}>
    <List
    itemLayout="horizontal"
    dataSource={props.data}
    renderItem={item => (
      <List.Item  >
      <PageHeader style={{overflow: "hidden",textOverflow:"ellipsis"}}
      ghost={false}
      title={item.name}
      extra={[
        <Button key="4" onClick={()=>handleDownload(item)} >Download</Button>,
        <Button key="3" onClick={()=>setEditDrawer(item)}>Edit</Button>,
        <Button key="2" onClick={()=> handleDownloadHistory(item.id)}>Download History</Button>,
        <Button key="1" onClick={()=>setDeleteRecord(item.id)} type="danger">
          delete
        </Button>,
      ]}
    >
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="Creation Time">{item.created_time}</Descriptions.Item>
        <Descriptions.Item label="Last Edited Time">{item.modified_time}</Descriptions.Item>
        <Descriptions.Item label="description">{item.description}</Descriptions.Item>
        <Descriptions.Item label="size">{item.size+ " MB"}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
      </List.Item>
    )}
  />
  </div>
  )



const downloadHistoryDrawer=()=>(
        <Drawer
          title="Download History"
          width={props.isMobile()?"60vw" :"30vw"}
          closable={false}
          onClose={()=>setDownloadHistory(null)}
          visible={downloadHistory}
        >
        {downloadHistory && <Timeline>
      {downloadHistory.map(function(item) {
            return <Timeline.Item key={item.id} color={item.download_success?"green":"red"}>download {item.download_success?"succcess":"failed"} on {new Date(item.time+" GMT").toLocaleString()} from IP {item.ip} </Timeline.Item>;
    })}
    {!downloadHistory && "No Data"}
       
   
    
   
    </Timeline>}
          </Drawer>
       
)


    const download=async (record)=>
    {
      var key=record.id;
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


    const handeDelete=async()=>
      {
          let deleteResp=await deleteFile(deleteRecord)
          if([200,201,204].includes( deleteResp.status) )
            {
              props.deleteFromStore(deleteRecord)
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
              setDeleteRecord(null)
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
      {/* <Table columns={columns} dataSource={props.data} size="middle" loading={props.loading} /> */}
     {listView}
   {downloadHistoryDrawer()}
 
      <Drawer
          title="please Enter your decryption key"
          visible={isShowModal}
     
          width={props.isMobile()?"60vw" :"30vw"}
          onClose={!isFileDownLoading && handleCancel}
        
          
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
            {!isFileDownLoading && <Button onClick={!isFileDownLoading &&  handleCancel} style={{ marginRight: 8 }} >
                Cancel
              </Button>}
              <Button onClick={()=>download(currentDownload)} type="primary" loading={isFileDownLoading} >
                Submit
              </Button>
            </div>
          }
          >
        
          <Input.Password  placeholder="Decryption Key" value={eKey} onChange={changeEKey}/>
          <p>we will use this key along with our own random private key to decrypt your data</p>
        </Drawer>

        <Drawer
          title="Edit"
          visible={showEditDrawer}
     
          width={props.isMobile()?"60vw" :"30vw"}
          onClose={()=>setEditDrawer(null)}
        
          
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={()=>setEditDrawer(null)} style={{ marginRight: 8 }} visible={!isFileDownLoading}>
                Cancel
              </Button>
              <Button onClick={()=>setEditDrawer(null)} type="primary" loading={isFileDownLoading} >
                Submit
              </Button>
            </div>
          }
          >
        
          <TextArea type="text" placeholder="Description (optional)" />
          
        </Drawer>


        <Modal
          title="Are you sure want to delete the file?"
          visible={deleteRecord!=null}
          onOk={handeDelete}
          onCancel={ ()=>setDeleteRecord(null)}
          okType="danger"
          >
          <p>caution: you cannot recover the file once you deleted it.</p>
        </Modal>
        </div>
      )
  }


export default connect(null,{deleteFromStore})(withGetScreen(DataTable));
