import React from 'react'
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
}
passwordHandler=(event)=>{
    this.setState({password:event.target.value})
    console.log(event.target.value)
}
submitHandler=(event)=>{
    event.preventDefault()
    console.log(this.state)
}
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>Email</label>
                <input type="text" onChange={this.emailHandler}/>
                <br/>
                <label>Password</label>
                <input type="text" onChange={this.passwordHandler}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    }
}
export default Login