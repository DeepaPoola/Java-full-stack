package TreesetEx;

import java.util.SortedSet;
import java.util.TreeSet;
//find second highest salary
//find second higherst number
public class TreesetEx4 {

	public static void main(String[] args) {
		SortedSet ts = new TreeSet();
		int[] salary = {65000,72000,87000,24000,34000,34000,72000,99009};
		
		for(int sal:salary) {
			ts.add(sal);
		}
		System.out.println(ts);
		//System.out.println(ts.first());
		ts.remove(ts.last());
		System.out.println(ts);
		System.out.println(ts.last());
		ts.remove(ts.first());
		System.out.println(ts.first());
		
		
	}

}
