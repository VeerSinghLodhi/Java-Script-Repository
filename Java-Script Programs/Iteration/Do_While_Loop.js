
/*
    -------------------- Do While Loop -----------------------

     • The do-while loop ensures that the
       code block inside the loop is executed
       at least once before checking the
       condition.
     • Similar to while, but guarantees at
       least one execution of the code block.

    Syntax:

    do{
        Code to be executed
    }while(condition);

*/

//Example 1

let x = 0;
do {
    console.log("Value of X "+x);
    x++;
} while (x < 3);

console.log("=======================================");
//Example 2
    sum=0;
    i=1
    do{
        sum+=i;
        i++;
    }while(i<=100);
    console.log("Sum is "+sum);

console.log("=======================================");

//Example 3
// Print Hello World!! 50 Times
    i=1;
    do{
        console.log("Hello World!!");
        i++;
    }while(i<=50);

console.log("=======================================");
