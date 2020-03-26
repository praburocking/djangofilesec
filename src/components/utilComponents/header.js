//import {Layout,Menu,Row,Col} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Menu from 'antd/es/menu'
import Dropdown from 'antd/es/dropdown'
import Avatar from 'antd/es/avatar'

import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import React from 'react'
import {verifyAndGetToken,state_to_props} from '../../util/common_utils'
//import { OmitProps } from 'antd/lib/transfer/renderListBody';




const Header=(props)=>
{   

    const { Header} = Layout;
    console.log("header",props);
    

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
                
                {!userExist()&&<Menu.Item key="1" style={{ minWidth:"100px" }} onClick={()=>props.history.push('/login')}>LOGIN</Menu.Item>}
                <Menu.Item key="2" style={{ minWidth:"100px" }} onClick={()=>props.history.push('/faq')}>FAQ</Menu.Item>
                {userExist() && <Menu.Divider />}
                {userExist() && <Menu.Item key="3" style={{ minWidth:"100px" ,color:"red"}} onClick={()=>props.history.push('/logout')}>Logout</Menu.Item>}
                </Menu>
    )

    return(
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',background: "rgba(2, 164, 255, 0.7)" }} >
    <Link to="/"> <div className="logo" /></Link>
        <Row type="flex" justify="end" align="top"><Col>

    {!userExist() && menu}
    {userExist() &&   
    <>
    <Avatar shape="square" size="large"  style={{margin:10, backgroundColor: "rgb(57, 224, 89)", verticalAlign: 'middle' }}> {props.user.username[0].toUpperCase()}</Avatar>
     <Dropdown.Button  size ="large" overlay={menu} onClick={()=>props.history.push('/accounts')}>
      Account
    </Dropdown.Button>
    </>
    }
  </Col></Row>
    </Header>)
}

export default connect(state_to_props,{})(withRouter(Header));