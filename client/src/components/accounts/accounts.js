import React,{useRef,useEffect,useState} from 'react'
import {Row,Col,Layout,Divider,Upload,Input,Form} from 'antd'
import { Button,Avatar,Modal ,Drawer} from 'antd';
import {state_to_props} from '../../util/common_utils'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'
import {EditFilled, CloseCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import './accounts.css'
import {setUserDetailsToStore,userFetchType} from '../../store/action'
import {addUserImage,getUserImage,changePassword} from '../../services/connectToServer'
import Select from 'antd/es/select'
import CheckoutForm from '../payment/CheckoutForm';


const {Option}=Select;


const QuickEditButtons=(props)=>
{
    return(
<><CheckCircleFilled  style={{color:"green"}} onClick={props.successFunct}/><Divider type="vertical" />  <CloseCircleFilled style={{color:"red"}} onClick={props.FailureFuct}/> </>
    )}

const Accounts=(props)=>
{   const {  Content, Footer } = Layout;
    const [nameEdit,setNameEdit]=useState(false)
    const [planEdit,setPlanEdit]=useState(false)
    const [passEdit,setPassEdit]=useState(false)
    const [name,setName]=useState(props.user.username)
    const [userImageUrl,setUserImageUrl]=useState("");
    const [isPassModal,setPassModal]=useState(false);
    const [isLicModal,setLicModal]=useState(false);
    const [form] = Form.useForm();
    useEffect(()=>{
        const asyncprocess=async ()=>{
        let imgResp= await getUserImage()
        if(imgResp.status===200)
        {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( imgResp.data );
        console.log("imageUrl ==>",imageUrl);
        setUserImageUrl(imageUrl);
        }
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
 
}
const updatePlan=(e)=>{
    setPlanEdit(false)
}
const handleOk = async() => {
    console.log("handle ok")
    form.validateFields().then( async (values) => {
        console.log("form value",values);
        let response=await changePassword(values);
        console.log(response)
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
    setPassModal(false);
    }
const  handleCancel = () => {
        setPassModal(false);
      }; 
const showPassModal=()=>{
        setPassModal(true);
       }
const showLicModal=()=>{
        setLicModal(true);
       }
    
    return(<Layout className="parallax">
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content className="wrapper" style={{ padding: '10 10 10 10px', marginTop: 64, minHeight:"95vh"}}>
        <div className="center" style={{textAlign:"center",maxWidth:"1000px"}}>
    <Row style={{color:"white"}}>
        <Col span={24} >
        <div className="profile-header-container">   
    		<div className="profile-header-img">
               {""!==userImageUrl && <img className="img-circle" src={userImageUrl} />  }
               {""===userImageUrl &&     <Avatar shape="square" size={120}  style={{margin:10, backgroundColor: "rgb(57, 224, 89)", verticalAlign: 'middle' }}> {props.user.username}</Avatar>}
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
                 <Col span={11}><strong>Total Space</strong></Col><Col span={11}>{props.license.totalSpace}</Col><Col span={2}></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list"  style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>Free Space</strong></Col><Col span={11}>{props.license.totalSpace-props.license.usedSpace}</Col><Col span={2}></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}} />
             <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>plan</strong></Col><Col span={11}>{props.license.licenseType}</Col>  <Col span={2} className="account-change-cursor" onClick={()=>showLicModal()}><EditFilled/></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list"  style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>E-Mail</strong></Col><Col span={11}>{props.user.email}</Col><Col span={2}></Col>
             </Row>
             <Divider style={{padding:"0px",margin:"0px"}}/>
             <Row className="accounts-list" style={{paddingTop :"30px",paddingBottom:"30px"}}>
                <Col span={11}><strong>password</strong></Col><Col span={11}>{'***'}</Col>  <Col span={2} className="account-change-cursor" onClick={()=>showPassModal()}><EditFilled/></Col>
            </Row> 
            <Row>
                <Drawer title="password change" visible={isPassModal}  onOk={handleOk} onClose={handleCancel} width={"30vw"}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                <div style={{textAlign: 'right' }}>
                <Button onClick={ handleCancel} style={{ marginRight: 8 }} >
                    Cancel
                 </Button>
                 <Button onClick={handleOk} type="primary" >
                 Submit
                </Button>
                </div>
                }>

                 
                     <p>please type your old password along with your new password</p>
                     <Form form={form} >
                        <Form.Item name="old_password">
                          <Input.Password name="old_password" id="old_password" placeholder="old password" />
                        </Form.Item>
                        <Form.Item name="new_password">
                          <Input.Password name="new_password" id="new_password" placeholder="new password" />
                        </Form.Item>
                    </Form>
                 </Drawer>
            </Row>
            <Row>
                 <CheckoutForm isLicModal={isLicModal} setLicModal={setLicModal}/>
            </Row>
        </Col>
        </Row>
        </div>
        <div className="push"></div>
    </Content>
    <Footer className={"footer"} style={{minHeight:"8vh",maxHeight:"8vh"}}>
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default connect(state_to_props,{setUserDetailsToStore:setUserDetailsToStore})(Accounts);