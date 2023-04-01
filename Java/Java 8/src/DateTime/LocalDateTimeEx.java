package DateTime;

import java.time.LocalDateTime;
import java.time.Month;

public class LocalDateTimeEx {
 public static void main(String args[])
 {
	 LocalDateTime dt=LocalDateTime.now();
	 LocalDateTime dt1= LocalDateTime.of(2015,Month.JULY,11,10,10,10,552225);
	 System.out.println(dt);
	 System.out.println(dt1);
 }
}
