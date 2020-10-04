//import {Layout,Menu,Row,Col} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Menu from 'antd/es/menu'
import Dropdown from 'antd/es/dropdown'
import Avatar from 'antd/es/avatar'

import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import React,{useState} from 'react'
import {verifyAndGetToken,state_to_props} from '../../util/common_utils'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {message,Modal,Button} from 'antd'
//import { OmitProps } from 'antd/lib/transfer/renderListBody';




const Header=(props)=>
{   

    const { Header} = Layout;
    console.log("header",props);
    const[showLogout,setLogout]=useState(false)
    

    const userExist=()=>
    {
      return props.user && props.user.username && props.user.email && verifyAndGetToken()
    }

 const menu=(
               <Menu
                theme={userExist()?"light":"dark"}
                mode={!userExist() && "horizontal"}
                defaultSelectedKeys={props.defaultSelectedKeys}
                className={ !userExist() && "header"}
                style={{ lineHeight: '64px',maxWidth:"200px" }}>
                
                {!userExist()&&<Menu.Item key="1" style={{ minWidth:"5vw",minHeight:"8vh" }} onClick={()=>props.history.push('/login')}>LOGIN</Menu.Item>}
                {userExist()  && <Menu.Item key="2" style={{ minWidth:"5vw"}} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>}
                {!userExist()  && <Menu.Item key="2" style={{ minWidth:"5vw",minHeight:"8vh"}} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>}
                {userExist() && <Menu.Divider />}
                {userExist() && <Menu.Item key="3" style={{ minWidth:"5vw" ,color:"red"}} onClick={()=>setLogout(true)}>Logout</Menu.Item>}
                </Menu>
    )

    const mobileMenu=(
      <Menu
       theme={userExist()?"light":"dark"}
       mode={!userExist() && "horizontal"}
       defaultSelectedKeys={props.defaultSelectedKeys}
       className={ !userExist() && "header"}
       style={{ lineHeight: '64px',maxWidth:"200px" }}>
       
       {!userExist()&&<Menu.Item key="1" style={{ minWidth:"5vw",minHeight:"8vh" }} onClick={()=>props.history.push('/login')}>LOGIN</Menu.Item>}
       {!userExist()  && <Menu.Item key="2" style={{ minWidth:"5vw",minHeight:"8vh"}} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>}
       {userExist()  && <Menu.Item key="1" style={{ minWidth:"5vw"}} onClick={()=>props.history.push('/accounts')}>Acccounts</Menu.Item>}
       {userExist()  && <Menu.Item key="2" style={{ minWidth:"5vw"}} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>}
       {userExist() && <Menu.Divider />}
       {userExist() && <Menu.Item key="3" style={{ minWidth:"5vw" ,color:"red"}} onClick={()=>setLogout(true)}>Logout</Menu.Item>}
       </Menu>
)

    return(
    <>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',background: "rgba(2, 164, 255, 0.7)",minHeight:"64px",maxHeight:"8vh" }}  >
    
        <Row justify="space-between">
          <Col ><Link to="/"> <img src="static/logo_header.png" width="160" height="80"/></Link></Col>
          <Col md={{span:'3'}} xs={{span:0}} type="flex" justify="end" align="top">
            {!userExist() && menu}
            {userExist() &&   
            <>
            <Dropdown.Button  size ="large" overlay={menu} onClick={()=>props.history.push('/accounts')} placement="bottomLeft" icon={<UserOutlined />}>
              Account
            </Dropdown.Button>
            </>
            }
           </Col>
           <Col md={{span:0}} xs={{span:3}} type="flex" justify="end" align="top">
            {!userExist() && menu}
            {userExist() &&   
            <>
            <Dropdown.Button  size ="large" overlay={mobileMenu}  placement="bottomLeft"><UserOutlined />{""}</Dropdown.Button>
            </>
            }
           </Col>
        </Row>
    </Header>
    <Modal
          title="Are you sure want to logout?"
          visible={showLogout}
          onOk={()=>props.history.push('/logout')}
          onCancel={ ()=>setLogout(false)}
          okType="danger"
          okText="logout"
          footer={[
            <Button key="submit" onClick={()=>setLogout(false)}>
              Cancel
            </Button>,
            <Button key="back" type="danger" onClick={()=>props.history.push('/logout')}>
              Logout All
            </Button>,
            <Button key="submit" type="danger"  onClick={()=>props.history.push('/logout')}>
              Logout
            </Button>,

          ]}
          >
          <p>Logout your sessions</p>
        </Modal>
    </>)
}

export default connect(state_to_props,{})(withRouter(Header));