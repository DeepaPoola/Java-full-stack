class Account{
    bal=500
    constructor(id,name,salary)
    {
        this.id=id
        this.name=name
        this.salary=salary
    }
    open_Account()
    {
        console.log(`Employee name: ${this.name} and Salary:${this.salary}`)
    }
}
let c=new Account(10,"Sunny",1000)
let c1=new Account(20,"Deepa",2000)
console.log(c)
c.open_Account()
console.log(c1)
c1.open_Account()