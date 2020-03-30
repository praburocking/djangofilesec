import React,{useEffect} from 'react';
import Layout from 'antd/es/layout'
import Typography from 'antd/es/typography'
import Header from './utilComponents/header'
import {verifyUser} from '../services/connectToServer'
import {withRouter} from 'react-router-dom'
import message from 'antd/es/message'

const VerifyUser=(props)=>
{ 
    const {  Content, Footer } = Layout;
    const {Title}=Typography;
    let status="Verifying User..."
    useEffect(()=>{
        const verifyuser=async()=>
            {
                let token=props.location.search
                if(token.includes('token=') && !token.includes('&') && token.split('=')[1])
                {
                   const verifyUserResp=await verifyUser({token:token.split('=')[1]});
                   if(verifyUserResp.status===200)
                   {
                    message.success("User verified redirecting to Login");
                    props.history.push('/login');
                   }
                   else
                   {    
                       if(verifyUser.data.message)
                       {
                        message.error(verifyUser.data.message);
                       }
                       else
                       {
                           message.error("Exception while verifying user")
                       }
                   }
                }
                else
                {
                    message.error("invalid token redirecting to home page");
                    props.history.push('/')
                }
           
            status="Verified, Please login!!"
            }
        verifyuser();
    },[]);

    return(
    <Layout className="parallax" >
   <Header defaultSelectedKeys={['1']} isLoggedIn="false"/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px"}}>
        <Title >  {status} </Title>
    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>
            )
}

export default withRouter(VerifyUser);
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}