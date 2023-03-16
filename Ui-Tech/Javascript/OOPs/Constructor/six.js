class Address{
   constructor(id,name,salary,loc){
    console.log("Address constructor")
      this.id=id
      this.name=name
      this.salary=salary
      this.loc=loc
   } 
}
class savings_Account{
    constructor(id,name,salary,address)
    {
        console.log("savings_Account constructor")
        this.id=id//this keyword points to current object and used to access class properties
        this.name=name
        this.salary=salary
        this.address=address
    }
}
let c=new savings_Account(10,"Sunny",1000,new Address(20,"Deepa",2000,"Hyderabad"))//one object can hold another object
console.log(c)

module.exports=Address