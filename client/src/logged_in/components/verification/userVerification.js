import React{useState,useEffect} from 'react';

import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core';







const UserVerification=()=> {



 const [isVerified,setVerified]=useState(true);
    const [status,setStatus]=useState("Verifying User...");

    const verifyuser=async(data)=>
    {   
        console.log("data==> ",data);
        if(props.token && props.type)
        {   let token=props.token;
            let type=props.type;
            console.log("token ==> ",token);
           const verifyUserResp=await verifyUser(token,type,data);
           if(!constants.errorResponse.includes (verifyUserResp.status))
           {
            message.success("User verified redirecting to Login");
            setVerified(true);
            props.history.push('/login');
            setStatus("Verified, Please login!!");
           }
           else
           {   console.log("eriyuser ",verifyUserResp.data)
               if(verifyUserResp.data.message)
               {
                message.error(verifyUserResp.data.message);
                setStatus(verifyUserResp.data.message)
               }
               else
               {
                   message.error("Exception while verifying user")
                   setStatus("Exception while verifying user")
               }
               
           }
        }
        else
        {
            message.error("invalid token redirecting to home page");
            props.history.push('/')
        }
    }


  return (
    <Container maxWidth="sm"  minHeight="700px">
    <Button variant="contained" color="primary">
  Primary
</Button>
     </Container>
  );
}

export default UserVerification;