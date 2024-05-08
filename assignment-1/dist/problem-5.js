"use strict";
// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.
const calculateAverageGrade = (student) => {
    const totalGrades = student.grades.reduce((sum, grades) => sum + grades, 0);
    const averageGrades = totalGrades / student.grades.length;
    return averageGrades;
};
// Sample Input:
const student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};
console.log(calculateAverageGrade(student1));
