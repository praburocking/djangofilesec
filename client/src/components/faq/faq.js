import React from 'react'
// import {Layout,Typography,Collapse} from 'antd'
import Collapse from 'antd/es/collapse';
import Layout from 'antd/es/layout'
import Typography from  'antd/es/typography'
import Header from '../utilComponents/header'
import './faq.css'

const Faq=(props)=>
{ const {  Content, Footer } = Layout;
const {Panel}=Collapse;
const {Title}=Typography;
const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
      as a welcome guest in many households across the world.
    </p>
  );

    return(
    <Layout className="layout-bg" >
   <Header defaultSelectedKeys={['2']}/>
    <Content style={{ padding: '0 0 0 0px', minHeight:"84vh",marginLeft:"80px",marginRight:"80px",marginTop:"120px", maxHeight:"84vh"}}>
     <Title className="alignCenter" style={{color:"white"}}>FAQ</Title>
    <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor:"rgb(5, 163, 255)",color:"white"}}>
    <Panel header={<h4>what is the difference between other cloud storage like google drive and this?</h4>} key="1" style={{color:"white"}}>
      To put it in the layman's term google drive is your garage or a cuboard where you put all your stuffs and filecoffer is your bank safe where you will only put the most important thing and only, only you can access it.
    </Panel>
    <Panel header={<h4>what fileCoffer do to protect my file better than other cloud storage giants?</h4>} key="2">
      <div>The free cloud storage dirves like Google Drive, Apple Cloud uses encryption at rest protocols to protect your files, that is great until you look at their terms and condition, in that they literally said that they will use your data 
      stored on their cloud to target ads. if you dont believe me, fine then take a look into these pictures and links.</div>
      <br></br>
      <div>
        while on other hand FileCoffer is not really a replacement for online Cloud storage, mostly it tries to complement the regular online cloud storage by providing place to store only important files which you dont want tech gaints to snoop around.
      </div>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      {text}
    </Panel>
  </Collapse>


    </Content>
    <Footer  style={{minHeight:"8vh",maxHeight:"8vh"}}>
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default Faq;