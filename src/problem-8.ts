// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

class Car{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year:number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo = () =>{
        console.log(`Car Information: Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}`);
    }
}

// Sample Input:
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();

