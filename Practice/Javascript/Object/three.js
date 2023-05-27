var employee=[{id:10,name:"Sunny",salary:10000},{id:20,name:"Deepa",salary:20000}]
for(emp of employee)
{
    console.log(emp)
}
//object is empty or not
var emp ={}
if(Object.keys(emp).length==0)
{
  console.log("Empty Object")
}
else{
    console.log("Not empty")
}

Object.keys(emp).length==0?console.log("Empty"):console.log("Not empty")