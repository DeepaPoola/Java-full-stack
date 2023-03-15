class Bank{
    bal=500
    constructor(){
      console.log("Executed automatically")
    }
    open_Account(){
        console.log("Opened account successfully")
    }
}
let c=new Bank()
console.log(c.bal)
c.open_Account()