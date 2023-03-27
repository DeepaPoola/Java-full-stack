package TreesetEx;

import java.util.TreeSet;

public class TreesetEx3 {

	public static void main(String[] args) {
		TreeSet ts = new TreeSet();//default natural sorting order applied
		ts.add(null);
		System.out.println(ts);
	}

}
//null insertion not allowed