import Layout from 'antd/es/layout'
import {MailFilled,FacebookFilled} from '@ant-design/icons'
import React,{useEffect,useState} from 'react'


const Footer=()=>{
    const {  Content, Footer } = Layout;
    return(
        <Footer className={'footer'} >
         
            <div style={{textAlign:"left"}}> <MailFilled /> For any enquiries, contact prabumohan96@gmail.com </div>
            <div style={{textAlign:"left"}}>    <FacebookFilled /> <a href="#">facebook page</a></div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div>
       </Footer>);
       
    }


export default Footer;