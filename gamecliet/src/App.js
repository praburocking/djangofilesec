import React,{useEffect} from 'react';
//import logo from './logo.svg';
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import './App.css';
import Signup from './components/signup/signup'
import LandingPage from './components/landingPage/landingPage'
import Faq from './components/faq/faq'
import Login from './components/loginPage/loginPage'
import HomePage from './components/homepage/homepage'
import {verifyAndGetToken,state_to_props,deleteAuthorizationCookies} from './util/common_utils'
import LogOut from './components/logout/logout'
import { connect } from 'react-redux'
import Accounts from './components/accounts/accounts'
import NotFound from './components/404/404'
import ForgotPasswordPage from './components/forgotpassword/forgotpasswordpage'
import ResetPasswordPage from './components/resetPassword/resetPasswordPage'
import VerifyUser from './components/verifyUser'
import {setUserDetailsToStore,emtStores,userFetchType} from './store/action'


function App(props) {
  useEffect(()=>{
    if(verifyAndGetToken())
    {
    props.setUserDetailsToStore(null,userFetchType.ACCOUNTS)
    }
  },[])
  useEffect(()=>{
    if(props.user.error)
    {
      props.emtStores()
      deleteAuthorizationCookies()
    }
  })

  const userExist=()=>
  {
    return props.user && props.user.username && props.user.email && verifyAndGetToken()
  }


  return (
    <>
    
    <Switch location={props.location}>
      <Route exact path ="/" render={()=>userExist()?<Redirect to="/home"/>:<LandingPage/>} ></Route>
      <Route exact path ="/faq" render={()=><Faq/>} ></Route>
      <Route exact path ="/login" render={()=>userExist()?<Redirect to="/home"/>:<Login/>}></Route>
      <Route exact path ="/logout" render={()=>userExist()?<LogOut/>:<Redirect to="/"/>}></Route>
      <Route exact path ="/home" render={()=>userExist()?<HomePage/>:<Redirect to="/"/>} ></Route>
      <Route exact path ="/accounts" render={()=>userExist()?<Accounts/>:<Redirect to="/"/>} ></Route>
      <Route exact path="/forgotpassword" render={()=>userExist()?<Redirect to="/home"/>:<ForgotPasswordPage/>}></Route>
      <Route exact path="/resetPassword" render={()=>userExist()?<Redirect to="/home"/>:<ResetPasswordPage/>}></Route>
      <Route exact path="/verifyuser" render={()=>userExist()?<Redirect to="/home"/>:<VerifyUser/>}></Route>
      <Route exact path ="/signup" render={()=>userExist()?<Redirect to="/home"/>:<Signup/>}></Route>
      <Route exact path ="/pagenotfound" render={()=><NotFound/>} ></Route>
      <Route  render={()=><Redirect to="/pagenotfound"/>} ></Route>
      </Switch>
      
      </>
  );
}

export default connect(state_to_props,{setUserDetailsToStore,emtStores})(withRouter(App));
