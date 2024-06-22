// Type Alias

type User = {
    name: string
    email:string
    age:number
}

type GetUserReturn = {
    name:string
    age:number
}

function getUser(user:User):GetUserReturn{
    return {name:"praveen", age:28}
}

const praveen = getUser({name:"praveen", email:"praveen@example.com", age:28});

console.log(praveen)