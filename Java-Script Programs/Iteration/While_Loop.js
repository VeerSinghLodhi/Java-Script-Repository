

/*
    -----------------------While Loop---------------------

    • The whil   e loop is used when the
      number of iterations is not known
      in advance. 
    • Executes code as long as a
      condition remains true.

    Syntax:
     While(condition)
     {
        code to be executed
     }

*/

// Example 1 
let count = 0;
while (count < 4) {
    console.log(count);
    count++;
}
console.log("======================================================");
// Example 2

let num = Math.floor(Math.random() * 10) + 1;
while (num !== 7) {
    console.log(num);
    num = Math.floor(Math.random() * 10) + 1;
}

// Example  3

let password = "";
while (password !== "Thakur") {
    password = prompt("Enter thepassword: ");
}
console.log("Password correct!");