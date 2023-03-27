package QueueEx;

import java.util.PriorityQueue;

public class QueueEx1 {

	public static void main(String[] args) {
		PriorityQueue pq = new PriorityQueue();
		
		pq.add("Rahul");
		pq.add("Sonia");
		pq.add("Priyanka");
		pq.add("Arya");
		//pq.offer("Robert");
		//pq.add("Rahul@gmail.com");//Heterogenous Data Not Allowed
		System.out.println(pq);  //duplicates are allowed and insertion order maintainig
		System.out.println(pq.element());
		System.out.println(pq.peek());
	}

}