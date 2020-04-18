import React,{useRef,useEffect,useState} from 'react'
import {Row,Col,Layout,Divider,Upload,Input} from 'antd'
import { Button } from 'antd';
import {state_to_props} from '../../util/common_utils'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'
import {EditFilled, CloseCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import './accounts.css'
import {setUserDetailsToStore,userFetchType} from '../../store/action'
import {addUserImage,getUserImage} from '../../services/connectToServer'


const QuickEditButtons=(props)=>
{
    return(
<><CheckCircleFilled  style={{color:"green"}} onClick={props.successFunct}/><Divider type="vertical" />  <CloseCircleFilled style={{color:"red"}} onClick={props.FailureFuct}/> </>
    )}

const Accounts=(props)=>
{   const {  Content, Footer } = Layout;
    const imageRef=useRef()
    const [nameEdit,setNameEdit]=useState(false)
    const [planEdit,setPlanEdit]=useState(false)
    const [passEdit,setPassEdit]=useState(false)
    const [name,setName]=useState(props.user.username)
    let src="";

    useEffect(()=>{
        const asyncprocess=async ()=>{
        console.log("imageRef ",imageRef)
        src= await getUserImage()
        
        }
        asyncprocess()
    },[])



const onChange=(info)=>
{
    if(info.file)
    {
        const data = new FormData() 
        data.append('file', info.file);
       
        console.log("onchange",info.file);
        addUserImage(data);
    }
}

const updateName=(e)=>
{   console.log("updatename ",name);
    props.setUserDetailsToStore({username:name},userFetchType.UPDATE)
    setNameEdit(false);
}
const updatePass=(e)=>
{
    setPassEdit(false)
}
const updatePlan=(e)=>
{
    setPlanEdit(false)
}


    
    return(<Layout className="parallax">
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{ padding: '10 10 10 10px', marginTop: 64, minHeight:"84vh",maxHeight:"84vh"}}>
        <div className="center" style={{textAlign:"center",maxWidth:"1000px",minWidth:"1000px"}}>
    <Row style={{color:"white"}}>
        <Col span={24} >
        <div className="profile-header-container">   
    		<div className="profile-header-img">
                <img className="img-circle" src={src} ref={imageRef}/>
                <div className="rank-label-container">
                <Upload onChange={onChange}  beforeUpload={()=>false}  multiple= {false} action='#' showUploadList={false} accept="image/*">
                    <Button className="label label-default rank-label"  style={{backgroundColor:"rgb(24,144,255)"}}><EditFilled />Edit</Button>
                    </Upload>
                </div>
            </div>
        </div>  
        </Col>

            
        <Col span={24} style={{color:"white",textAlign:"center"}}>
            <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px",alignContent:"center"}}  >
                 <Col span={11}><strong>Name</strong></Col><Col span={11}>{nameEdit? <Input defaultValue={props.user.username}  value={name} onChange={(e)=>setName(e.target.value)} addonAfter={<QuickEditButtons successFunct={updateName} FailureFuct={updateName}/>}/>:props.user.username }</Col>{!nameEdit && <Col span={2} className="account-change-cursor" onClick={()=>setNameEdit(true)}><EditFilled/></Col>}
            </Row>
            <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px"}}>
                 <Col span={11}><strong>Total Space</strong></Col><Col span={11}>{props.user.username}</Col><Col span={2}></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list"  style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>Free Space</strong></Col><Col span={11}>{props.user.username}</Col><Col span={2}></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}} />
             <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>plan</strong></Col><Col span={11}>{planEdit? <Input style={{minHeight:"34px"}} value={props.user.username} addonAfter={<QuickEditButtons successFunct={updatePlan} FailureFuct={updatePlan}/>}/>:props.user.username }</Col>{!planEdit && <Col span={2} className="account-change-cursor" onClick={()=>setPlanEdit(true)}><EditFilled/></Col>}
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>password</strong></Col><Col span={11}>{passEdit? <Input.Password addonAfter={<QuickEditButtons successFunct={updatePass} FailureFuct={updatePass}/>}/>:'***'}</Col> { !passEdit && <Col span={2} className="account-change-cursor" onClick={()=>setPassEdit(true)}><EditFilled/></Col>}
            </Row>
        </Col>
        </Row>
        </div>
    </Content>
    <Footer  style={{minHeight:"8vh",maxHeight:"8vh"}}>
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default connect(state_to_props,{setUserDetailsToStore:setUserDetailsToStore})(Accounts);