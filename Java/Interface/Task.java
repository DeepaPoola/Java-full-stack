interface Task{
    public abstract	void doTask();
        void getTask();
    }
    class Test implements Task{
    public void doTask(){
    System.out.println("doTask()");
    }
    public void getTask(){
    System.out.println("getTask()");
    }
    public static void main(String[] args){
        Test t1 = new Test();
        t1.doTask();
        t1.getTask();
    }
    }
//execute by child class name