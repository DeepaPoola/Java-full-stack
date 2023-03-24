import React from 'react'
import employees from './Data'
class Employee extends React.Component{
   constructor(props){
    super(props)
    console.log("Executes first")
   }
   render(){
    return <div className="container mt-5">
       <div className="row">
          <div className="col-md-8">
           <table className="table table-hover">
              <thead className="bg-primary text-white">
                <tr>
                    <th>ID</th>
                    <th>First_name</th>
                    <th>Last_name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                
                    {
                        employees.map((emp)=>{
                         return <tr key={emp.id}>
                              <td>{emp.id}</td>
                              <td>{emp.first_name}</td>
                              <td>{emp.last_name}</td>
                              <td>{emp.email}</td>
                              <td>{emp.gender}</td>
                         </tr>
                        })
                    }
                
              </tbody>
           </table>
          </div>
       </div>
    </div>
   }
}
export default Employee