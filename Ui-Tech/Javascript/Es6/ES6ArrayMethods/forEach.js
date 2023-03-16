let marks=[10,20,30,40,50]
//forEach method - iterate your array and execute your function.
marks.forEach((mark)=>{
   console.log(mark)
})

let new_Marks=marks.forEach((mark)=>{
    return mark+1
})
console.log(new_Marks)
////forEach method returns undefined