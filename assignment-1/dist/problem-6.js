"use strict";
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.
const isRecentBook = (book) => {
    const currentYear = new Date().getFullYear();
    return (currentYear - book.publishedYear <= 5);
};
// Sample Input :
const book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
console.log(isRecentBook(book1));
