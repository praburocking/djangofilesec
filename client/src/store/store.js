import {createStore,combineReducers} from 'redux'
import serverConfigReducer from './serverConfig'
import userReducer from './user'
import thunk from 'redux-thunk'
import fileReducer from './files'
import licenseReducer from './license'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const combine_reducer=combineReducers({

    serverConfig:serverConfigReducer,
    user:userReducer,
    files:fileReducer,
    license:licenseReducer
})


const store=createStore(combine_reducer,composeWithDevTools(applyMiddleware(thunk)));
export default store; 