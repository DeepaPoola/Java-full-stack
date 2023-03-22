let CompB=(props)=>{
  return <>
    <h2>CompB Function Props</h2>
    <pre>{JSON.stringify(props)}</pre>
    <h2>id:{props.id}</h2>
    <h2>salary:{props.name}</h2>
    <h2>ename:{props.esal}</h2>
  </>
}
export default CompB