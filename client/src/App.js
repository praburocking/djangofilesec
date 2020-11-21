import React, { Fragment, Suspense, lazy,useEffect } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch ,withRouter,Redirect} from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";
import {verifyAndGetToken,state_to_props,deleteAuthorizationCookies} from './util/common_utils'
import { connect } from 'react-redux'


import {setUserDetailsToStore,emtStores,userFetchType} from './store/action'


const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App(props) {

  useEffect(()=>{
    if(verifyAndGetToken())
    {
    console.log("props",props)
     props.setUserDetailsToStore(null,userFetchType.ACCOUNTS)
    }
  },[])
  // useEffect(()=>{
  //   if(props.user && props.user.error)
  //   {
  //     //message.error(props.user.error.detail)
  //     props.emtStores()
  //     deleteAuthorizationCookies()
  //   }
  // })

  const userExist=()=>
  {
    return props.user && props.user.username && props.user.email && verifyAndGetToken()
  }



  return (
   
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
          <Route exact path ="/" render={()=>userExist()?<Redirect to="/home"/>:<LoggedOutComponent/>} ></Route>
          <Route  path ="/home" render={()=>userExist()?<LoggedInComponent/>:<Redirect to="/"/>} ></Route>
          <Route exact path ="/posts" render={()=>userExist()?<LoggedInComponent/>:<Redirect to="/"/>} ></Route>
          <Route exact path ="/faq" render={()=>userExist()?<Redirect to="/home"/>:<LoggedOutComponent/>} ></Route>
          <Route path ="/verify" render={()=><LoggedOutComponent/>} ></Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
   
  );
}

serviceWorker.register();

export default connect(state_to_props,{setUserDetailsToStore,emtStores})(App);
