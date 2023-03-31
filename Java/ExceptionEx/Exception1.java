package ExceptionEx;

public class Exception1 {
	public static void main(String args[])
	{
   getData(null);
	}
	public static void getData(String s) {
		System.out.println(s.toLowerCase());
	}
   
}
