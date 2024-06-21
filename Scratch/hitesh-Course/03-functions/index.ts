// any is the problem in the typescript
function addTwo(num:number){
    return num+2
}

addTwo(5)

export {}


/* ---------------------------------- */


function getUpper(val:string) {
    console.log(val.toUpperCase())
    return val.toUpperCase()
}

// getUpper()  // 1 argument need for this function
// getUpper(4);  // we send only string value
getUpper("Hello World") // HELLO WORLD

/* ------------------------- */
function signUp(name:string, email:string, age:number){
    console.log(name, email, age)
}

signUp("Praveen","praveen@example.com",27)

/* ----------- defaultValue -------------- */
function logIn(name:string, email:string, isPaid:boolean = false){
    console.log(name, email, isPaid)
}

logIn("Praveen", "praveen@example.com")

/* ------------------- Function return type ---------------------- */

function greet(val:string):string{
    return val
}

const message = greet("Hello World");


function isGreaterThanFive(num:number):boolean{
    if(num > 5){
        return true
    }
    else{
        return false
    }
}

let output = isGreaterThanFive(7);

/*-------------------*/

const getHello = (s:string):string => {
    return ""
}

const output1:string = getHello("f")


/* ------> Array <----- */
const nums = ["one", "two", "three"];


const output2 = nums.map((each:string) => `num is ${each}`);
console.log(output2);


const nums1 = ["one", "two", "three", 4];  
const output3 = nums1.map((each:string | number) => `num is ${each}`);  // use | operator for different datatypes
console.log(output3);


/* -----> Handle Errors <----- */

function consoleError(errmsg:string):void{
    console.log(errmsg);
}

// Some functions never returns a value
function handleError(errmsg:string):never{
    throw new Error(errmsg);
}









export{}