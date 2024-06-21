// Object

const user = {
    name:"praveen",
    email:"praveen@example.com",
    isActive:true
}

function createUser({name:string, isPaid:boolean}){}

createUser({name:"praveen", isPaid:false})


/*-------------------*/

function createCourse():{name:string, price:number}{
    return {name:"typescript", price:999}
}















export {}