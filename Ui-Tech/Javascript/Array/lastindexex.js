var numbers=[10,20,30,40,50]
for(var i=0;i<=numbers.length;i++)
{
    if (i == numbers.length) {
    console.log(`Last index is ${i - 1}`);
    }
}
console.log(numbers.lastIndexOf(numbers[numbers.length-1]))
console.log(numbers.indexOf(50))
console.log(numbers[numbers.length - 2])