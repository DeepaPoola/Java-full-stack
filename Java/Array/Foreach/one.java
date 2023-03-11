class one {
    public static void main(String args[])
    {
        int[] a={10,20,30,40,50};
        int total=0;
        System.out.println(a.length);
        //int []a;
        //int a[]=new int[5]
        /*for(int i=0;i<=a.length-1;i++)
        {
            //System.out.println(i);//print index values
            System.out.println(a[i]);
            total=total+a[i];
        }*/
        for(int i:a){
            System.out.println(i);
            total=total+i;
        }
        System.out.println(total);
    }
}
