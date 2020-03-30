import {ACTIONS} from'./action'
const userReducer=(state=[],action)=>
{
console.log("user action",action);
        switch (action.type) {
            case ACTIONS.USER_INIT:
              console.log("user action init",action);
              return action.data
            case ACTIONS.USER_ERROR:
              return action.data
            case ACTIONS.EMT_STORE:
              return []
            default: // if none of the above matches, code comes here
            return state
          }
    
}


export default userReducer;