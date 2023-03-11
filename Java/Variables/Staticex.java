class Staticex{
    int price = 100;//instance variable
    static int discount =10; 
public static void main(String[] args){
    Staticex t1 = new Staticex();
    Staticex t2 = new Staticex();
    t2.price = 120;
    t2.discount = 11;
    System.out.println(t1.price); 
    System.out.println(t2.price);
    System.out.println(t1.discount);
    System.out.println(t2.discount); 
    System.out.println(discount); 

}

}