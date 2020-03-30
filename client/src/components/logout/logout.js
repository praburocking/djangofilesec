import React,{useEffect} from 'react'
import {signout} from '../../services/connectToServer'
import {deleteAuthorizationCookies} from '../../util/common_utils'
import {withRouter} from 'react-router-dom'
import Typography from 'antd/es/typography'
import './logout.css'
import {emtStores} from '../../store/action'
import {connect} from 'react-redux'


const LogOut=(props)=>
{
let exception=false;

    useEffect( ()=>{
        const action=async()=>{
       const signOutRes=await signout();
       if([200,204].includes(signOutRes.status))
       {
        props.emtStores()
        deleteAuthorizationCookies();
        props.history.push("/")
       }
       else
       {
            exception=true;
       }
    }
    action()
    });

return(<div>

    {!exception && <Typography.Title className="center blink_me"> signing you out !!!</Typography.Title> }
    {exception && <><Typography.Title> ohh!!, we encountered a exception while signing you out</Typography.Title>  <Typography.Paragraph>If the Exception persist please contact the support</Typography.Paragraph></>}
</div>)
}


export default withRouter(connect(null,{emtStores})(LogOut));