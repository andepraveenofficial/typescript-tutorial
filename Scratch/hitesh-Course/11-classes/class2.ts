// Class

// Access

class User{
    name:string
    private email:string
    public city:string = "Hyderabad"
    readonly course:string = "React"
    constructor(name:string, email:string){
        this.name = name
        this.email = email
    }
}


const praveen = new User("praveen", "praveen@gmail.com");
console.log(praveen)

console.log(praveen.name)
// console.log(praveen.email)  // Error
console.log(praveen.city)


// praveen.course = "Javascript" // Error