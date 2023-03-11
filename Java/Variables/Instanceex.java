class Instanceex{
	int id;
	String name;
	boolean flag;
	static String org_Name;
	public static void main(String[] args){
	  //let d1 = new Demo(); //Javascript
		Instanceex d = new Instanceex(); //Java
		System.out.println(d.id);  // 0
		System.out.println(d.name);//null
		System.out.println(d.flag);//false
		System.out.println(org_Name);//null
		
	}

}
//for instance variables and Static variable, initilization is not requrired explicitly,
//your JVM will provide default values 
