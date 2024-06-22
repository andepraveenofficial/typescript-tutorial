// Array

let arr:string[] = ["one", "two", "three"]
arr.push("four")
console.log(arr)  // [ 'one', 'two', 'three', 'four' ]

// arr.push(5)  // Error


/* -----> Multiple Types <----- */
let arr1:(string | number)[] = ["one", "two", "three"]
arr1.push("four")
console.log(arr1)  // [ 'one', 'two', 'three', 'four' ]

arr1.push(5)
console.log(arr1)  // [ 'one', 'two', 'three', 'four', 5 ]