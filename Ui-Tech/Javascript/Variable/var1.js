var a=10;
function add(){
   //var a=20;//if we give var here then add will get 20 and sub will get 30
    console.log(a);
}
var a=30;//this will be override by 10 so both the functions will get 30
function sub()
{
    console.log(a)
}
add()
sub()