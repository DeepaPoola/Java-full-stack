//Armstrong number is a number that is equal to the sum of cubes of its digits 
var i=153
var s=0,r=0,n
n=i
while(i>0)
{
    r=i%10
    s=s+r*r*r
    i=parseInt(i/10)
}
if(s==n)
{
    console.log("armstrong")
    console.log(s)
}
else
{
    console.log("not armstrong")
}
