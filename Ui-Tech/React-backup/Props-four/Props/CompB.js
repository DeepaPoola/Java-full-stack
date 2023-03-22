import React,{Component} from 'react'
class CompB extends Component{
    render(){
        return <>
          <h2>CompB component</h2>
          <pre>{JSON.stringify(this.props)}</pre>
        </>
    }
}
export default CompB