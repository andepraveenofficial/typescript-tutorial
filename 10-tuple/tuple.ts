// Tuple

let user:[string, number, boolean]
// user = ["abc", 10, 20]  // Error -> Order of datatype also considered
user = ["abc", 10, true]


let rgb:[number, number, number] = [123,255,212]

/* -----> Tuple Extend <----- */

user.push("last")
console.log(user)  //  // first, second and third guarantee string, number, boolean


/* -----> Array type <----- */
type Items = [string, number]
let items: Items = ["abc", 10] 
// items[0] = 20  // Error
items[0] = "def"
items[1] = 30
items.push("last")  // first and second guarantee number, string
console.log(items) // [ 'def', 30, 'last' ] -> Tuple can be extended
