/*class Account{
    bal=500
    id
    name;
    salary;
    constructor(a,b,c)
    {
        this.id=a
        this.name=b
        this.salary=c
    }
}
let c=new Account(10,"Sunny",1000)
let c1=new Account(20,"Deepa",2000)
console.log(c)
console.log(c1)*/
class Account {
    min_Bal = 500;
    /*  acc_Id;
     name; */
    constructor(a, b) {
        this.acc_Id = a;
        this.name = b;
    }
}
let c1 = new Account(101, "Rahul Gandhi")
let c2 = new Account(102, "Sonia Gandhi")
console.log(c1);
console.log(c2);