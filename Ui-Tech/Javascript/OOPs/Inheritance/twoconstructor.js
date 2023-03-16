class Bank{
    constructor(){
        console.log("Bank constructor")
    }
    get_Details(){
        console.log("Bank method")
    }
    bank_Details(){
        console.log("Bank details method")
    }
    get_Account(){
        console.log("bank account method")
    }
}
class Account extends Bank{
    constructor(){
        super()//is used to call the parent class constructor
        console.log("Account constructor")
    }
    get_Details(){
        super.get_Details()
        super.bank_Details()
        console.log("Account method")
    }
    details(){
        super.bank_Details()
        console.log("Account details method") 
    }
    /*get_Account(){
        console.log("account account()method")//it is overrind parent method
    }*/
}
let a=new Account()
a.get_Details()
a.details()
a.get_Account()