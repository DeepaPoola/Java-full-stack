import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
    id=10
    name="Deepa"
    emp=[{id:101,name:"Sd",salary:1000},{id:102,name:"AK",salary:2000}]
    user={ename:"me",esal:3000}
    render(){
        return <div>
            <h2>CompA class Props</h2>
            <hr/>
            <CompB id={this.id} sal={this.emp[1].salary} ename={this.user.ename}/>
          
        </div>
    }
}
export default CompA

//props - communicating between 2 components(sending data from one component to second component)