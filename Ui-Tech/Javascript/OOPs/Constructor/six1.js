const Address=require('./six')
class Credit{
    constructor(c_id,c_name,c_loc)
    { 
        console.log("Credit constructor")
        this.c_id=c_id
        this.c_name=c_name
        this.c_loc=c_loc
    }
}
let c1=new Credit(30,"Nallapu","AP",new Address(40,"Poola",3000,"Pune"))
console.log(c1)

