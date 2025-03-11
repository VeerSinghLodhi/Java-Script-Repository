
/*
    Normal Function(Functions Declarations)
*/

//Example 1

function getAllSumDigitNumber(num){
    total=0
    while(num!=0){
        digit=num%10;
        total+=digit;
        num/=10;
        num=Math.floor(num);
    }
    return total;
}
console.log("Sum of All Digit "+getAllSumDigitNumber(12345));