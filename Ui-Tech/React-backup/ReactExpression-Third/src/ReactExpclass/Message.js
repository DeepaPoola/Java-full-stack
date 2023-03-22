import React,{Component} from 'react'
class Message extends Component{
    message="Gd mrng"
    name="Deepa"
    emp = { id: 101, name: "Rahul", salary: 45000 }
    render(){
        return <div>
        <h2>Message class Component</h2>
        <hr/>
        <h2>msg:{this.message}</h2>
        <h2>name:{this.name}</h2>
        <h3>id:{this.emp.id} and salary:{this.emp.salary}</h3>
        </div>
    }
}
export default Message;

//Component - render the Ui(reusable UI code)
//in class if we want to call ui we have to override render method from react and write return
//class properties can be read by this.property