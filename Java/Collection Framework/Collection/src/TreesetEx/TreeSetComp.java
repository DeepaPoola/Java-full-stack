package TreesetEx;

import java.util.Comparator;
import java.util.TreeSet;

public class TreeSetComp {

	public static void main(String[] args) {
		//TreeSet t = new TreeSet();
		TreeSet t = new TreeSet(new MyComp());
		t.add("Sonia");
		t.add("Rahul");
		t.add("Priyanka");
		System.out.println(t);
		String s ="Hello";
	}
}

class MyComp implements Comparator{

	
	 public int compare(Object o1, Object o2) {
		 System.out.println(o1);
		 String s1 = (String) o1;
		 String s2 = (String) o2;
		 return s2.compareTo(s1);	
	 }
}

