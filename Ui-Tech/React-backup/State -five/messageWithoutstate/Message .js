import React from 'react'
class Message extends React.Component{
    message="Hello"
    gmHandler=()=>{
        console.log("Test case 123")
        this.message="GM"
        console.log(this.message)
        this.forceUpdate()
    }
    render(){
        return <>
           <h2>State Component</h2>
           <hr/>
           <h2>Message:{this.message}</h2>
           <button onClick={this.gmHandler}>GM</button>
        </>
    }
}
export default Message