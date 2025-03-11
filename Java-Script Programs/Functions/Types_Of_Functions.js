/*
    Function

    1. Functions Declarations
    2. Functions Expressions
    3. Arrow Functions

*/

// 1. Function Declaration
//  Normal function
// Example

function getSum(num1, num2) {
    return num1 + num2;
}
console.log("Sum is " + getSum(10, 20));
console.log("------------------------------------");
// 2. Function Expressions
// Example
//1
const getPrint = function () {
    console.log("Veer Singh Lodhi(Function Expressions");
}
getPrint();
//2
const getSumNumber = function (num1, num2) {
    return num1 + num2;
}
console.log(getSumNumber(30, 40));
console.log("------------------------------------");
//3. Arrow Functions
//Example

//1.
const getHello = () => {
    console.log("Veer Singh Lodhi(Arrow Function)")
};

const getProduct = (num1, num2) => {
    return num1 * num2;
};
console.log("Product is " + getProduct(20, 20));
console.log("------------------------------------");

