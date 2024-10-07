# Typescript

<details>
<summary>Index</summary>

## Index

- Introduction
- JS vs TS
- Setup
- Execute Typescript
- Typescript Datatypes
- Variable Declaration
- Operators
- Functions
- type & interface & Generics
- OOPs
- Modules
- Keywords
- Symbols

</details>

---

<details>
<summary>Introduction</summary>

## Introduction

- Typescript is a **Statically Typed** language.
- It is a superset of Javascript.
- It includes all features of JavaScript and adds extra features on top.
- TypeScript checks for errors in your code before you run it.
- It verifies that variables and functions have the correct types.
- Typescript is a development tool. if you want to run, you need to convert `TS` into `JS`.
- `Typescript = Type + Javascript`

![Typescript](./Assets/01-introduction/01-typescript.png)

- Compilation is the process of converting code written in a high-level programming language (like TypeScript) into a lower-level language (like JavaScript) that a computer can execute.

![Compile Error](./Assets/01-introduction/02-compile-error.png)

### Type Safety

```ts
let age: number = 20;
// age = "twenty";  // Error

age = 27; // No Error
console.log(age); // 27

// console.log(age.toUpperCase()); // Error
```

### Validation

```js
// Javascript

function addTwo(num) {
  if (typeof num === number) {
    return num + 2;
  }

  return null;
}

addTwo(5);
```

```ts
// Typescript

function addTwo(num: number) {
  return num + 2;
}

addTwo(5);
```

</details>

---

<details>
<summary>JS vs TS</summary>

## JS vs TS

- JS -> Javascript is a **Dynamically Typed** Language
- TS -> Typescript is a **Statically Typed** Language

### Javascript

```js
// Javascript

/* -----> variable declaration & re-assignment <----- */

let a = 10;
a = 20;
a = "twenty";
a = true;
a = ["Apple", "Banana"];
a = { name: "praveen", age: 28 };
a = function () {};
a = null;

/* -----> Function Declaration <----- */

function user(name, age) {
  console.log(`My name is ${name} and My age is ${age}`);
}

user("praveen", 28); // My name is praveen and My age is 28
user(28, "praveen"); // My name is 28 and My age is praveen
user("praveen"); // My name is praveen and My age is undefined
user(28); // My name is 28 and My age is undefined
```

### Typescript

```ts
// Typescript

/* -----> variable declaration & re-assignment <----- */

let a: number = 10;
a = 20; // No Error

a = "twenty"; // Error
a = true; // Error
a = ["Apple", "Banana"]; // Error
a = function () {}; // Error
a = null; // Error

/* -----> Function Declaration <----- */
function user(name: string, age: number): void {
  console.log(`My name is ${name} and My age is ${age}`);
}

user("praveen", 28); // My name is praveen and My age is 28
user(28, "praveen"); // Error
user("praveen"); // Error
user(28); // Error
```

</details>

---

<details>
<summary>Setup</summary>

## Setup

1. Install node
2. Install typescript : `npm install -g typescript`
3. convert **TS** to **JS** by using TSC (typescript compiler)
   - Example : `tsc index.ts`
4. Run converted `JS` file
   - Example : `node index.js`

### Version Checking

![Version Checking](./Assets/02-setup/01-version-checking.png)

### Run The Typescript file

- Run the TS file with third-party package
- `npm install ts-node`
- Run TS file -> `ts-node index.ts`
- It is used to run `TS` file without convert to `JS` file.

### Realtime Project Setup

1. Install Node
2. `npm init -y` Setup Node Environment -> Create `package.json` file
3. create `index.html`
4. create two folders :
   - **src** : development
   - **dist** : production
5. `tsc --init` create **tsconfig.json** file
6. create `index.ts` file in src folder
7. modify **tsconfig.json** file -> **"ourDir":"./dist"** for tell dist folder path
8. Run the Application on watch mode -> `tsc -w`
   - It automatically generates `JS` file of `TS` in dist folder when changes in **TS** files.
9. Link generated `JS` file in dist folder to `index.html`
10. Start the Application (index.html) on live-server using **vscode extension live-server**.
11. `git init` && `.gitignore` for untrack the node_modules
12. Optional -> use third-party-package
    - `npm install lite-server`
    - It opens the app in the browser and refreshes it when HTML or JavaScript changes.
    - Start : `lite-server`
13. `npm start` -> start the application

</details>

---

<details>
<summary>Execute Typescript</summary>

## Execute Typescript

1. Create a file with `.ts` extension -> `index.ts`
2. Write Typescript code in the file
3. Compile the Typescript code using `tsc` command -> `tsc index.ts`
4. Run the generated JavaScript file using `node` command -> `node index.js`

![tsc](./Assets/03-execute-typescript/02-tsc.png)

![Execute Typescript](./Assets/03-execute-typescript/01-execute-typescript.png)

</details>

---

<details>
<summary>Typescript Datatypes</summary>

## Typescript Datatypes

![Typescript Types](./Assets/04-datatypes/01-datatypes.png)

### Primitive Datatypes

1. number
2. string
3. boolean
4. null
5. Undefined
6. any
7. unknown

</details>

---

<details>
<summary>Variable Declaration</summary>

## Variable Declaration

- use camelCase for variable
- Example : **myName**

### Syntax

- `let variableName:type = value`

### Example

```ts
let age: number = 20;
// age = "twenty";  // Error

age = 27; // No Error
console.log(age); // 27
```

### Primitive Datatypes

1. number
2. string
3. boolean
4. null
5. Undefined
6. any
7. unknown

```ts
// number
let myAge: number = 28;

// String
let myName: string = "Ande Praveen";

// boolean
let isMale: boolean = true;

// null
let test: null = null;

// undefined
let abc: undefined = undefined;

// any -> we can assign anything like Javascript -> avoid the type checking
let a: any = "Text";
a = 10;
a = true;
a = null;
a = {};

// unknown -> It has type checking
let b: unknown;
console.log(typeof b);
```

### Reference Types

```ts
// Array of strings
let arr1: string[] = ["one", "two", "three"];

// Array of numbers
let arr2: number[] = [1, 2, 3];
```

### union -> |

Pipe Symbol -> |
It is used to provide flexible datatypes.

```ts
let salary: number | string;
salary = 100;
salary = "Hundred";
```

</details>

---

<details>
<summary>Operators</summary>

## Operators

1. Arithmetic -> `+, -, *, /, %`
2. Shorthand math -> `+=, -=, *=, /=`
3. Increment/ Decrement -> `++, --`
4. Conditional -> `< , >, <= , >=, !==`
5. Logical -> `&&, ||, !`
6. Ternary -> `?:`

### Example

```ts
let val1: number = 10;
let val2: number = 20;

let sum: number = val1 + val2;
console.log(sum); // 30

// sum = 10 + "twenty"; // Error
```

</details>

---

<details>
<summary>Functions</summary>

## Functions

- Parameters & Arguments
- Default Values
- Function return
  - void -> returns undefined
  - types
  - never -> doesn't returns anything
- Iteration

### Parameters & Arguments

```ts
// Function Declaration with Parameters
function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
}

// Call the Function with Arguments
// add(10, "twenty")  // Error -> Argument Type
add(10, 20); // 30 ->  send only number type arguments
```

```ts
// Function Declaration with Parameters
function signUp(name: string, email: string, age: number) {
  console.log(name, email, age);
}

// signUp("praveen", 27, "praveen@example.com") // follow the argument type and order also
signUp("praveen", "praveen@example.com", 27); // OK
```

### Default Values

```ts
// Function declaration with Default Values
function logIn(name: string, email: string, isPaid: boolean = false) {
  console.log(name, email, isPaid);
}
logIn("praveen", "praveen@example.com", true); // OK
logIn("praveen", "praveen@example.com"); // OK
```

### Function return

Some Functions does not return any value.

```ts
// Void -> returns undefined

// Function returns nothing
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

add(10, 20);
```

```ts
// never -> Some functions never returns a value
// It mostly used to show Errors

function handleError(err: string): never {
  throw new Error(err);
}

handleError("This is Error");
```

```ts
// It Returns mentioned type
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

let output = add(10, 20);
console.log(output); // 30
```

### Iteration

```ts
const arr = ["one", "two", "three", 4];
const output = arr.map((num: string | number) => num);
console.log(output); // ["one", "two", "three", 4]
```

</details>

---

<details>
<summary>type & interface & Generics</summary>

## type & interface & Generics

### type

- `type` is a way to describe the structure of data.

```ts
// variable
let name: string = "Praveen";
```

```ts
// Object
type User = {
  name: string;
  email: string;
  age: number;
  city?: string; // Optional Property
};

const user1: User = {
  name: "Praveen",
  email: "praveen@example.com",
  age: 28,
};

const user2: User = {
  name: "Praveen",
  email: "praveen@example.com",
  age: 28,
  city:"Hyderabad"
};
```

```ts
// Concatenation
type Person = {
  firstName: string;
  lastName: string;
};

type Employee = Person & {
  employeeId: number;
};

let employee: Employee = {
  firstName: "Praveen",
  lastName: "Ande",
  employeeId: 12345,
};

```

```ts
// Union
type ID = number | string;

type User = {
  id: ID;
  name: string;
};
```

### interface

Interfaces are used to define the structure of an object.

```ts
// Object Shape
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Praveen",
  age: 28,
};

// Concatenation -> Extending Interfaces

interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  name: "Praveen",
  age: 28,
  employeeId: 1234,
};
```

```ts
// Object Shape
interface Person {
  name: string;
  age: number;
}

// Open-Interface
interface Person {
  employeeId: number;
}

let employee: Person = {
  name: "Praveen",
  age: 28,
  employeeId: 1234,
};
```

### Combination of type & interface

```ts
// Concatenation
type Person = {
  firstName: string;
  lastName: string;
};

interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  firstName: "Praveen",
  lastName: "Ande",
  employeeId: 12345,
};

console.log(employee);
```

```ts
// Concatenation
interface Person {
  firstName: string;
  lastName: string;
}

type Employee = Person & {
  employeeId: number;
};

let employee: Employee = {
  firstName: "Praveen",
  lastName: "Ande",
  employeeId: 12345,
};

```

### Nested

```ts
// Nested Object

interface Address {
  state: string;
  country: string;
}

interface Student {
  name: string;
  age: number;
  address: Address;
}
let student: Student = {
  name: "Praveen",
  age: 28,
  address: {
    state: "Andhra Pradesh",
    country: "India",
  },
};

let lotsOfStudents: Student[] = [];
```

### Generics

Generics in programming allow you to create reusable functions or classes that can work with different types of data by using placeholders instead of specific types. This flexibility helps in writing code that can handle various data without repetition.

```ts
function fn<T>(arg: T): T {
  return arg;
}

let result1 = fn<number>(10); // T is replaced with number
let result2 = fn<string>("Hello World"); // T is replaced with string

console.log(result1); // 10
console.log(result2); // Hello World
```

</details>

---

<details>
<summary>OOPs</summary>

## OOPs

**OOPs** stands for **Object Oriented Programming** language

### Basic Class

```ts
// Basic Class

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const praveen = new User("praveen", 28);
console.log(praveen); // User { name: 'praveen', age: 28 }
```

### Access Modifiers

- public
- private -> private Property and only accessible within the class
- protected

```ts
// Mobile class
class Mobile {
  // Properties
  public brand: string; // Accessible from  anywhere
  private color: string; // Accessible only within the class
  protected price: number; // Accessible within the class and subclasses

  // Constructor
  constructor(brand: string, color: string, price: number) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  // Public method
  public displayDetails(): void {
    console.log("I am public method");
  }

  // Protected method
  protected applyDiscount(discount: number): void {
    console.log("I am protected method");
  }

  // Private method
  private calculateTotalPrice(quantity: number): number {
    console.log("I am private method");
  }
}

// Example usage
let mobile = new Mobile("Apple", "Red", 35000);
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
    this.price = newPrice;
  }

  public getPrice(): number {
    return this.price;
  }
}

let mobile = new Mobile("Apple", "Red", 35000);
console.log(mobile.getBrand()); // Apple

console.log(mobile.getPrice()); // 35000
mobile.setPrice(1000);
console.log(mobile.getPrice()); // 1000
```

### Inheritance

```ts
// Inheritance

/*
    Inheritance: 
    Child inherits the properties and methods of Parent.
*/

class BasicCalc {
  public result: number;

  constructor() {
    this.result = 0;
  }

  public add(a: number, b: number): void {
    this.result = a + b;
    console.log(this.result);
  }

  public sub(a: number, b: number): void {
    this.result = a - b;
    console.log(this.result);
  }
}

let basicCalc: BasicCalc = new BasicCalc();

basicCalc.add(10, 20); // 30
basicCalc.sub(10, 20); // -10

class AdvCalc extends BasicCalc {
  constructor() {
    super(); // parent class constructor
  }

  // Extending Functionality
  public mul(a: number, b: number): void {
    this.result = a * b;
    console.log(this.result);
  }

  // Method Overriding
  public sub(a: number, b: number): void {
    this.result = a - b - b;
    console.log(this.result);
  }
}

let advCalc = new AdvCalc();
advCalc.mul(10, 20); // 200

advCalc.add(10, 20); //30
advCalc.sub(40, 10); // 20
```

### Implements
When a class implements an interface, it promises to include all the things listed in that interface.

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

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    course: string
  ) {
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

    console.log(bio);
  }
}

let student = new Student("Arjun", "Reddy", 26, "MBBS");
student.biography();
```
```ts
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("story was created");
  }
}
```

</details>

---

<details>
<summary>Modules</summary>

## Modules
- import / export

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

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    course: string
  ) {
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

    console.log(bio);
  }
}
```

```ts App.ts

import { Student } from "./Student";

let student:Student = new Student("Arjun", "Reddy", 26, "MBBS");
student.biography();
```


</details>

---

<details>
<summary>Keywords</summary>

## Keywords

- Accessability Keywords

### Accessability Keywords

- readonly
- optional
- public
- private
- protected

</details>

---

<details>
<summary>Symbols</summary>

## Symbols

- ? -> Optional
- | -> Union -> Pipe Symbol
- & -> Concatenation

</details>

---
