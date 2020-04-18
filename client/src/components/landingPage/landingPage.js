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
import {LockFilled,CloudFilled,FundFilled,DollarCircleFilled} from '@ant-design/icons'

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
                <Col span={7} style={{margin:"15px",marginTop:"120px",background: "rgba(3, 9, 49, 1)",paddingLeft:"40px",paddingRight:"40px",paddingBottom:"50px",paddingTop:"50px",maxHeight:500}} >
            <Signup/>
            
            </Col>
            </Row>
            <Row style={{minHeight:400,margin:"0px",minWidth:"100%",backgroundColor:"rgba(2, 164, 255, 0.7)",padding:0,margin:0}}>
                <Col>
                <Row type="flex" justify="center" style={{paddingBottom:"8px",paddingTop:"5px",alignContent:"center"}}>
                    <Col>
                        <Title level={2} style={{color:"white"}}>Why Us?</Title>
                    </Col>
                </Row>
                <Row  className="alignCenter"  justify="center" style={{marginLeft:"15px",marginRight:"15px",minWidth:"100vw"}}>
                <Col span={6}  className="alignCenter" >
                    <Avatar shape="square" size={64} icon={<LockFilled />} style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Security</Title>
                    <Paragraph style={{color:"white",padding:"5px"}}>we are one of the safest place on the internet to store your most important files, we use a user generated and a system generated key to encrypt the file, so it is highly impossible to decrypt the file without two parties</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon={<FundFilled />} style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white",padding:"5px"}}>scalability</Title>
                    <Paragraph style={{color:"white"}}>you can upgrade or downgrade your plan when ever you want. you can upgrade from free to  paid1, from  paid1 to paid2</Paragraph>
                    </Col>   
                <Col  span={6}  className="alignCenter" >
                    <Avatar shape="square" size={64} icon={<DollarCircleFilled />} style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}}>Afforability</Title>
                    <Paragraph style={{color:"white",padding:"5px"}}>we are offering free and afforable paid service as well</Paragraph>
                    </Col>
                <Col  span={6} className="alignCenter" >
                    <Avatar shape="square" size={64} icon={<CloudFilled />} style={{marginBottom:10}}/>
                    <Title level={4} style={{color:"white"}} >Availablity</Title>
                    <Paragraph style={{color:"white",padding:"5px"}}>we are on cloud so your data is available to you 24*7. you can access and download your files from anywhere, from any device </Paragraph>
                    </Col>
                </Row>
                </Col>
                </Row>
                <Row style={{minHeight:200,margin:"0px",minWidth:"100%",padding:0,marginTop:"50px",marginBottom:"50px",maxWidth:"100vw",alignContent:"center"}}>
                <Col style={{minWidth:"100vw"}}>

               <Title className="alignCenter" style={{color:"white"}}>Pricing</Title>
               <Row style={{marginBottom:"50px",marginLeft:"40px",marginTop:"50px"}}>
                   <Col span={8} style={{alignContent:"center"}}>
                   <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>Free </Title>}   style={{ width: 350,minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px" }} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                   <Timeline style={{color:"white"}}>
                    <Timeline.Item>Storage Limit-100 MB </Timeline.Item>
                    <Timeline.Item>Single file size limit - 5 MB </Timeline.Item>
                </Timeline>
                </Card>
                 </Col>
                 <Col span={8}>
                 <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PAID 1</Title>}   style={{ width: 350, minHeight:400,color:"white",backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px" }} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                 <Timeline style={{color:"white"}}>
                    <Timeline.Item>Storage Limit - 500MB</Timeline.Item>
                    <Timeline.Item>Single file size limit - 10MB</Timeline.Item>
                    <Timeline.Item>PRICE - 8 USD</Timeline.Item>
                   
                </Timeline>
                </Card>
                </Col>
                <Col span={8}>
                <Card title={<Title level={4} className="alignCenter" style={{color:"rgb(2, 2, 40)"}}>PAID 2</Title>}   style={{ width: 350,minHeight:400,color:"white" ,backgroundColor:"rgba(2, 164, 255, 0.7)",border:"0px"}} headStyle={{backgroundColor:"rgb(57, 224, 89)"}}>
                <Timeline style={{color:"white"}}>
                    <Timeline.Item>Storage Limit - 1GB</Timeline.Item>
                    <Timeline.Item>Single file size limit - 100MB</Timeline.Item>
                    <Timeline.Item>PRICE - 16 USD</Timeline.Item>
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