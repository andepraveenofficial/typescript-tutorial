// Tuple

/*
We consider order of Array also
*/

const user:(string | number)[] = ["ab", 10]

let user1 :[string, number, boolean]
// user1 = ["ab", 10, 20]  // Error -> Order of datatype also considered
user1 = ["ab", 10, true]


let rgb:[number, number, number] = [123,221,255]

/* ----------------------- */

type User = [number, string]
let user2:User = [10, "ab"]
// user2[0] = "five" // Error
user2[0] = 5
user2[1] = "cd"
user2.push(10); // first and second guarantee number, string
console.log(user2); // [5, "cd", 10] -> Tuple can be extended
