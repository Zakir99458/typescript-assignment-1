// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
var logString = function (param) {
    if (typeof param === 'string') {
        console.log(param);
    }
    else {
        console.error('Error');
    }
};
// Sample Input 1: 
logString("Hello, TypeScript!");
