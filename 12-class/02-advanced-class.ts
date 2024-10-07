// Class

// Other Syntax for mention the Type

class User{
    readonly course:string = "React"
    constructor(
        public name:string, 
        public email:string
    ){
        this.name = name
        this.email = email
    }
}


const praveen:User = new User("praveen", "praveen@example.com");
console.log(praveen)

