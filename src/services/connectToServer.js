import axios from'axios'
import {setAuthorizationHeader} from '../util/common_utils'
require('dotenv').config()

console.log("server url",process.env);

let url=process.env.NODE_ENV==="development"?process.env.REACT_APP_DEVELOPMENT_SERVER_URL:process.env.REACT_APP_PRODUCTION_SERVER_URL;
//url="http://localhost:3001/api/"
//url="https://prabuheros-server.herokuapp.com/api/"

let user_url=url+"iam/accounts";
let login_url=url+"iam/login";
//et user_url=url+"users";
let logout_url=url+"iam/logout";
let signup_url=url+"iam/signup"
let payment_url=url+"pay"
let forgotPassword_url=url+"forgotpassword"
let resetPass_url=url+"resetpass"
let verifyuser_url=url+"verifyuser"
let uploadfile_url=url+"file/upload"
let getfiles_url=url+"app/files"
let downloadfiles_url=url+'file/download'
let deletefile_url=url+'file'

export const signup=async (userData)=>
{
    try {
        const response = await axios.post(signup_url, userData);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const signout=async ()=>
{
    try {
        const response = await axios.post(logout_url, { signout: true }, setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
    }
}


export const login=async (loginData)=>
{   console.log("loginData ",loginData);
    try {
        const response = await axios.post(login_url, loginData);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const getUser=async ()=>
{
    try {
        const response = await axios.get(user_url, setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
    }
}




export const add_payment=async ()=>
{
    try {
        const response = await axios.post(payment_url, null, setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const isUserExist=async (type,data)=>
{
    try {
        const response = await axios.get(signup_url + "/exist?"+type+"=" + data, null);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const forgotPassword=async (email)=>
{
    try {
        const response = await axios.post(forgotPassword_url, email);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const forgotPasswordVerify=async (key)=>
{
    try {
        const response = await axios.post(forgotPassword_url + "/verifykey?token=" + key);
        return response;
    }
    catch (error) {
        return error.response;
    }
}
export const resetPass=async (key)=>
{
    try {
        const response = await axios.post(resetPass_url, key);
        return response;
    }
    catch (error) {
        return error.response;
    }
}
export const verifyUser=async (key)=>
{
    try {
        const response = await axios.post(verifyuser_url, key);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const uploadfile=async (data)=>
{
    try {
        const response = await axios.post(uploadfile_url, data,setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const getFiles=async ()=>
{
    try {
        const response = await axios.get(getfiles_url,setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
        
    }
}


// export const downloadFiles=async (id)=>
// {
//     try {
//         const response = await axios.get(downloadfiles_url+"/"+id,setAuthorizationHeader());
//         return response;
//     }
//     catch (error) {
//         return error.response;
        
//     }
// }

export const deleteFile=async (id)=>
{
    try {
        const response = await axios.delete(deletefile_url+"/"+id,setAuthorizationHeader());
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const downloadFiles=async (id,key)=>{

    try{
    const response=await axios.request({
        url:downloadfiles_url+"/"+id,
        method:"POST",
        headers:setAuthorizationHeader().headers,
        data: {
            key:key
          },
        responseType: 'blob'
        })
    return response
    }
    catch (error) {
        return error.response;
    }
}