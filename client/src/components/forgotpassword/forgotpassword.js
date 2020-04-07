import React,{useState,useEffect} from 'react'
//import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typography from 'antd/es/typography'
import {LeftOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'

import {withRouter,Link} from 'react-router-dom'

import {forgotPassword} from '../../services/connectToServer'

const setUserDetailsToStore=(user)=>
{
  return {type:"USER_INIT",data:user};
}

const ForgotPassword=  (props)=>{
  const [isLoading,setLoading]=useState(false);
  const {Title,Paragraph}=Typography;

  const onFinish = async (values) => {
    setLoading(true);
    const forgotPassRes=await forgotPassword(values);
    if(forgotPassRes && forgotPassRes.status===200)
    {
    message.success("password reset link has been sent to your registered mail-id");
    setLoading(false);
    props.history.push('/')
    }
    else
    {
    if(forgotPassRes.data.message)
    {
      message.error(forgotPassRes.data.message);
    }
    else
    {
      message.error("Exception while Signing-in ");
    }
    
    setLoading(false);
    }
     
  };


  return (<div>
  <Title level={3} style={{color:"white"}}>Forgot Password</Title>
  <br/>
    <Form onFinish={onFinish} className="login-form">
{console.log("from return",props.user.username)}
 <Form.Item 
    name='email' 
    rules={[{ required: true, message: 'Please input mailID' },{ type:'email', message: 'Please enter the proper E-Mail ID' }]}
    >
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
      />
  
  </Form.Item>
 

  <Form.Item>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={isLoading}>
    { !isLoading && "Sent password reset link" }
    { isLoading && "sending password reset link" }
    </Button>
  </Form.Item>
</Form>
<Link to ="/login"><Paragraph style={{color:"white"}}> <LeftOutlined/>Back to Login</Paragraph></Link>
</div>)
}

export default connect(state_to_props,{setUserDetailsToStore})(withRouter(ForgotPassword));