enum Gender{
	MALE,FEMALE,OTHER,NEWGENDER;
	Gender(){
		System.out.println("constructor");
	}
} //order of constant
class EnumDemo{
public static  void main(String[] args){
		Gender[] g  = Gender.values();
		for(Gender g1:g){
		System.out.println(g1.ordinal());
		}
	
	}
}
//swtich - allowed value - byte, short, Char, Integer and enum, String