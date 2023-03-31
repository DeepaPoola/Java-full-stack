package ExceptionEx;

public class Test {
	public static void main(String[] args) {
		System.out.println("Hello,GM");
		
		try {
			System.out.println(10/0);		
		}
		catch(Exception e) {
			System.out.println(e);
		}

		System.out.println("Hello,GN");
		}
}
