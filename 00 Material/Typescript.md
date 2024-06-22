# Typescript 

<details>
<summary>Index</summary>

## Index
* Introduction
* JS vs TS
* Setup
* Execute Typescript
* Typescript Datatypes
* Variable Declaration
* Operators
* type
* Interface

</details>

---

<details>
<summary>Introduction</summary>

## Introduction
* Typescript is a statically typed language.
* TypeScript checks for errors in your code before you run it by making sure that the variables and functions have the correct types.
* Typescript is a superset of Javascript.
* TypeScript includes all features of JavaScript and adds extra features on top.
* Typescript is a development tool. if you want to run, you need to convert `TS` into `JS`.
* `Typescript = Type + Javascript`

![Typescript](./Assets/01-introduction/01-typescript.png)


### Advantages of Typescript
* TypeScript detects errors while you write your code or when you try to compile it. This means you catch mistakes early, before running the program.
* Compilation is the process of converting code written in a high-level programming language (like TypeScript) into a lower-level language (like JavaScript) that a computer can execute.

![Compile Error](./Assets/01-introduction/02-compile-error.png)

### Type Safety

```ts 
let age: number = 20;
// age = "twenty";  // Error

age = 27;  // No Error
console.log(age); // 27

// console.log(age.toUpperCase()); // Error
```

### Validation

* Javascript 
```js
function addTwo(num){
    if (typeof(num) === number){
        return num+2
    }

    return null;
}

addTwo(5);
```

* Typescript
```ts
function addTwo(num:number){
    return num+2
}

addTwo(5);
```


</details>

---

<details>
<summary>JS vs TS</summary>

## JS vs TS
* JS -> Javascript is a Dynamically Types Language
* TS -> Typescript is a Statically Typed Language

### Javascript
```js
// Javascript


/* -----> variable declaration & re-assignment <----- */ 

let a = 10;
a = 20;
a = "twenty";
a = true;
a = ["Apple", "Banana"];
a = {name:"praveen", age:28};
a = function(){}
a = null;


/* -----> Function Declaration <----- */ 

function user(name, age){
    console.log(name, age);
}

user("praveen", 28);  // praveen 28
user(28, "praveen");  // 28 praveen
user("praveen");  // praveen undefined
user(28);  // 28 undefined
```

### Typescript
```ts
// Typescript 

/* -----> variable declaration & re-assignment <----- */ 

let a:number = 10
a = 20 // No Error

a = "twenty"  // Error
a = true  // Error
a = ["Apple", "Banana"]  // Error
a = function(){}  // Error
a = null  // Error


/* -----> Function Declaration <----- */ 
function user(name:string, age:number):void{
    console.log(name, age)
}

user("praveen", 28)  // praveen 28
user(28, "praveen")  // Error
user("praveen")  // Error
user(28)  // Error
```
</details>

---

<details>
<summary>Setup</summary>

## Setup
1. Install node
2. `npm install -g typescript`
3. convert __TS__ to __JS__ by using TSC (typescript compiler)
   * Example : `tsc index.ts`

### Version Checking 
![Version Checking](./Assets/02-setup/01-version-checking.png)

### Run The Typescript file
* Run the TS file with third-party package
* `npm install ts-node`
* Run TS file -> `ts-node index.ts`

### Realtime Project Setup
1. Install Node
2. `npm init -y` Setup Node Environment -> Create package.json file
3. create `index.html`
4. create two folders :
    * __src__ : development
    * __dist__ : production
5. `tsc --init` create __tsconfig.json__ file
6. create `index.ts` file in src folder
7. modify __tsconfig.json__ file -> __"ourDir":"./dist"__ for tell dist folder path
8. Run the Application on watch mode -> `tsc -w`
   * It automatically generates `JS` file of `TS` in dist folder when changes in TS files.
9. Link generated `JS` file in dist folder to `index.html`
10. Start the Application (index.html) on live-server using __vscode extension live server__.
11. `git init`  && `.gitignore` for untrack the node_modules 
12. Optional -> use third-party-package 
    * `npm install lite-server`
    * Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change
    * Start : `lite-server` 
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
</details>

---

<details>
<summary>Variable Declaration</summary>

## Variable Declaration
* use camelCase for variable
* Example : __myName__

### Syntax
* `let variableName:type = value`

### Example
```ts 
let age: number = 20;
// age = "twenty";  // Error

age = 27;  // No Error
console.log(age); // 27
```
### Datatypes
* string
* number
* boolean
* null
* undefined
* any

```ts 
// String
let myName: string = "Ande Praveen";

// number 
let myAge: number = 28;

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
```



</details>

---

<details>
<summary>Operators</summary>

## Operators
1. Arithmetic -> +, -, *, /, %
2. Shorthand math -> +=, -=, *=, /=
3. Increment/ Decrement -> ++, --
4. Conditional -> < , >, <= , >=, !==
5. Logical -> &&, ||, !
6. Ternary -> ?:

### Example
```ts
let val1:number = 10
let val2:number = 20

let sum:number = val1 + val2
console.log(sum) // 30

sum = 10 + "twenty" // Error
```

</details>

---

<details>
<summary>type</summary>

## type


</details>

---

<details>
<summary>Interface</summary>

## Interface
* Interface is used to define the shape of an object.
* interface can be extended using the extends keyword.

</details>