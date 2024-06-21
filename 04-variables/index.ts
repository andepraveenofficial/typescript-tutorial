// Variables

/* -----> Declare a Type Statically <----- */

// number
let age:number = 20
// age = "twenty" // Error
age = 27  // No-Error
console.log(age)  // 27

// string
let myName:string = "Praveen"
let output = myName.toLowerCase();  // praveen
console.log(output) // 

/* -----> Declare a Type Dynamically <----- */
let salary = 80000;
salary.toFixed();
// salary = "eighty"  // Error
salary = 75000
console.log(salary)  // 75000

/* -----> any <----- */
// any -> we can assign anything like Javascript -> avoid the type checking
let a: any = "Text";
a = 10;
a = true;
a = null;
a = {};

/* -----> mention the Type using any Technique <----- */
let city:string

function getCity(){
    // return 2334  // Error
    return "Hyderabad"
}

city = getCity()
console.log(city)  // Hyderabad
