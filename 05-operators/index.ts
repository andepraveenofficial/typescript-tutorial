// 01 Arithmetic 

let num1: number = 10;
let num2: number = 20;
console.log(`SUM : ${num1 + num2}`);
console.log(`SUB : ${num1 - num2}`);
console.log(`MUL : ${num1 * num2}`);
console.log(`DIV : ${num1 / num2}`);

// if a number is even /odd 
let digit: number = 16;
if (digit % 2 === 0) {
    console.log(`${digit} is an Even number`);
}
else {
    console.log(`${digit} is an Odd number`);
}

// 02 Shorthand math 
let val1: number = 10;
let val2: number = 20;
let add: number = val1+val2;
// add = add + (val1 * val2); // 10 +(10*20) = 210
add += (val1 * val2);
console.log(add) // 210


// 03 Increment/ Decrement
let x: number = 10;
// x = x + 1;
x++;
console.log(x);  // 11


// 04 Conditional Operators 
let marks: number = 75;
let results: string = "";
if (marks <= 35) {
    results = "You failed the Exam";
}
else {
    results = "You Cleared the Exam";
}
console.log(results)


// 05 Logical Operators

/*
    && -> TT -> T
    || -> FF -> T
    ^ -> diff -> T
*/

let inRelation: boolean = true;
let parentsAgreed: boolean = true;
if (inRelation && parentsAgreed) {
    console.log("Get Marry Soon");
}
else {
    console.log("wait until parents Agreed")
}


// 06 Ternary 

/*
    (condition) ? true part : false part;
*/

marks = 85;
(marks >= 35) ? results = "You Cleared the Exam" : results = "You failed the Exam";
console.log(results)


// Example
let value1:number = 10
let value2:number = 20

let sum:number = val1 + val2
console.log(sum) // 30

// sum = 10 + "twenty" // Error