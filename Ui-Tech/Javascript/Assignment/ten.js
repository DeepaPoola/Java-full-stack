//reverse number
var i=456
var rem
var sum=0
while(i>0)
{
    rem=i%10
    sum=sum*10+rem
    i=parseInt(i/10)
}
console.log(sum)

