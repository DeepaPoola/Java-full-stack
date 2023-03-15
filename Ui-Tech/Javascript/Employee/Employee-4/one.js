var employees=[{id:10,name:"Sunny",salary:1000},{id:20,name:"deepa",salary:2000},{id:30,name:"Poola",salary:3000}]
function displayData(){
    let row=" "
    for(emp of employees)
    {
        row=row+`<tr>
                 <td>${emp.id}</td>
                 <td>${emp.name}</td>
                 <td>${emp.salary}</td>
                 </tr>`
    }
    document.getElementById('me').innerHTML=row
}