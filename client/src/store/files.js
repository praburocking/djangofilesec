import { ACTIONS } from "./action";

const fileReducer=(state=[],action)=>
{

        if(action.type===ACTIONS.FILES_INIT)
        {
        console.log("action",action);
        return action.data
        }
        else if(action.type===ACTIONS.FILES_ADD)
        {
            return state.concat(action.data);
        }
        else if(action.type===ACTIONS.FILES_DEL)
        {      
            var newstate=state.filter(ele=>{if(ele.id!==action.data){return true}else{return false}})
            return newstate
        }
        else if(action.type===ACTIONS.EMT_STORE)
        {
            return []
        }
        else{
            return state
        }
}


export default fileReducer;