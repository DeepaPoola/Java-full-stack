class Local{

	public void m1(){
		int i=10;//local variable
		System.out.println(i);
	}
	public static void main(String[] args){	
		Local l = new Local();
		l.m1();
		
	}
}
