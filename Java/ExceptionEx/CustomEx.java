package ExceptionEx;

class MoneyException extends RuntimeException{
	MoneyException(String s){
		super(s);
	}
}

public class CustomEx {
  public static void main(String args[]) throws MoneyException
  {
	  int money = 900;
		if(money > 600) {
			System.out.println("Go to Movie");
		}
		else {
			throw new MoneyException("Please Earn Money");
		}
  }
}
