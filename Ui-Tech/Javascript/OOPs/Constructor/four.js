class Account{
    bal=500
    
    constructor(id,name,salary)
    {
        this.id=id
        this.name=name
        this.salary=salary
    }
}
let c=new Account(10,"Sunny",1000)
let c1=new Account(20,"Deepa",2000)
console.log(c)
console.log(c1)
//constructor-to initialize object values