// Accessability Keywords

/*
readonly -> we can access, but cannot modify
key? -> optional key
*/

type User = {
    name: string;
    email:string
    readonly age: number // we cannot modify
    city?:string  // optional 
}

let praveen:User = {
    name:"praveen",
    email:"praveen@example.com",
    age:28,
}
praveen.email = "changed@example.com"
console.log(praveen) // { name: 'praveen', email: 'changed@example.com', age: 28 }
// praveen.age = 29;  //Error