// Object

// JS Object
const user = {
    name:"praveen",
    email:"praveen@example.com",
    age:28
}

/* -----> object as argument <----- */
function createUser(user:{name:string, email:string, age:number}){
    console.log(user)
}

createUser({name:"praveen", email:"praveen@example.com", age:28})

/* -----> return an object <----- */
function getUser(user:{name:string, email:string, age:number}):{name:string, age:number}{
    return {name:"praveen", age:28}
}

const praveen = getUser({name:"praveen", email:"praveen@example.com", age:28})
console.log(praveen)