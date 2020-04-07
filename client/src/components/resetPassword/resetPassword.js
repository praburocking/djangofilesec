import React,{useState,useEffect} from 'react'

import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typogrpahy from 'antd/es/typography'

import {connect} from 'react-redux'
import {state_to_props} from '../../util/common_utils'

import {withRouter,Link} from 'react-router-dom'
//import {setAuthorizationCookies} from '../../util/common_utils'

import {forgotPasswordVerify,resetPass} from '../../services/connectToServer'

const setUserDetailsToStore=(user)=>
  {
    return {type:"USER_INIT",data:user};
  }

const ResetPassword=(props)=>{
  const [isLoading,setLoading]=useState(false);
  const {Title}=Typogrpahy

  useEffect(()=>
  {
    const verify=async()=>{
    let token=props.location.search
    if(token.includes('token=') && !token.includes('&') && token.split('=')[1])
    {
      let verifyRes=await forgotPasswordVerify(token.split('=')[1])
      if(verifyRes.status!==200 || !verifyRes.data.status )
        {
          message.error("invalid token redirecting to home page");
          props.history.push('/')
         }
    }
    else
    {
      message.error("invalid token redirecting to home page");
      props.history.push('/')
    }
  }
  props.form.validateFields()
  verify();
  },[]);

  const onFinish = async(values) => {
      console.log("values ",values);
        setLoading(true);
        console.log('Received values of form: ', values);
        let token=props.location.search
        if(token.includes('token=') && !token.includes('&') && token.split('=')[1])
        {
          const resetPassRes=await resetPass({token:token.split('=')[1],password:values.password});
        if(resetPassRes && resetPassRes.status===200)
        {
        console.log("data =>",props.user);
        message.success("Your password changed please login ");
        setLoading(false);
        props.history.push('/login')
        }
        else
        {   
        console.log("login Response",resetPassRes);
        message.error("Exception while resetting your password");
        setLoading(false);
        }
      }
      else
      {
        message.error("Exception while resetting your password");
      }
  };


  return (
  <div>
    <Title level={3} style={{color:"white"}}>Reset Password</Title>
    <br/>
    <Form onFinish={onFinish} className="login-form">

  <Form.Item 
  name='password'
  rules={ [{ required: true, message: 'Please input your Password!' }]}>
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Password" />
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button" loading={isLoading}>
    { !isLoading && "Reset Password" }
    { isLoading && "Resetting Password"}
    </Button>
  </Form.Item>

</Form>
<Link className="login-form-forgot" to="/forgotpassword">
      Forgot password
    </Link>

</div>)
}

export default connect(state_to_props,{setUserDetailsToStore})(withRouter(ResetPassword));