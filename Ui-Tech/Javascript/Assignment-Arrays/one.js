var a=[10,20,30,40,50]
console.log(a[0])
console.log(a[4])
console.log("***For Loop***")
/*for(var i=0;i<=a.length-1;i++){
    console.log(a[i])
}*/
for(var i of a)
{
    console.log(i)
}