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