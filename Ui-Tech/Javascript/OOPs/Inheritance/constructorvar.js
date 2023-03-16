class Account{
    bal=100
    constructor(id,name){
     console.log("Account parent constructor")
     this.id=id
     this.name=name
    }
}
class savings_Account extends Account{
    constructor(id,name,amount){
        super(id,name)
        console.log("savings_Account constructor")
        this.amount=amount
    }
}
class current_Account extends Account{
    constructor(){
        super()
        console.log("current_Account constructor")
    }
}
let c1=new savings_Account(10,"Deepa",1000)
console.log(c1)
let c2=new current_Account(20,"sunny",2000)