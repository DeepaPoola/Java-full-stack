package QueueEx;

import java.util.Iterator;
import java.util.PriorityQueue;

public class PriorityQEx {

	public static void main(String[] args) {
		PriorityQueue pq = new PriorityQueue(); //empty queue
		pq.add(10);
		pq.add(20);
		pq.add(50);
		pq.add(0);
		pq.add(4);
		
		System.out.println(pq);
//		System.out.println(pq.poll());
//		System.out.println(pq);
//		for(Object obj:pq) {
//			System.out.println(obj);
//		}
		Iterator itr =pq.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		
	}
    
}

//add and offer - adding elemetns 
//element and peek - reading elements 
//remove and poll - removing element from queue
