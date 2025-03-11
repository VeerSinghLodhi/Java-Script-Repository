

/*
    ------------------- For...in loop ----------------------------

     • The for...in loop iterates over the
       properties of an object.
     • Iterates over the enumerable
       properties of an object.

    Syntax:

    for(const property in object)
    {
        Code to be executed
    }
*/

// Example 1
const numbers=[1,2,3,4,5,6,7,8,9,10];
    for(let num of numbers)
    {
        console.log(`Number: ${num}`);
    }

console.log("======================================");
// Example 2

const person={
    name:"Veer",
    age:19,
    isEngineer:true
}
for(let p1 in person)
{
    console.log(`${p1}: ${person[p1]}`);
}
