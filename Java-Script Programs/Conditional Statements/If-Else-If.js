

/*
    A. 
    1. If Conditional Statement
    2. If Else Conditional Statement
    3. If Else If Condition Statement 
    4. Nested
    
*/

// 1. If Conditional Statement
// The if statement is the most basic form of a conditional statement. It executes a block of code if a specified condition evaluates to true.
//Example 
const temp = 25;
    if (temp > 20)
        console.log("It's a warm day!!");
        
    let isLogged = true;
    if (isLogged) {
        console.log("User is logged in.");
    }

// 2. If Else Conditional Statement
//  The if-else statement extends the if statement by providing an alternative block of code to execute when the condition is false.
//Example 
    let hour = 14;
    if (hour < 12) {
    console.log("Good morning!");
    } else {
    console.log("Good afternoon!");
    }

    let isLoggedIn = false;
    if (isLoggedIn) {
    console.log("User is logged in.");
    } else {
    console.log("Please log in to continue.");
    }

// 3. If-Else If Conditional Statement
// The if-else if-else statement allows you to test multiple conditions sequentially
//Example

    let score = 75;
    if (score >= 90) {
    console.log("Grade: A");
    } else if (score >= 80) {
    console.log("Grade: B");
    } else {
    console.log("Grade: C");
    }

//GitHub.com/VeerSinghLodhi
console.log("---------------------Conditional Statement---------------------"); 



