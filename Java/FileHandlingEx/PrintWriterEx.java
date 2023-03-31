package FileHandlingEx;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class PrintWriterEx {
	public static void main(String[] args)  throws IOException{
		FileWriter fw = new FileWriter("g:\\test.txt");
		PrintWriter pw = new PrintWriter(fw);
		pw.write(99);
		//pw.write(true);
		pw.print(99);
		pw.print(true);
		pw.print("Hello,GM");
		pw.flush();
		pw.close();

	}
}
