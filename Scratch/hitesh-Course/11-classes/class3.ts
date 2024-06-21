// Class

// Other Syntax

class User{
    readonly course:string = "React"
    constructor(
        public name:string, 
        public email:string,
        private userId:string
    ){
        this.name = name
        this.email = email
    }
}


const praveen = new User("praveen", "praveen@gmail.com", "12345");
console.log(praveen)

