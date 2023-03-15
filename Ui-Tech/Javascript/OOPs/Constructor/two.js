class Account{
    bal=500
    constructor(){
        console.log("Executed automatically")
    }
    open_Account(){
        console.log("Opened successfully")
        console.log("min balance:",this.bal)
    }
}
let c=new Account(100,"Rahul gandi")
let c1=new Account("Deepa")
console.log(c.bal)
c.open_Account()