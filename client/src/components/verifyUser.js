import React,{useEffect,useState} from 'react';
import Layout from 'antd/es/layout'
import Typography from 'antd/es/typography'
import Header from './utilComponents/header'
import {verifyUser} from '../services/connectToServer'
import {withRouter} from 'react-router-dom'
import message from 'antd/es/message'
import {Button,Row,Col} from 'antd'

const VerifyUser=(props)=>
{ 
    const {  Content, Footer } = Layout;
    const {Title}=Typography;
    const [isVerified,setVerified]=useState(true);
    const [status,setStatus]=useState("Verifying User...");
    useEffect(()=>{
        const verifyuser=async()=>
            {
                
                if(props.token)
                {   let token=props.token;
                    console.log("token ==> ",token);
                   const verifyUserResp=await verifyUser(token);

                   if(verifyUserResp.status===200)
                   {
                    message.success("User verified redirecting to Login");
                    setVerified(true);
                    //props.history.push('/login');
                    status="Verified, Please login!!"
                   }
                   else
                   {   console.log("eriyuser ",verifyUserResp.data)
                       if(verifyUserResp.data.message)
                       {
                        message.error(verifyUserResp.data.message);
                        setStatus(verifyUserResp.data.message)
                       }
                       else
                       {
                           message.error("Exception while verifying user")
                           setStatus("Exception while verifying user")
                       }
                       
                   }
                }
                else
                {
                    message.error("invalid token redirecting to home page");
                    props.history.push('/')
                }
           
            
            }
        verifyuser();
    },[]);

    return(
<Layout className="layout-bg"  >
   <Header defaultSelectedKeys={['1']}/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64,height:"84vh"}}>
     <Row className="alignCenter"> 
         <Col span={8}></Col>
          <Col span={8}  style={{margin:"15px",marginTop:"120px",background: "rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}} >
          {!isVerified &&  <Title style={{color:"white"}}>  {status} </Title>}
      {isVerified &&  <Title style={{color:"white"}}>  {status}</Title>}
      {isVerified &&  <Button type="primary" htmlType="submit" size="large" className="login-form-button" onClick={()=>props.history.push('/login')}>Go to Login</Button> }
     </Col>
     <Col span={8}></Col>
     </Row>
    </Content>
    <Footer style={{minHeight:"8vh",maxHeight:"8vh"}}>
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>
            )
}

export default withRouter(VerifyUser);
