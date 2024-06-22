// Array

/* -----> Object Inside Array <----- */

type User = {
    name:string
    age:number
}

let arr:Array<User> = []
arr.push({name:"praveen", age:28})
console.log(arr)  // [ { name: 'praveen', age: 28 } ]


/* -----> Array inside Array <----- */

let arr1:number[][] = []
arr1.push([1,2])
console.log(arr1)  // [ [ 1, 2 ] ]

// arr1.push(["three", "four"]) // Error




