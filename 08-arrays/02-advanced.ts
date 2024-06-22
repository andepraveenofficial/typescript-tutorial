// Array

/*
Generic -> <>

* The <> symbols in TypeScript are used for generics. 
* Generics allow you to write code that can work with any type of data.
*/

let arr:Array<string> = ["one", "two", "three"]
arr.push("four")
console.log(arr)  // [ 'one', 'two', 'three', 'four' ]

// arr.push(5)  // Error


/* -----> Multiple Types <----- */
let arr1:Array<string | number> = ["one", "two", "three"]
arr1.push("four")
console.log(arr1)  // [ 'one', 'two', 'three', 'four' ]

arr1.push(5)
console.log(arr1)  // [ 'one', 'two', 'three', 'four', 5 ]