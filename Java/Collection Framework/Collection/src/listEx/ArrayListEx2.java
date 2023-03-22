package listEx;
import java.util.ArrayList;

import java.util.Iterator;

public class ArrayListEx2 {
  public static void main(String args[])
  {
	  ArrayList al=new ArrayList();
	  al.add(10);
	  al.add(20);
	  al.add(5);
	  al.add(50);
	  al.add(30);
	  System.out.println(al);
	  
	  /*for(int i=0;i<=al.size()-1;i++)
	  {
		  System.out.println(al.get(i));
	  }
	  */
	  for(Object value:al) {
		  System.out.println(value);
	  }
	  Iterator itr=al.iterator();
	  while(itr.hasNext()) {
		  System.out.println(itr.next());
	  }
  }
}
