// Classes

class User{
    email:string
    name:string
    readonly city:string = "Hyderabad"
    course:string = ""

    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}


const praveen = new User("praveen@gmail.com", "praveen")

// praveen.city = "Hyderabad"  // Not allowed to modify
praveen.course = "React"
console.log(praveen);


