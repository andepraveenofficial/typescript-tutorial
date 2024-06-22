// Methods

class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea(): number {
        return this.width * this.height;
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Usage
let myRectangle = new Rectangle(10, 5);

console.log(myRectangle.calculateArea());      // Output: 50
console.log(myRectangle.calculatePerimeter()); // Output: 30
