# TypeScript

<details>
<summary>Index</summary>

## Index
* Conditionals
* Looping Statements
* Object
* Array
* Functions
* OOps
* Modules
* React Component

</details>

---

<details>
<summary>Statements</summary>

## Conditional Statements

### if-else

```ts 
// if-else
let currentTime: number = 10;
let wishMessage: string = "";

if (currentTime >= 0 && currentTime <= 12) {
    wishMessage = "Good Morning";
}
else if (currentTime >= 13 && currentTime <= 17) {
    wishMessage = "Good Afternoon";
}
else if (currentTime >= 18 && currentTime <= 23) {
    wishMessage = "Good Evening";
}
else {
    wishMessage = "Invalid Hrs";
}
console.log(wishMessage)


```

### Jumping Statements

```ts 
// Switch

let day: number = new Date().getDay();
let today: string = ""
switch (day) {
    case 0:
        today = "Sunday"
        break;
    case 1:
        today = "Monday"
        break;
    case 2:
        today = "Tuesday"
        break;
    case 3:
        today = "Wednesday"
        break;
    case 4:
        today = "Thursday"
        break;
    case 5:
        today = "Friday"
        break;
    case 6:
        today = "Saturday"
        break;
    default:
        console.log("Default Day");
        break;
}

console.log(today)
```

### Looping Statements 

## Looping Statements

```ts 
// for-loop

/*

    for (initialization; condition; incr/decr){
        statements
    }

*/


// print the values from 0 - 10
let result: string = "";
for (let i: number = 0; i <= 10; i++) {
    result += `${i} `
}
console.log(result)  // 0 1 2 3 4 5 6 7 8 9 10


// print the values from 10 - 0 

result = ""
for (let i: number = 10; i >= 0; i--) {
    result += `${i} `
}
console.log(result)  // 10 9 8 7 6 5 4 3 2 1 0 


// multiplication between string and number
console.log("*".repeat(5));

```

### while loop 

```ts 
/*
    while loop

    initialize;
    while(condition){
        statements
        incr / decr
    }
*/

let i: number = 0;
let value: string = "";
while (i <= 10) {
    value += `${i} `
    i++
}
console.log(value);  // 0 1 2 3 4 5 6 7 8 9 10 
```
### do-while
```ts 
/*
    do-while : Execute the statement first then check the condition. this is like postpaid but while loop is a prepaid

    initialize;
    do{
        statements
        incr / decr
    }
    while(condition);

*/


let i: number = 0;
let value: string = "";
do {
    value += `${i} `
    i++
}
while (i <= 10);
console.log(value);  // 0 1 2 3 4 5 6 7 8 9 10 
```

</details>

---

<details>
<summary>Object</summary>

## Object 

```ts 
let mobile: { brand: string, color: string, price: number } = {
    brand: "Apple",
    color: "Silver",
    price: 3500
};
console.log(mobile);
```

```ts 
interface Mobile {
    brand: string;
    color: string;
    price: number;
}

let mobileObj: Mobile = {
    brand: "Apple",
    color: "Silver",
    price: 35000
};
console.log(mobileObj);
console.log(mobileObj.brand);
```


```ts
// Nested Object 

interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
}


interface Student {
    name: string;
    age: number;
    course: string;
    address: Address
}
let student: Student = {
    name: "Arjun Reddy",
    age: 25,
    course: "MBBS",
    address: {
        street: "Jubilee hills",
        city: "Hyderabad",
        state: "Telangana",
        country: "India"

    }
}

console.log(student)
```
</details>


---

<details>
<summary>Array</summary>

## Array 

```ts 
// Array
let colors: string[] = ["White", "Green", "Orange"];
console.log(colors)
```

```ts 
let colorsAndNumbers: (string | number)[] = ["White", "Green", "Orange", 34];
console.log(colorsAndNumbers);
```

```ts 
/*
    Arrays 
*/

let colors: string[] = ["white", "black", "red"];
console.log(colors)

let result: string = ""
for (let item of colors) {
    result += `${item} `
}
console.log(result)  // white black red
```

```ts 
/*
    Array 
*/

// Object Array 
interface Employee {
    sno: string;
    name: string;
    age: number;
    designation: string;
    location: string;
}

let employees: Employee[] = [
    {
        sno: "123",
        name: "Praveen",
        age: 27,
        designation: "Software Engineer",
        location: "Bangalore"
    },
    {
        sno: "124",
        name: "Sweti",
        age: 48,
        designation: "Software Engineer",
        location: "Hyderabad"
    }
];

console.log(employees[1]);


let jrEmployee: Employee[] = employees.filter((emp) => emp.age < 30);
console.log(jrEmployee)
```
</details>

---

<details>
<summary>Functions</summary>

## Functions 

```ts 
// Function -> void  -> does not return anything
let greet = (name: string): void => {
    console.log(`Hello ${name}`)
}
greet("Praveen");

// Function -> string  -> it return string
let greet2 = (name: string): string => {
    return name
}
console.log(greet2("Praveen"))

```

```ts 
// Functions 

/*
    If function return something that type if void,
    Otherwise declare a particular type.
*/
let greet = (name: string): void => {
    let msg: string = `Hello ${name}`
    console.log(msg)
};

greet("Praveen")  // Hello Praveen


// function with return Type 
let add = (a: number, b: number): number => {
    let result: number = a + b;
    return result
}
let output: number = add(10, 20);
console.log(output)  // 30

// function with ab object type as parameter
interface Mobile {
    brand: string;
    color: string;
    price: number;
}

let printMobile = (mobile: Mobile): void => {
    console.log(JSON.stringify(mobile))
}

let mobile: Mobile = {
    brand: "Apple",
    color: "Silver",
    price: 35000
}

printMobile(mobile);
printMobile({
    brand: "Lenovo", color: "Black", price: 48000
});
```
</details>

---

<details>
<summary>OOPs</summary>

## OOPs 

 **OOPs** stands for **Object Oriented Programming** language

```ts 
// Classes Objects

class Mobile {
    /*
    private 
    public 
    protected
    */
    //  private Property and only accessible within class 'Mobile'
    private brand: string;
    private color: string;
    private price: number;

    constructor(brand: string, color: string, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}


let mobile = new Mobile("Apple", "Red", 35000)
console.log(mobile)
// console.log(mobile.brand)  // Property 'brand' is private and only accessible within class 'Mobile'
```

```ts 
// Classes Objects

class Mobile {
    private brand: string;
    private color: string;
    private price: number;

    constructor(brand: string, color: string, price: number) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    // getter - setter 
    public getBrand(): string {
        return this.brand;
    }

    public setPrice(newPrice: number): void {
        this.price = newPrice
    }

    public getPrice(): number {
        return this.price;
    }
}


let mobile = new Mobile("Apple", "Red", 35000)
console.log(mobile.getBrand())  // Apple

console.log(mobile.getPrice());  // 35000 
mobile.setPrice(1000);
console.log(mobile.getPrice());  // 1000

```

### Inheritance
```ts 
// Inheritance

/*
    Inheritance
    Child inherits the properties and methods of Parent.
    -> re-usability, extends
    
*/

class BasicCalc {
    public result: number;

    constructor() {
        this.result = 0;
    }

    public add(a: number, b: number): void {
        this.result = a + b;
        console.log(this.result)
    }

    public sub(a: number, b: number): void {
        this.result = a - b;
        console.log(this.result)
    }
}


let basicCalc: BasicCalc = new BasicCalc();
basicCalc.add(10, 20); // 30
basicCalc.sub(10, 20); // -10


class AdvCalc extends BasicCalc {
    constructor() {
        super();  // parent class constructor
    }

    // Extending Functionality
    public mul(a: number, b: number): void {
        this.result = a * b;
        console.log(this.result)
    }

    // Method Overriding
    public sub(a: number, b: number): void {
        this.result = a - b - b;
        console.log(this.result)
    }
}


let advCalc = new AdvCalc()
advCalc.mul(10, 20);  // 200

advCalc.add(10, 20); //30
advCalc.sub(40, 10);  // 20

```

### Inheritance 

```ts 
// Interfaces

interface IStudent {
    firstName: string;
    lastName: string;
    age: number;
    course: string;

    fullName: () => string;
    biography: () => void;
}


class Student implements IStudent {
    firstName: string;
    lastName: string;
    age: number;
    course: string;

    constructor(firstName: string, lastName: string, age: number, course: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }

    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public biography(): void {
        let bio: string = `
            Full NAME : ${this.fullName()}
            AGE : ${this.age}
            COURSE : ${this.course}
    `;

        console.log(bio)
    }

}



let student = new Student("Arjun", "Reddy", 26, "MBBS");
student.biography(); 
```
</details>

---

<details>
<summary>Modules</summary>

## Modules 

```ts App.ts 
// Modules 

/*
import / export
*/

import { Student } from "./Student";

let student = new Student("Arjun", "Reddy", 26, "MBBS");
student.biography(); 
```

```ts IStudent.ts 
export interface IStudent {
    firstName: string;
    lastName: string;
    age: number;
    course: string;

    fullName: () => string;
    biography: () => void;
}
```

```ts Student.ts 
import { IStudent } from "./IStudent";


export class Student implements IStudent {
    firstName: string;
    lastName: string;
    age: number;
    course: string;

    constructor(firstName: string, lastName: string, age: number, course: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }

    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public biography(): void {
        let bio: string = `
            Full NAME : ${this.fullName()}
            AGE : ${this.age}
            COURSE : ${this.course}
    `;

        console.log(bio)
    }
}
```
</details>

---
