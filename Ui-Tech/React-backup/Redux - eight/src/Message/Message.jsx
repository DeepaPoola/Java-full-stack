import React from 'react'
import {gmAction,gnAction} from '../redux/message/message.action'
import {useDispatch,useSelector} from 'react-redux'
let Message =()=>{
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
        return state.message
    })
    //let msg="Hello"
    let gmHandler=()=>{
        //dispatch an action
       dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction())
     }
    return <div>
        <pre>{JSON.stringify(message)}</pre>
        <h2>Message:{message.message}</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message