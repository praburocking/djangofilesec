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
  //const { getFieldsError,getFieldError,isFieldTouched } = props.form;
  const [isLoading, setLoading]=useState(false)
  // const [emailError,setEmailError]=useState(isFieldTouched('email') && getFieldError('email'));
  // const [userNameError,setUserNameError]=useState(isFieldTouched('email') && getFieldError('email'));
  // let passwordError = isFieldTouched('password') && getFieldError('password');
  // let planError=isFieldTouched('plan') && getFieldError('plan');

  const [form] = Form.useForm();
  const {Option}=Select;

  //useEffect(()=>{props.form.validateFields()},[]);
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

  function hasErrors(fieldsError) {
    console.log("fieldError",fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  // const isExist=async (event,type)=>
  // {
    
  //   if(event.target.value)
  //     {
  //       const existResp= await isUserExist(type,event.target.value);
  //       console.log("exist ",existResp);
  //       if(existResp.status!==200)
  //       {
  //         (type==="email")?setEmailError(false):setUserNameError(false)
  //       }
  //       else
  //       { 
  //         (type==="email")?setEmailError("email-ID already exist"):setUserNameError("username already exist")
  //       }
  //       }
  // }

  const handleSubmit = values => {
    setLoading(true);
    console.log("values",values);
    props.setUserDetailsToStore(values,userFetchType.SIGNUP);
  };

  

  return (<div>
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
          },
          {
            required:true,
          }
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