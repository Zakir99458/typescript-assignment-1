// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
var filterEvenNumbers = function (arr) {
    // const evenNumber = arr.reverse();
    return (arr.filter(function (num) { return num % 2 === 0; }));
};
// Sample Input:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
