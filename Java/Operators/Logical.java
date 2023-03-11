class Logical {
    public static void main(String args[])
    {
        int a=30,b=20,c=40;
        /*if(a<b&&a<c)
        {
            System.out.println(a);
        }
        else if(b<c){
        System.out.println(b);
        }
        else
        {
            System.out.println(c);
        }*/
        if(a<b||a<c)
        {
            System.out.println(a);
        }
        else if(b<c){
        System.out.println(b);
        }
        else
        {
            System.out.println(c);
        }
    }
}
