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