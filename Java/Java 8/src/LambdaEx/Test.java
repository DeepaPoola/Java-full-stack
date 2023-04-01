package LambdaEx;

interface I{
	public  void m1();
}
public class Test implements I {
	  @Override
	  public void m1() {
	  	// TODO Auto-generated method stub
	  	System.out.println("m1 method");
	  }
	  
  public static void main(String args[])
  {
	  I i=()->{System.out.println("Test class method");};
	  i.m1();
	 
  }


} 
