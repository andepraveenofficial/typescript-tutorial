// Union -> using pipe symbol

let score:number | string | boolean = 5
score = "five"
score = true
/* -------------------- */

type User = {
    name:string
    id:number
}

type Admin = {
    username:string
    id:number
}

let praveen:User | Admin = {
    name:"Praveen",
    id:100
}

praveen = {
    username:"Praveen",
    id:100
}

/* ------------------ */

function getDbId(id:number | string){
    // making some API calls
    console.log(`DB id is: ${id}`)
}

getDbId(3)
getDbId("3")

/* -------------------- */

function getDbId1(id:number | string){
   if (typeof id === "string"){
    id.toLowerCase();
   }
   else if (typeof id === "number"){
    id = id+3
   }
}

/* --------------------- */
// const data:string | number[] = [1,2,3,"4"]  // Some mistake
const data:(string | number)[] = [1,2,3,"4"] // this is correct way
const data1:(string | number | boolean)[] = [1,2,3,"4", true] // this is correct way



/* ------------------ */
let pi:3.14 = 3.14
// pi = 3.145  // Error

/* ------------------- */
let seatAllotment :"aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "middle"

// seatAllotment = "upper" // Error
