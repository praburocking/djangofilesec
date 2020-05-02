import { ACTIONS } from "./action";

const licenseReducer=(state=[],action)=>
{

        if(action.type===ACTIONS.LICENSE_INIT)
        {
        console.log("action",action);
        return action.data
        }
        else if(action.type===ACTIONS.LICENSE_EMPT)
        {
            return []
        }
        else{
            return state
        }
}


export default licenseReducer;