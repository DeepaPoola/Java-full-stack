//fibonocci series
var f1=0
var f2=1
var f3
var n=17
var i=1
console.log(f1)
  console.log(f2)
while(i<=n-2)
{
  
  f3=f1+f2
  console.log(f3)
  f1=f2
  f2=f3
  i++
}