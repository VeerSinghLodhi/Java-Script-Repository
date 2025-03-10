
/*
    Switch Case
    Nested
*/

// The switch statement is used to perform different actions based on different conditions.

/*

    switch (variable)
    {
        case 1: ……………….;
            break;
        case 2: ……………….;
            break;
            // ... (continue for other cases)
        default: …………………………………;
    }

*/
//Example

let dayOfWeek = 2;
let dayName;
switch (dayOfWeek) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    // ... (continue for other days)
    default:
    dayName = "Invalid Day";
}
console.log("Today is "+dayName);