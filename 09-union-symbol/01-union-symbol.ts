// Union

/*
Union -> pipe symbol -> |
*/

/* -----> Primitive <----- */
let score: string | number | boolean = 50;
score = "five";
score = 80;
score = false;

console.log(score); // false

/* -----> Reference (Object) <----- */

type User = {
  username: string;
};

type Admin = {
  name: string;
  id: number;
};

let praveen: User | Admin;

praveen = {
  username: "praveen",
};
console.log(praveen); // { username: 'praveen' }

praveen = {
  name: "admin praveen",
  id: 100,
};
console.log(praveen); // { name: 'admin praveen', id: 100 }

// Other
const data: (string | number)[] = [1, 2, 3, "4"]; // this is correct way

/* -----> Static Type <----- */

let pi: 3.14 = 3.14;
// pi = 3.145  // Error

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "upper" // Error

/* -----> Function <----- */
function fn(id: number | string) {
  if (typeof id === "string") {
    id = id.toLowerCase();
  } else if (typeof id === "number") {
    id = id + 3;
  }

  console.log(id);
}

fn("Three"); // three
fn(3); // 6
