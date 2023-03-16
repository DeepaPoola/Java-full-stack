class Bank{
    open_Account(){
        console.log("opened Succesfully")
    }
}
class Account extends Bank{
    deposit(){
        console.log("deposited amount")
    }
}
let c=new Account()
c.open_Account()
c.deposit()