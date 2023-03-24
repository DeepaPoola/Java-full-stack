import React from 'react'
class Message extends React.Component{
    state={
        message:"Hello"
    }
   
    
    gmHandler=()=>{
       
        this.setState({message:"Good Morning"})
    }
    gaHandler=()=>{
        this.setState({message:"Good Afternoon"})
    }
    render(){
        return <>
           <h2>State Component</h2>
           <hr/>
           <h2>Message:{this.state.message}</h2>
           <button onClick={this.gmHandler}>GM</button>
           <button onClick={this.gaHandler}>GA</button>
        </>
    }
}
export default Message