package LambdaEx;

public class Demo {
  public static void main(String args[])
  {
	  String ename = "Rahul Gandhi";
		
		Runnable r1 = ()->{ System.out.println(ename);};
		r1.run();
  }
}
