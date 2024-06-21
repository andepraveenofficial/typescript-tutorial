

type User = {
    readonly id:string  // readonly
    name:string
    email:string
    isActive:boolean
    cardDetails?:number  // optional
}

function createUser(user:User){}

let myUser:User = {
    id:"123",
    name:"praveen",
    email:"praveen@gmail.com",
    isActive:false
}

myUser.email = "h@gmail.com"
// myUser.id = "456" // It gives error because id is readonly




