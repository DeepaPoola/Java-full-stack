import React from 'react'
class CompB extends React.Component{
  render(){
    return <>
      <h2>CompB class Props</h2>
      <hr/>
      <pre>{JSON.stringify(this.props)}</pre>
      <h2>id:{this.props.id}</h2>
      <h2>name:{this.props.name}</h2>
      <h2>esal:{this.props.esal}</h2>
    </>
  }
}
export default CompB