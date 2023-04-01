package StreamAPI;

import java.util.ArrayList;

public class ArrayListEx {
	public static void main(String[] args) {
		ArrayList<Integer> prices =new ArrayList<Integer>();
		prices.add(399);
		prices.add(199);
		prices.add(299);
		prices.add(99);
		prices.add(599);
		System.out.println(prices);
		
		ArrayList<Integer> newPrices =new ArrayList<Integer>();
		ArrayList<Integer> newFilteredPrices =new ArrayList<Integer>();
		
		for(Integer i :prices) {
			if (i>200) {
				newFilteredPrices.add(i);
			}
		}
		System.out.println(newFilteredPrices);
	}
}
