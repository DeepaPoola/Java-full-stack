let emp = {
    id: 101,
    first_Name: "Rahul",
    last_Name: "Gandhi",
    email: "Rahul@tcs.com",
    loc: ['Bangalore', 'Wayanad'],
    sal: 45000,
    designation: "Project Manager"
}
for(key in emp){
    console.log(emp[key])
    console.log(key)
}