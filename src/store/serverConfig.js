



const serverConfigReducer=(state=[],action)=>
{

    if(action.type==="CONFIG_INIT")
    return action.data

    else if(action.type==="CONFIG_ADD")
       return state.concat(action.data)
    else
        return state
}


export default serverConfigReducer;