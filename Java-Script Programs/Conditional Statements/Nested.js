

/*
    Nested Conditionals
    Nested conditionals involve placing one or more conditional statements inside another.
*/

//Example

num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else {
    console.log("The number is not positive.");
}
