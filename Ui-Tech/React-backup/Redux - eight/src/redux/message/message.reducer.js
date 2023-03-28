import {GM,GN} from '../message/message.action'
let initialState={
    message:"Hello"
}
let messageReducer=(state=initialState,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type){
        case GM:
            //return {message:action}
            return {message:"Good Morning"}
         case GN:
            return {message:"Good night"}
        default:
            return state
    }

}
export {messageReducer}