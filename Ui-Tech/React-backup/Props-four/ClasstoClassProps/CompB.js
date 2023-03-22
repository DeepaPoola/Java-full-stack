import React,{Component} from 'react'
class CompB extends Component{
    render(){
        return <>
          <h2>CompB component</h2>
          <pre>{JSON.stringify(this.props)}</pre>
          <h2>id={this.props.id}</h2>
          <h2>sal:{this.props.sal}</h2>
          <h2>ename:{this.props.ename}</h2>

        </>
    }
}
export default CompB