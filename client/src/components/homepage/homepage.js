import React,{useEffect} from 'react'
//import {Row,Col,Layout,Typography,Card,Timeline,Carousel} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Progress from 'antd/es/progress'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'
import FileUploader from '../utilComponents/fileUploader'
import DataTable from '../utilComponents/dataTable'
import {state_to_props} from '../../util/common_utils'
import {listFiles} from '../../store/action'


const HomePage=(props)=>
{ 
    const {  Content, Footer } = Layout;
    useEffect(()=>
    {
       props.listFiles()
    },[])

    return(
    <Layout className="parallax layout-bg">
        {console.log("files in store ",props.files)}
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content style={{  marginTop: 64, minHeight:"720px",padding:20}}>

        <Row style={{margin:20,marginLeft:100,marginRight:100}}>
            <Col span={16}>
             <FileUploader/>
             </Col>
             <Col span={6} className="App" style={{color:"white",padding:"20px",margin:20}}>
             <Progress type="dashboard" percent={75} status="active" style={{color:"white"}}/>
             </Col>
        </Row>
        <Row style={{backgroundColor:"rgb(255, 255, 255)",marginLeft:50,marginRight:50}}>
            <Col span={24}>
                <DataTable data={props.files}/>
            </Col>

    </Row>
    </Content>
    <Footer>
    <div style={{textAlign:"left"}}>  For any enquiries, contact prabumohan96@gmail.com</div>
       <div style={{textAlign:"right"}}> © 2020, All Rights Reserved.</div></Footer>
</Layout>)
}

export default connect(state_to_props,{listFiles})(HomePage);
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}