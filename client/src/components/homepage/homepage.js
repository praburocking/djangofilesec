import React,{useEffect,useState} from 'react'
//import {Row,Col,Layout,Typography,Card,Timeline,Carousel} from 'antd'

import Row from 'antd/es/row'
import Col from 'antd/es/col'
import Layout from 'antd/es/layout'
import Progress from 'antd/es/progress'
import {connect} from 'react-redux'
import Header from '../utilComponents/header'
import FileUploader from '../utilComponents/fileUploader'
import Footer from '../utilComponents/footer'
import DataTable from '../utilComponents/dataTable'
import {state_to_props} from '../../util/common_utils'
import {listFiles} from '../../store/action'
import  CircularProgressBar from '../utilComponents/circularProgressBar'
import './homePage.css'


const HomePage=(props)=>
{ 
    const {  Content } = Layout;
    const [isTableLoading,setTableLoading]=useState(true)
    useEffect(()=>
    {
       props.listFiles()
       setTableLoading(false)
      
    },[])

    return(
    <Layout className="layout-bg">
        {console.log("files in store ",props.files)}
   <Header defaultSelectedKeys={['1']} isLoggedIn="true"/>
    <Content className='wrapper' style={{  marginTop: 64, minHeight:"100vh",padding:20}}>

        <Row style={{marginTop:20,marginBottom:20}}>
            <Col  xs={{span:24,order:2}} md={{span:16,order:1}}>
             <FileUploader/>
             </Col>
             <Col span={6}   xs={{span:24,order:1}} md={{span:6,order:2}} className="App" style={{color:"white",padding:"20px",margin:20}}>
             {/* <Progress type="dashboard" percent={(props.license.usedSpace/props.license.totalSpace)*100} status="active" style={{color:"white"}} strokeWidth={12}/> */}
             <CircularProgressBar
            strokeWidth="10"
            sqSize="200"
            percentage={((props.license.usedSpace/props.license.totalSpace)*100).toFixed(2)}/>
             </Col>
        </Row>
        <Row style={{backgroundColor:"rgb(255, 255, 255)"}}>
            <Col span={24}>
                <DataTable data={props.files} loading={isTableLoading}/>
            </Col>

    </Row>
    <div className="push"></div>
    </Content>
   <Footer/>
</Layout>)
}

export default connect(state_to_props,{listFiles})(HomePage);
//style={{ padding: '0 0 0 0px', marginTop: 64, minHeight:"720px",marginLeft:"550px",marginRight:"550px",marginTop:"350px",marginBottom:"150px",paddingTop:"150px",paddingLeft:"50px",paddingRight:"50px" }}