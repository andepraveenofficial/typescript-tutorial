# Typescript 

<details>
<summary>Index</summary>

## Index
* Introduction

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
