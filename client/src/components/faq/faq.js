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
      Diggy-Coffer helps to store  and retrive your important files like certificates that contains your PII on Internet. it focuses on simple task, how to store the important files securly on internet.
    </p>
  );

    return(
    <Layout className="layout-bg" >
   <Header defaultSelectedKeys={['2']}/>
    <Content className="wrapper" style={{ padding: '0 0 0 0px', minHeight:"100vh",marginLeft:"80px",marginRight:"80px",marginTop:"120px", }}>
     <Title className="alignCenter" style={{color:"white"}}>FAQ</Title>
    <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor:"rgb(5, 163, 255)",color:"white"}}>
    <Panel header={<h4>what is the difference between other cloud storage like google drive and this?</h4>} key="1" style={{color:"white"}}>
      To put it in the layman's term google drive is your garage or a cuboard where you put all your stuffs and filecoffer is your bank safe where you will only put the most important thing and only, only you can access it.
    </Panel>
    <Panel header={<h4>what fileCoffer do to protect my file better than other cloud storage giants?</h4>} key="2">
      <div>The free cloud storage dirves like Google Drive, Apple Cloud uses encryption at rest protocols to protect your files. which literally translate to they need to comply with the government they are working under and release your data to the government agency which not 
        actually not the worst part, some of the free cloud storage drives like google may even read your files to perform targetted ads.</div>
      <br></br>
      <div>
      while in other hand Digy-coffer, which is really not a replacement but a compliment to cloud storage drives only knows your encrypted file and its name only. with you knowing the encryption key only you can decrypt it
      </div>
    </Panel>
    <Panel header="What is Digy-Coffer?" key="3">
      {text}
    </Panel>
    <Panel header={<h4>what are the  informations we  store about you?</h4>} key="4">
     <ul>
       <li>EMail ID</li>
       <li>profile pic</li>
       <li> your data file, encrypted with the key you provided(note: we dont store your encryption key)</li>
       <li>if you are paid user, your card information will be stored in our payment processor, <strong>Stripe</strong> (to know more about how stripe stores your data click <a herf="#">here</a>)  </li>
     </ul>
      <br></br>
      
    </Panel>
  </Collapse>

  <div className="push"></div>
    </Content>
    <Footer className={"footer"} >
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default Faq;