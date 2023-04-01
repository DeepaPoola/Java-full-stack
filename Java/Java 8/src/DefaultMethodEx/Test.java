package DefaultMethodEx;

interface I{
	public abstract void m1();
	public abstract void m2();
	//public abstract void m3();
	default void m3() {
		System.out.println("Interface Default Method");
	}
}

public class Test implements I {

	public static void main(String[] args) {
		Test t = new Test();
		t.m3();

	}

	@Override
	public void m1() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void m2() {
		// TODO Auto-generated method stub
		
	}
}