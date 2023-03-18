let calculate = (a,b,op)=>{
  let result;
  if(op=="sum")
  {
    result=a+b
  }
  if(op=="multi")
  {
    result=a*b
  }
  return result
}

let res=calculate(10,20,"sum")
console.log(res)
let res1=calculate(30,40,"multi")
console.log(res1)