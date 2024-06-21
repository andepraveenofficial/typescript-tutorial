// Functions

/* -----> using any datatype technique to add type <----- */
function square(num:number){
    return num*num
}

const twoSquare = square(2);
console.log(twoSquare); // 4

/* -----> Argument Type <----- */
function getUpper(val:string){
    console.log(val.toUpperCase())
}

// getUpper()  // need 1 argument
// getUpper(10) // send only string argument
getUpper("Hello World")  // HELLO WORLD

/* -----> Multiple Arguments <----- */

function signUp(name:string, email:string, age:number){
    console.log(name, email, age)
}

// signUp("praveen", 27, "praveen@example.com") // follow the argument type and order also
signUp("praveen", "praveen@example.com", 27)  // OK


/* -----> Default Values <----- */

function logIn(name:string, email:string, isPaid:boolean=false){
    console.log(name, email, isPaid)
}
logIn("praveen", "praveen@example.com", true)  // OK
logIn("praveen", "praveen@example.com")  // OK


/* -----> Function return type <----- */
function isPositive(num:number):boolean{
    if (num > 0){
        return true
    }
    return false   
}

const result:boolean = isPositive(10)

/* -----> Iteration <----- */
const numList1 = ["one", "two", "three"]
const output1 = numList1.map((num:string) => num)

const numList2 = ["one", "two", "three", 4]
const output2 = numList2.map((num:string | number) => num)

/* -----> Never return <----- */
// Some functions never returns a value
function handleError(err:string):never{
    throw new Error(err);
}