var a=[10,20,30,40,50]
for(b of a)
{
    console.log(b)
}
console.log(a.length)
for(var i=0;i<=a.length;i++)
{
    if(i==a.length)
    {
        console.log(`Last index is ${i-1}`)
    }
}
console.log(a.lastIndexOf(a[a.length-1]))
console.log(a.indexOf(50))
console.log(a[a.length-2])