var a=[[1,2],[3,4]]
var sum=0
for(var i of a)
{
    for(var j of i)
    {
  console.log(j)
  sum=sum+j
    }
}
console.log(sum)