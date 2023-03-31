package ExceptionEx;

public class Demo {
   public static void main(String args[])
   {
	 try {
		 System.out.println(10/0);
	 }
	 catch(Exception e)
	 {
		 e.printStackTrace();
		 //System.out.println(e);
		 System.out.println(e.getMessage());	
	 }
	 finally {
		 System.out.println("Hello");
	 }
   }
}

//checked exception - checked by compiler(means involved third party i.e., file,invoking app)
//unchecked exception - unchecked by compiler
