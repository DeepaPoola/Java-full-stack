package FileHandlingEx;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderEx {
	public static void main(String[] args) throws IOException {
		FileReader r = new FileReader("g:\\test.txt");
		
		BufferedReader br = new BufferedReader(r);
		String line=br.readLine();
		while(line!=null) {
			System.out.println(line);
			line = br.readLine();
		}
		}
}
