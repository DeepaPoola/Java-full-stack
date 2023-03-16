class Account{
    bal=100
    constructor(id,name){
     console.log("Account parent constructor")
     this.id=id
     this.name=name
    }
}
class savings_Account extends Account{
    bal=200//overriding by parent balance variable
    constructor(id,name,amount){
        super(id,name)
        console.log("savings_Account constructor")
        this.amount=amount
    }
    get_Bal(){
        return this.amount-this.bal;
    }
}
class current_Account extends Account{
    
    constructor(id,name,amount){
        super(id,name)
        console.log("current_Account constructor")
        this.amount=amount
    }
    get_Bal(){
        return this.amount-this.bal; 
    }
}
let c1=new savings_Account(10,"Deepa",1000)
console.log(c1)
let c2=new current_Account(20,"sunny",2000)
console.log(c2)
console.log(c1.get_Bal())
console.log(c2.get_Bal())
console.log(c2.bal)