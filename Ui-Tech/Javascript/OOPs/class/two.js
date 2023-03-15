class Bank{
    bal=500
    account_Bal(){
        console.log("check balance")
    }
    open_Account(){
        console.log("Opened account successfully") 
    }
}
let c=new Bank()
console.log(c)
console.log(c.bal)
c.account_Bal();