import React,{useState} from 'react'
let Message=()=>{
    //let msg="Hello"
    let [variable ,setVariable]=useState("Hello")
    let gnHandler=()=>{
      setVariable("GN")
    }
    return <div>
        
        <h2>Message:{variable}</h2>
        <button onClick={()=>{
            setVariable("GM")
        }}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message;