class Arraylen{
    public static void main(String[] rajni){
        int[] size = {38,40,42,44,46,48};
        //indexing    0  1   2  3  4  5
        String name="Rahul Gandhi";
        System.out.println(size.length); //iterative
        System.out.println(name.length());
        System.out.println("*** Reading Array Values*******");
        
        for(int i=0; i<=size.length-1;i++){
        System.out.println(size[i]);
        }
        for(int s :size){
        System.out.println(s);
        }
        
    }
    }
