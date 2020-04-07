import React from 'react'
import {Row,Col,Layout,Typography,Card,Timeline,Carousel,Divider} from 'antd'
import { Avatar } from 'antd';
import {state_to_props} from '../../util/common_utils'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'


const Accounts=(props)=>
{ const {  Content, Footer } = Layout;
    
    return(<Layout className="parallax" style={{backgroundImage:"../media/bg.jpg"}}>
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{ padding: '10 10 10 10px', marginTop: 64, minHeight:"720px"}}>
    <Row>
        <Col span={6} style={{minHeight:"720px"}}>
        <Avatar shape="square" size={64} >{props.user.username[0].toUpperCase()}</Avatar>
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

export default connect(state_to_props)(Accounts);
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}