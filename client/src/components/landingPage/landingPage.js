import React from  'react'
//import {Row,Col,Layout,Menu,Form, Icon, Input, Button, Checkbox,Avatar,Typography,Card,Timeline,Carousel} from 'antd'
import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Avatar from 'antd/es/avatar'
import Typography from 'antd/es/typography'
import Card from 'antd/es/card'
import Timeline from 'antd/es/timeline'
import Carousel from 'antd/es/carousel'


import withRouter from 'react-router-dom/withRouter'
import './landingPage.css'
import Signup from '../signup/signup'

import Header from '../utilComponents/header'

const LandingPage=(props)=>
{
    const {  Content, Footer } = Layout;
    const {Title,Paragraph}=Typography
   // const {Layout,Header}=Layout
    return(
    <Layout className="parallax" >
       <Header/>
        <Content style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"1020px" }}>
            <Row style={{minHeight:"720px"}}>
                <Col span={16}>
                <Carousel dotPosition="left"  autoplay style={{margin:15,marginTop:30,minHeight:700,minWidth:400,opacity: 0.5,color:"white"}}>
                    <div style={{minHeight:700,minWidth:400,color:"white"}} >
                     <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                     <div>
                     <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                    <div>
                    <h3>we are here to tell some awesome things about our product</h3>
                    </div>
                     <div>
                     <h3>we are here to tell some awesome things about our product</h3>
                 </div>
                 </Carousel>
                </Col>
                <Col span={7} style={{margin:"15px",marginTop:"120px",background: "rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px"}} >
            <Signup/>
            
            </Col>
            </Row>
            <Row style={{minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"rgba(2, 164, 255, 0.7)",padding:0,margin:0}}>
                <Col>
                <Row type="flex" justify="center" style={{paddingBottom:"8px",paddingTop:"5px"}}>
                    <Col>
                        <Title level={2} style={{color:"white"}}>Why Us?</Title>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between"style={{marginLeft:"15px",marginRight:"15px"}}>
                <Col span={6}  className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Title</Title>
                    <Paragraph style={{color:"white"}}>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Title</Title>
                    <Paragraph style={{color:"white"}}>we are paragraph write someThing about me</Paragraph>
                    </Col>   
                <Col  span={6}  className="alignCenter">
                    <Avatar shape="square" size={64} icon="user" style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Title</Title>
                    <Paragraph style={{color:"white"}}>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon="user" style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}} >Title</Title>
                    <Paragraph style={{color:"white"}}>we are paragraph write someThing about me</Paragraph>
                    </Col>
                <Col  span={6}  className="alignCenter">
                    <Avatar shape="square" size={64} icon="user" style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Title</Title>
                    <Paragraph style={{color:"white"}}>we are paragraph write someThing about me</Paragraph>
                    </Col>
                </Row>
                </Col>
                </Row>
                <Row style={{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px"}}>
                <Col>

               <Title className="alignCenter" style={{color:"white"}}>Pricing</Title>
               <Row style={{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}}>
                   <Col span={6} >
                   <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PRICE 1</Title>}   style={{ width: 350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px" }} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                   <Timeline style={{color:"white"}}>
                    <Timeline.Item>value1</Timeline.Item>
                    <Timeline.Item>value2</Timeline.Item>
                    <Timeline.Item>value3</Timeline.Item>
                    <Timeline.Item>value4</Timeline.Item>
                </Timeline>
                </Card>
                 </Col>
                 <Col span={6}>
                 <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PRICE 2</Title>}   style={{ width: 350, minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px" }} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                 <Timeline style={{color:"white"}}>
                    <Timeline.Item>value1</Timeline.Item>
                    <Timeline.Item>value2</Timeline.Item>
                    <Timeline.Item>value3</Timeline.Item>
                    <Timeline.Item>value4</Timeline.Item>
                </Timeline>
                </Card>
                </Col>
                <Col span={6}>
                <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PRICE 3</Title>}   style={{ width: 350,minHeight:400,color:"white" ,backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"}} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                <Timeline style={{color:"white"}}>
                    <Timeline.Item>value1</Timeline.Item>
                    <Timeline.Item>value2</Timeline.Item>
                    <Timeline.Item>value3</Timeline.Item>
                    <Timeline.Item>value4</Timeline.Item>
                </Timeline>
                </Card>
                </Col>


            <Col span={6}>
                <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PRICE 4</Title>}   style={{ width: 350, minHeight:400 ,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"}}  headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                <Timeline style={{color:"white"}}>
                    <Timeline.Item>value1</Timeline.Item>
                    <Timeline.Item>value2</Timeline.Item>
                    <Timeline.Item>value3</Timeline.Item>
                    <Timeline.Item>value4</Timeline.Item>
                </Timeline>
                </Card>
                </Col>
                </Row>
                </Col>
                </Row>
        </Content>
        <Footer >
        <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
           <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
    </Layout>)
}

export default withRouter(LandingPage);