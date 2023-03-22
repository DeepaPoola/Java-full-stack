import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
    render(){
        return <div>
            <h2>CompA Props</h2>
            <hr/>
            
            <CompB one={"GE"}  Two={"GM"}/>
        </div>
    }
}
export default CompA