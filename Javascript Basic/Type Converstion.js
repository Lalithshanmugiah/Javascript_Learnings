// Type Conversion in JavaScript
// Type conversion is the process of converting a value from one data type to another.
// In JavaScript, there are two types of type conversion: implicit and explicit.

// Implicit type conversion is done automatically by JavaScript, while explicit type conversion is done manually by the programmer.

// Implicit Type Conversion

let num = 10; // Number
let str = "5"; // String
let result = num + str; // Implicit type conversion
console.log("Implicit Type Conversion Result:", result);


// Explicit Type Conversion

let num2 = 10; // Number
let string = "5"; // String
let result2 = num2 + Number(string); // Explicit type conversion using Number()
console.log("Explicit Type Conversion Result:", result2);

// boolean conversion

let boolValue = true; // Boolean
console.log("Boolean to Number:", boolValue); // Converts true
