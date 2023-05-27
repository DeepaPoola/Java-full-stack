var employee={id:10,name:"Deepa",salary:10000}
console.log(employee)
employee.id=20
console.log(employee)
console.log(Object.keys(employee))//keys will be printed
console.log(Object.values(employee))//values will be printed
for(emp in employee)
{
   // console.log(emp) //print keys
    console.log(employee[emp])
}
console.log(Object.entries(employee))