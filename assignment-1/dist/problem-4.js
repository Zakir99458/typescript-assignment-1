"use strict";
// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
const reverseArray = (arr) => {
    const reverseArray = arr.reverse();
    return reverseArray;
};
console.log(reverseArray(["apple", "banana", "cherry"]));
