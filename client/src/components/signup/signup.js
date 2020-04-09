import React,{useState,useEffect} from 'react'

//import { Form, Icon, Input, Button, Checkbox,Select } from 'antd';

import Form from 'antd/es/form'
import Icon from 'antd/es/icon'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import message from 'antd/es/message'
import Typography from 'antd/es/typography'
//import Checkbox from 'antd/es/checkbox'
import Select from 'antd/es/select'
import {isUserExist} from '../../services/connectToServer'
import {withRouter} from 'react-router-dom'
import {state_to_props,getCookie} from '../../util/common_utils'
import {setUserDetailsToStore,emtStores,userFetchType} from '../../store/action'
import {connect} from 'react-redux'
import {SmileTwoTone,MailTwoTone,LockTwoTone,DollarCircleTwoTone} from '@ant-design/icons'


const Signup=(props)=>{
  const {Title} = Typography;
 
  const [isLoading, setLoading]=useState(false)
   const [emailError,setEmailError]=useState(false);
  
  


  const [form] = Form.useForm();
  const {Option}=Select;
  useEffect(()=>{
    if(props.user && props.user.username && props.user.email && getCookie("token"))
    {
          message.success("welcome "+props.user.username+ " !")
          setLoading(false);
          props.history.push("/home")
    }
    else if(props.user.error)
    {
      message.error(props.user.error.message);
      setLoading(false);
      props.emtStores()
    }
    else
    {
    setLoading(false);
    }
  },[props.user])


  const isExist=async (value)=>
  {
    console.log("value ",value);
    if(value)
      {
        const existResp= await isUserExist('email',value);
        console.log("exist ",existResp);
        existResp.status!==200?setEmailError(false):setEmailError(true) 
        if(existResp.status!==200)
        {return Promise.resolve()}
        else
        {return Promise.reject("Email-Id already exist")}
        }
  }

  const handleSubmit = values => {
    setLoading(true);
    console.log("values",values);
    props.setUserDetailsToStore(values,userFetchType.SIGNUP);
  };

  

  return (<div style={{maxHeight:"40vh"}}>
    <Title style={{color:"white"}} level={3} >Sign-up</Title>
    <br/>
    <Form onFinish={handleSubmit} className="login-form">

    <Form.Item
        name='username'
        rules={[
          {
            required: true,
          },
        ]}>
      <Input
        prefix={<SmileTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="UserName"
       />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          {
            type: 'email', 
            message:'please enter the proper mail-ID'
          },
          {
            required:true,
            message:"please enter the mail-ID"
          },
         ({getFieldValue})=>({
          async validator(rule,value){
            return await isExist(value)
          }
           
         })
        ]} >
      <Input
        prefix={<MailTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        placeholder="Email"
      />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message:'please input your password'
          },
        ]}>
      <Input.Password
        prefix={<LockTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
        type="password"
        placeholder="Password"
      />
      </Form.Item>


      <Form.Item
       name='plan'
       rules={
         [{
           required:true
         }]
       }>
      <Select
          size="large" 
          prefix={<LockTwoTone style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="select your plan" >
          <Option value="planA">plan A, 8 User, 3USD/month</Option>
          <Option value="planB">plan B, 12 User, 5USD/month</Option>
        </Select>
      </Form.Item>

  <Form.Item>
    <br/>
    <Button type="primary" htmlType="submit" size="large" className="login-form-button"   loading={isLoading}>
      {!isLoading && "Start Your Free Trial"}
      {isLoading && "Signing You In"}
    </Button>
    
  </Form.Item>
</Form></div>)
}

export default connect(state_to_props,{setUserDetailsToStore,emtStores})(withRouter(Signup));