// in operator
// Checking type

interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdmin(account : User | Admin){
    if ("isAdmin" in account){
        return account.isAdmin
    }
}