import {getFiles,login,getUser,signup} from '../services/connectToServer'
import {setAuthorizationCookies} from '../util/common_utils'

export const ACTIONS={
    FILES_INIT:"FILES_INIT",
    FILES_ADD:"FILES_ADD",
    USER_INIT:"USER_INIT",
    USER_ERROR:"USER_ERROR",
    AUTH_INIT:"AUTH_INIT",
    AUTH_REMOVE:"AUTH_REMOVE",
    EMT_STORE:"EMT_STORE"}

export const userFetchType={
  ACCOUNTS:1,
  SIGNUP:2,
  LOGIN:3
}

export const listFiles=()=>
{       return async dispatch=>{
        let filesResp=await getFiles();
        if(filesResp.status===200)
        {
        let files=filesResp.data;
        files.map(file=>{file.key=file.id})
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
    }
    else if(type===userFetchType.ACCOUNTS)
    {
      res=await getUser();
    }
    else if(type===userFetchType.SIGNUP)
    {
      res=await signup(values)
    }
        if((res && res.status===200) || (type===userFetchType.SIGNUP && res && (res.status===201 || res.status===200)) )
        {
        if(type===userFetchType.LOGIN ||type===userFetchType.SIGNUP ){
          setAuthorizationCookies(res.data)
          dispatch( {type:ACTIONS.USER_INIT,data:res.data.user});
        }
        else
        {
          dispatch( {type:ACTIONS.USER_INIT,data:res.data});
        }
       
        }
        else
        {
          if(res && res.data && res.data.detail)
          {
            dispatch({type:ACTIONS.USER_ERROR,data:{error:{code:res.code,detail:res.data.detail}}})
          }
        }
  }
}