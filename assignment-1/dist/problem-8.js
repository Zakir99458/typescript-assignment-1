"use strict";
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.
class Car {
    constructor(brand, model, year) {
        this.displayInfo = () => {
            console.log(`Car Information: Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}`);
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
// Sample Input:
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();
