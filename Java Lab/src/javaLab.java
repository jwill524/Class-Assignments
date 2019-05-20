public class javaLab {
    public static void main(String[] args){




       //Lab Step 1
        int firstInt = 6;
        int secondInt = 20;
        int thirdInt;
        float firstFloat = 4.4f;
        boolean isCold = false;
        double first_Double = 5.5;

        thirdInt = 12;

//        System.out.println(firstInt);
//        System.out.println(secondInt);
//        System.out.println(firstFloat);
//        System.out.println(isCold);
//        System.out.println(first_Double);


        //Lab Step 2
//        System.out.println(firstInt + secondInt);
//        System.out.println(firstInt + thirdInt);
//        System.out.println(secondInt/firstInt);
//        //System.out.println(secondInt%firstInt);
//        int newInt = firstInt+ (secondInt%firstInt);
//        newInt++;
//        System.out.println(newInt);

        //Lab Step 3
        int x = 100;
        boolean compare = x==100;
        int y = 106;
//        System.out.println(x>y);
//        System.out.println(y>x);
//        System.out.println(x>= (y-6));
//
//        int z = 92;
//        System.out.println(x<y && y<z);
//        System.out.println(y<z && x>=y);
//        System.out.println(z>(y+x) || (x-y)<z);
//        System.out.println((x<y) == !(x>y));

        //Lab Step 4
        int n = 41;

//        System.out.println(n>>1 == n/2);
//        System.out.println(n<<1 == n*2);
//        System.out.println(n>>2 == n/4);
//        System.out.println(n<<2 == n*4);



//anotherMethod();
playStrings();
    }

    //Lab Step 5
    public static void anotherMethod(){
        Integer n = 9;
        Integer x = n/2;
//        Integer bigNum = "1000";
//        if(n.compareTo(bigNum)){
//            System.out.println(x + " is half of n");
//            System.out.println(n + " is a Big Value");
//        } else{
//            System.out.println(x + " is definitely small");
//            System.out.println(n + " is Not big value");
//        }
    }

    public static void playStrings(){
        String firstName = "Jonathan";
        String lastName = new String("Williams");
        String fullName = firstName +" "+ lastName;
       // System.out.println("Hello " + firstName + lastName);
        System.out.println("The total length of Jonathan Williams is " + fullName.length());
        System.out.println("The first index of o is " + fullName.indexOf('o'));
        System.out.println("The letter at position 7 is " + fullName.charAt(7));
        System.out.println("The fullname does not contain the word son: " + fullName.contains(" son"));
        System.out.println("The last five letters of my full name is " + fullName.substring(fullName.length() - 5));
        System.out.println("True or false- fullname contains a dash: " + fullName.contains("-"));
        System.out.println("True or false- fullname contains an apostrophe : " + fullName.contains("'"));
    }
}
