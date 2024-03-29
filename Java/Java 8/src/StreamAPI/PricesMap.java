package StreamAPI;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class PricesMap {
	public static void main(String[] args) {
		ArrayList<Integer> prices =new ArrayList<Integer>();
		prices.add(399);
		prices.add(199);
		prices.add(299);
		prices.add(99);
		prices.add(599);
		System.out.println(prices);
		//configuring stream and processing stream
		//Predicate<Integer> p = (price)->{return price<200;};
		List newPrices=prices.stream().map(price->price+10).collect(Collectors.toList());
		System.out.println(newPrices);
	}
}
