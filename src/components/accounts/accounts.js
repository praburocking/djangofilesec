import React from 'react'
import {Row,Col,Layout,Typography,Card,Timeline,Carousel,Divider} from 'antd'


import Header from '../utilComponents/header'


const Accounts=(props)=>
{ const {  Content, Footer } = Layout;
    
    return(<Layout className="parallax" style={{backgroundImage:"../media/bg.jpg"}}>
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px"}}>
    <Row>
        <Col span={6} style={{borderRight :"5px solid green",minHeight:"720px"}}>
        <Row>
            USER
            </Row>
        </Col>
       
        <Col span={18}></Col>
        </Row>
    </Content>
    <Footer >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default Accounts;
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}