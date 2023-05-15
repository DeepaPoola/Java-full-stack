import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {gmAction,gnAction} from '../Redux/Message/message.action'
let Message=()=>{
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
       return state.message
    })
    let gmHandler=()=>{
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