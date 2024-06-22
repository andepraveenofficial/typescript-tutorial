
/*

type User = {
    name: string;
    email:string
    readonly age: number // we cannot modify
    city?:string  // optional 
}

*/

type Name = {
    name:string
}

type Email = {
    email:string
}

type Age = {
    readonly age: number
}

type City = {
    city?:string
}


type User = Name & Email & Age & City

let praveen:User = {
    name:"praveen",
    email:"praveen@example.com",
    age:28
}

praveen.email = "changed@example.com"
console.log(praveen)  // { name: 'praveen', email: 'changed@example.com', age: 28 }

// praveen.age = 29  // Error