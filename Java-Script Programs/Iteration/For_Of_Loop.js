

/*
    ------------------- For...of Loop ----------------------------

    • The for...of loop iterates over the values of an iterable object (like an array or string).

    Syntax:
    for (const value of iterable)
    {
        code to be executed 
    }
*/

// Example 1
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(`Number: ${num}`);
}

// Example 2

const name = "Hello";
for (const char of name) {
    console.log(char);
}