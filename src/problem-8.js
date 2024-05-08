// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        var _this = this;
        this.displayInfo = function () {
            console.log("Car Information: Brand: ".concat(_this.brand, "; Model: ").concat(_this.model, "; Year: ").concat(_this.year));
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
// Sample Input:
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();
