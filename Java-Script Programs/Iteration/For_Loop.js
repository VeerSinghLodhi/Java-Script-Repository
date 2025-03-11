
/*
    -------------------For Loop-----------------------

    • The for loop is used when the number
      of iterations is known in advance.
    • Most common loop for iterating a
      specific number of times.

    Syntax:
        for(initialization;condition;increment/decrement)
        {
            code to be executed
        }

*/
//Example 1

    for(let i=1;i<=5;i++)
        console.log(i);

console.log("-----------------------------------------------");
//Example 2
    sum=0;
    for(let i=1;i<=100;i++)
    {
        sum+=i;
    }
    console.log("Sum is "+sum);//5050
console.log("-----------------------------------------------");

//Example 3
    const fruits=["Apple","Banana","Orange"];
    for(let i=0;i<fruits.length;i++)
        console.log(fruits[i]);
console.log("-----------------------------------------------");

//Example 4 
const color=["Red","Black","White","Teal","Pink"];
for(let i=0;i<color.length;i++)
    console.log(color[i]);
console.log("-----------------------------------------------");
