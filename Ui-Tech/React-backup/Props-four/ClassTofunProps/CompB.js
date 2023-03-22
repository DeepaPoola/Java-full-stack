let CompB=(props)=>{
  return <>
    <h2>CompB Function Props</h2>
    <pre>{JSON.stringify(props)}</pre>
    <h2>id:{props.id}</h2>
    <h2>salary:{props.sal}</h2>
    <h2>ename:{props.ename}</h2>
  </>
}
export default CompB