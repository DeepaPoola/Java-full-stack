enum Gender{
    MALE,FEMALE,OTHER;
    }
    public class Demo{
    public static  void main(String args[]){
        Gender g = Gender.FEMALE;
        switch(g){
            case MALE:
                System.out.println("Male Constant Value");	
                break;
            case FEMALE:
                System.out.println("FeMale Constant Value");
                break;
            default:
                System.out.println("Other Constant Value");
                break;
        }
    }
    }
    //swtich - allowed value - byte, short, Char, Integer and enum, String
