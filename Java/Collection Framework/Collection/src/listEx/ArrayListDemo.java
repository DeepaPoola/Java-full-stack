package listEx;
import java.util.ArrayList;
import java.util.Collections;
public class ArrayListDemo {
	

	    public static void main(String args[])
	    {
	    	ArrayList<Integer> al1 = new ArrayList<Integer>();
	    	al1.add(50);
	    	al1.add(15);
	    	al1.add(75);
	    	al1.add(15);
	    	System.out.println(al1);
	    
	    	ArrayList al3 = new ArrayList();//intial capacity 10 and allowed heretegeneous elements
	        al3.add(10);
	        al3.add(10);
	        al3.add(null);
	        al3.add("Rahul");
	        al3.add(true);
	        System.out.println(al3);
	        Collections.sort(al1);
	        System.out.println(al1);
	    }
	}

