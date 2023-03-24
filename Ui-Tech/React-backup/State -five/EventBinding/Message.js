import React from 'react'
class Message extends React.Component{
    state={
        message:"Hello"
    }
    updateHandler=(msg)=>{
        this.setState({message:msg})
    }
    render(){
        return <div>
            <h2>Message:{this.state.message}</h2>
            <pre>{JSON.stringify(this.message)}</pre>
            <button onClick={this.updateHandler.bind(this,"GM")}>GM</button>
            <button onClick={this.updateHandler.bind(this,"GA")}>GA</button>
            <button onClick={()=>{
                this.setState({message:"GN"})
            }}>GN</button>
        </div>
    }
}
export default Message