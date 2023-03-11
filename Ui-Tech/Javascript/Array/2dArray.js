let numbers=[[1,2],[3,4]]
let sum=0;
/*for(number of numbers){
    for(a of number)
    {
    console.log(a)
    sum=sum+a
    }
}
console.log(sum)*/
for(var i=1;i<=numbers.length-1;i++)
{
    for(var j=0;j<=i;j++)
    {
        console.log(numbers[j])
      
        sum=sum+j
    }
}