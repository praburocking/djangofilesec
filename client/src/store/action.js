import {getFiles,login,getUser,signup,update_username} from '../services/connectToServer'
import {setAuthorizationCookies} from '../util/common_utils'

export const ACTIONS={
    FILES_INIT:"FILES_INIT",
    FILES_ADD:"FILES_ADD",
    USER_INIT:"USER_INIT",
    USER_ERROR:"USER_ERROR",
    AUTH_INIT:"AUTH_INIT",
    AUTH_REMOVE:"AUTH_REMOVE",
    EMT_STORE:"EMT_STORE",
    USER_UPDATE:"USER_UPDATE",
    FILES_DEL:"FILES_DEL",
    LICENSE_INIT:"LICENSE_INIT"
  }

export const userFetchType={
  ACCOUNTS:1,
  SIGNUP:2,
  LOGIN:3,
  UPDATE:4
}
export const SUCCESS_RESPONSE=[200,201,202]

export const listFiles=()=>
{       return async dispatch=>{
        let filesResp=await getFiles();
        if(filesResp.status===200)
        {
        let files=filesResp.data;
        //files.results.map(file=>{file.key=file.id})
        dispatch ({type:ACTIONS.FILES_INIT,data:filesResp.data})}
}
}

export const emtStores=()=>
{
  return({type:ACTIONS.EMT_STORE})
}

export const setUserDetailsToStore=(values,type)=>
{
  return async dispatch=>{
    let res=null;
    if(type===userFetchType.LOGIN){
    res=await login(values);
    console.log("res ",res);
      if(res && SUCCESS_RESPONSE.includes(res.status) && res.data && res.data.user && res.data.license)
      {
        setAuthorizationCookies(res.data)
        dispatch( {type:ACTIONS.USER_INIT,data:res.data.user});
        dispatch({type:ACTIONS.LICENSE_INIT,data:res.data.license})
      }
      else
        {
          dispatchError(res,dispatch)
        }
    }
    else if(type===userFetchType.ACCOUNTS)
    {
      res=await getUser();
      if(res && SUCCESS_RESPONSE.includes(res.status) && res.data && res.data.user && res.data.license)
      {
        dispatch( {type:ACTIONS.USER_INIT,data:res.data.user});
        dispatch({type:ACTIONS.LICENSE_INIT,data:res.data.license})
      }
      else
      {
        dispatchError(res,dispatch)
      }
    }
    else if(type===userFetchType.SIGNUP)
    {
      res=await signup(values)
      console.log("res  ==>",res);
      if(res && SUCCESS_RESPONSE.includes(res.status) && res.data && res.data.user && res.data.license)
      {
        setAuthorizationCookies(res.data)
        dispatch( {type:ACTIONS.USER_INIT,data:res.data.user});
        dispatch({type:ACTIONS.LICENSE_INIT,data:res.data.license});
      }
      else
      { console.log("top dipagching eerror  ",res);
        dispatchError(res,dispatch)
      }
    }
    else if (type===userFetchType.UPDATE)
    {
      res=await update_username(values)
      if(res && SUCCESS_RESPONSE.includes(res.status))
      {
      dispatch( {type:ACTIONS.USER_INIT,data:res.data});
      setAuthorizationCookies(res.data)
      }
      else
      {
        dispatchError(res,dispatch)
      }
    }

  
  }
}

const dispatchError=(res,dispatch)=>
{
  console.log("dispatching error"); 
  if(res && res.data )
  {
    console.log("dispatching error  inside if"); 
    dispatch({type:ACTIONS.USER_ERROR,data:{error:{code:res.code,detail:res.data}}})
  }



}