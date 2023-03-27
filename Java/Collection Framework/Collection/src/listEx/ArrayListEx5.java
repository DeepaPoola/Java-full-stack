package listEx;
//print second highest number
import java.util.ArrayList;
import java.util.Collections;

public class ArrayListEx5 {

	public static void main(String[] args) {
		int[] numbers = {65,72,87,24,34,34,72,99};
		ArrayList al = new ArrayList();
		for(int number:numbers) {
			al.add(number);
		}
		System.out.println(al);
		Collections.sort(al);
		System.out.println(al);
		System.out.println(al.get(al.size()-2));
	}

}