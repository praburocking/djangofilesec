import React,{useState,useEffect} from 'react'
//import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typogrpahy from 'antd/es/typography'
import Row from 'antd/es/row'
import Column from 'antd/es/col'
import {ACTIONS,setUserDetailsToStore,userFetchType} from '../../store/action'
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'

import {withRouter,Link} from 'react-router-dom'
import {getCookie} from '../../util/common_utils'
import {MailTwoTone,LockTwoTone} from '@ant-design/icons'

const Login=(props)=>{
  useEffect(()=>{
    if(props.user.username && props.user.email &&getCookie("token"))
    {
      message.success("welcome "+props.user.username +" !")
      props.history.push('/')
    }
    else if(props.user.error)
    {
      message.error(props.user.error.detail)
    }
    setLoading(false)
  },[props.user])
  
  const [isLoading,setLoading]=useState(false);
  // const emailError = isFieldTouched('email') && getFieldError('email');
  // const passwordError = isFieldTouched('password') && getFieldError('password');
  const {Title}=Typogrpahy

  const onFinish = values => {
    console.log("type",setLoading);
    setLoading(true);
    props.setUserDetailsToStore(values,userFetchType.LOGIN)

  };


  return (
  <div>
    <Title level={3} style={{color:"white"}}>Login</Title>
    <br/>
    <Form onFinish={onFinish} className="login-form">
{console.log("from return",props.user.username)}
 <Form.Item
 name="email"
 rules={[
   {
required:true,
message:"please enter your email ID"
 },
 {
   type:'email',
   message:"please enter the proper email ID"
 }
 ]}>
      <Input
        prefix={<MailTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
      />
  </Form.Item>

  <Form.Item  
  name='password'
  rules={
    [
      {
        required:true,
        message:"please enter the password"
      }
    ]
  }
  >
      <Input.Password
        prefix={<LockTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Password"
      />
  </Form.Item>

  <Form.Item>
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={isLoading}>
    { !isLoading && "Login" }
    { isLoading && "Loging You In" }
    </Button>
    
  </Form.Item>
</Form>
<Row >
  <Column span={12} style={{color:"white"}}>
  <Link to="/" style={{color:"white"}}>
  <LeftOutlined style={{color:"#1890ff"}}/>
  
      Signup
    </Link>
   </Column>
  <Column span={12}>
<Link  to="/forgotpassword" style={{color:"white"}}>
      Forgot password <RightOutlined style={{color:"#1890ff"}}/>
    </Link>
    </Column>
    </Row>
</div>)
}

export default connect(state_to_props,{setUserDetailsToStore})(withRouter(Login));