import React from 'react'
import {Row,Col,Layout,Typography,Card,Timeline,Carousel,Divider} from 'antd'
import { Button } from 'antd';
import {state_to_props} from '../../util/common_utils'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'
import {EditFilled} from '@ant-design/icons'
import './accounts.css'


const Accounts=(props)=>
{ const {  Content, Footer } = Layout;
    
    return(<Layout className="parallax" style={{backgroundImage:"../media/bg.jpg"}}>
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{ padding: '10 10 10 10px', marginTop: 64, minHeight:"84vh",maxHeight:"84vh"}}>
        <div class="center" style={{textAlign:"center",maxWidth:"1000px",minWidth:"1000px"}}>
    <Row style={{color:"white"}}>
        <Col span={24} >
        <div class="profile-header-container">   
    		<div class="profile-header-img">
                <img class="img-circle" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"/>
                <div class="rank-label-container">
                    <Button class="label label-default rank-label"  style={{backgroundColor:"rgb(24,144,255)"}}><EditFilled />Edit</Button>
                </div>
            </div>
        </div>  
        </Col>

            
        <Col span={24} style={{color:"white",textAlign:"center"}}>
            <Row style={{paddingTop :"10px",paddingBottom:"10px",alignContent:"center"}} >
                 <Col span={12}><strong>Name</strong></Col><Col span={12}>{props.user.username}</Col>
            </Row>
            <Divider/>
             <Row style={{paddingTop :"10px",paddingBottom:"10px"}}>
                 <Col span={12}><strong>Total Space</strong></Col><Col span={12}>{props.user.username}</Col><Col></Col>
             </Row>
             <Divider/>
             <Row  style={{paddingTop :"10px",paddingBottom:"10px"}}>
                <Col span={12}><strong>Free Space</strong></Col><Col span={12}>{props.user.username}</Col><Col></Col>
             </Row>
             <Divider/>
             <Row style={{paddingTop :"10px",paddingBottom:"10px"}}>
                <Col span={12}><strong>plan</strong></Col><Col span={12}>{props.user.username}</Col><Col></Col>
             </Row>
             <Divider/>
             <Row style={{paddingTop :"10px",paddingBottom:"10px"}}>
                <Col span={12}><strong>password</strong></Col><Col span={12}>***</Col><Col></Col>
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

export default connect(state_to_props)(Accounts);
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}