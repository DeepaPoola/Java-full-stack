let Message=()=>{
    var id=10
    var name="Deepa"
    var emp = { id: 101, name: "Rahul", salary: 45000 }
    return <div>
        <h2>Message Function Component</h2>
        <hr/>
        <h2>id:{id}</h2>
        <h3>Name:{name}</h3>
        <h3>id:{emp.id} and sal:{emp.salary}</h3>
    </div>
}
export default Message;