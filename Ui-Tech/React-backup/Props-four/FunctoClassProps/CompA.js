import CompB from './CompB'
let CompA=()=>{
   var  id=10
    //var name="Deepa"
    var emp=[{id:101,name:"Sd",salary:1000},{id:102,name:"AK",salary:2000}]
   var  user={ename:"me",esal:3000}
    return <>
       <h2>ClassA Function Props</h2>
       <hr/>
       <CompB id={id} name={emp[0].name} esal={user.esal}/>
    </>
}
export default CompA