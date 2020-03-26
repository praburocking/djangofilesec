import React,{useState,useEffect} from 'react'
//import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typogrpahy from 'antd/es/typography'
import Row from 'antd/es/row'
import Column from 'antd/es/col'
import {ACTIONS,setUserDetailsToStore,userFetchType} from '../../store/action'

import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'

import {withRouter,Link} from 'react-router-dom'
import {getCookie} from '../../util/common_utils'

const Login=(props)=>{
  useEffect(()=>{props.form.validateFields()},[]);
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
  const { getFieldDecorator,getFieldsError,getFieldError,isFieldTouched } = props.form;
  const emailError = isFieldTouched('email') && getFieldError('email');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  const {Title}=Typogrpahy

  const handleSubmit = e => {
    e.preventDefault();
    console.log("type",setLoading);
    setLoading(true);
    props.form.validateFields( async (err, values) => {
      if (!err) {
        props.setUserDetailsToStore(values,userFetchType.LOGIN)
      }
    });
  };


  return (
  <div>
    <Title level={3} style={{color:"white"}}>Login</Title>
    <br/>
    <Form onSubmit={handleSubmit} className="login-form">
{console.log("from return",props.user.username)}
 <Form.Item validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
    {getFieldDecorator('email', {
      rules: [{ required: true, message: 'Please input mailID' },{ type:'email', message: 'Please enter the proper E-Mail ID' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
      />,
    )}
  </Form.Item>
  <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
    {getFieldDecorator('password', {
      rules: [{ required: true, message: 'Please input your Password!' }],
    })(
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Password"
      />,
    )}
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
  <Icon type="left" style={{color:"#1890ff"}}/>
  
      Signup
    </Link>
   </Column>
  <Column span={12}>
<Link  to="/forgotpassword" style={{color:"white"}}>
      Forgot password <Icon type="right" style={{color:"#1890ff"}}/>
    </Link>
    </Column>
    </Row>
</div>)
}

export default connect(state_to_props,{setUserDetailsToStore})(withRouter(Form.create({ name: 'Login' })(Login)));