let a=10;
function add(){
   //let a=20;
    console.log(a);
}
//let a=30;//here error will get for let because it already declared above
function sub()
{
    //a=40
    console.log(a)
}
add()
sub()
//var - if you want to reassign values(available through out the function scope)
//let - doesnt allow re-declare(block scope)