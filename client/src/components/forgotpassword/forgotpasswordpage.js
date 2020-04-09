import React from 'react'
//import {Row,Col,Layout,Typography,Card,Timeline,Carousel} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Header from '../utilComponents/header'
import ForgotPassword from './forgotpassword'

const ForgotPasswordPage=(props)=>
{ const {  Content, Footer } = Layout;
    return(<Layout className="parallax" >
   <Header defaultSelectedKeys={['1']}/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64,minHeight:"84vh",maxHeight:"84vh"}}>
     <Row className="alignCenter"> 
         <Col span={8}></Col>
          <Col span={8}  style={{margin:"15px",marginTop:"120px",background: "rgba(80, 80, 80, 0.5)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}} >
     <ForgotPassword/>
     </Col>
     <Col span={8}></Col>
     </Row>
    
    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default ForgotPasswordPage;
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}