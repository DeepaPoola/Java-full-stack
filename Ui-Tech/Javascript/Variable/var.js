var a=10;
function add(){
   var a=20;//if we doesn't give var here then for sub and add functions will get 20 only.If we give var then 20 for add and 10 for sub
    console.log(a);
}
function sub()
{
    console.log(a)
}
add()
sub()