let marks=[10,20,30,40,50]
//map method - iterate your array and execute your function.
marks.map((mark)=>{
   console.log(mark)
})

let new_Marks=marks.map((mark)=>{
    return mark+1
})
console.log(new_Marks)
//map method returns new array

