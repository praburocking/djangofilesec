import constants from './constants';
//import dataUtil from '../components/dataUtil'

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(!exdays)
    {
        exdays=30;
    }
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

 export  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  export function deleteCookie(cname, ) {
    document.cookie = cname + "= ; expires =Thu, 01 Jan 1970 00:00:00 GMT ;path=/";
  }

  export  function setTokenCookie (token)
  {
    if(token)
    {
      setCookie("token",token,1);
    }
  }

  export function deleteToken(){
    deleteCookie("token");
  }



  export const setAuthorizationCookies=(userData)=>
  {
    if(userData.user && userData.authtoken && userData.user.username  && userData.user.email)
    {
      setTokenCookie(userData.authtoken)
      setCookie("username",userData.user.username,1);
      setCookie("email",userData.user.email,1);
    }
    else
    {
      throw ("data not found");
    }

  }

  export const deleteAuthorizationCookies=()=>
  {
      deleteToken()
      deleteCookie("username");
      deleteCookie("email");

  }


   export const setAuthorizationHeader=()=>
  {
    const token="Token "+getCookie("token");
    const header={headers:{Authorization:token}};
    return header;

  }
  export const verifyAndGetToken=()=>
  {
    let token=getCookie("token");
    if(!token)
    {
      return undefined;
    }
    else
    {
      return token;
    }

  }

  export const state_to_props=(store)=>
  {
      return ({user:store.user,serverConfig:store.serverConfig,files:store.files})
  }


  export const find_user_cookie_put_to_store=(store)=>
  {
    const user_data={username:getCookie("username"),token:getCookie("token"),id:getCookie("id")};
    store.dispatch({type:"USER_INIT",data:user_data});
  }


  