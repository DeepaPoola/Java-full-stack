let employees=[{id:10,name:"sunny",salary:1000},{id:20,name:"Deepa",salary:2000}]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },3000)
}

let getEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        employees.forEach((employee)=>{
          rows+= `<tr>
          <td>${employee.id}</td>   
          <td>${employee.name}</td>   
          <td>${employee.salary}</td>   
        </tr>`
        })
        document.getElementById('data').innerHTML=rows
    },1000)

}

createEmployee({id:30,name:"Nallapu",salary:3000},getEmployee)

// while invoking a function, passing a function as argument to another function - callback