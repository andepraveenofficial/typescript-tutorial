"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any is the problem in the typescript
function addTwo(num) {
    return num + 2;
}
addTwo(5);
/* ---------------------------------- */
function getUpper(val) {
    console.log(val.toUpperCase());
    return val.toUpperCase();
}

// getUpper()  // 1 argument need for this function
// getUpper(4);  // we send only string value
getUpper("Hello World"); // HELLO WORLD
/* ------------------------- */
function signUp(name, email, age) {
    console.log(name, email, age);
}
signUp("Praveen", "praveen@example.com", 27);
/* ----------- defaultValue -------------- */
function logIn(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
}
logIn("Praveen", "praveen@example.com");
