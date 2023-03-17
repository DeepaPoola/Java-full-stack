const bcrypt =require('bcryptjs')//ES5
let user = { name: 'Rahul', email: "rahul@gmail.com", password: "Hello", cc: "12345678" }
let salt=bcrypt.genSaltSync(10)
let newPassword=bcrypt.hashSync(user.password,salt)
let newCC=bcrypt.hashSync(user.cc,salt)
console.log(newCC)
console.log(newPassword)

let new_User={...user,password:newPassword,cc:newCC}
console.log(user);
console.log(new_User);

let flag=bcrypt.compareSync("Hello",new_User.password)
if(flag){
    console.log("Login successfully")
}
else{
    console.log("Login fail")
}
//how to convert user sensitive data to hashed format?

//In JS , with help of bcryptJS